import React, { FC, useRef, useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { match, useParams } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import Masonry from 'react-masonry-css';
import { Theme } from 'theme';
import theme from '../theme';
import { gsap } from 'gsap';
import { MenuButton, Typography } from '../components';
import { getWorkImages, getWorks } from '../features/works/actions';

type OwnProps = {
  match: match<{ id: string }>;
};

const mapStateToProps = (state: RootState, { match }: OwnProps) => ({
  infos: state.works.infos[match.params.id],
  images: state.works.images[match.params.id],
});

const dispatchProps = { getWorkImages, getWorks };

const connector = connect(mapStateToProps, dispatchProps);

type Props = ConnectedProps<typeof connector>;

const ProjectView: FC<Props> = ({
  infos,
  images = [],
  getWorkImages,
  getWorks,
}) => {
  const params = useParams<{ id: string }>();
  const classes = useStyles();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  let currentImg: HTMLDivElement;
  let tl: gsap.core.Timeline;

  useEffect(() => {
    if (images.length === 0) getWorkImages(params.id);
    if (!infos) getWorks();
  }, [params, getWorkImages, images, infos, getWorks]);

  const previewImage = (img: string, ev: React.MouseEvent<HTMLDivElement>) => {
    currentImg = ev.currentTarget;
    const imgOffset = currentImg.getBoundingClientRect();

    if (!previewRef.current) return;
    const preview = previewRef.current,
      canvas = canvasRef.current,
      closeButton = preview.children[0],
      clonePreview = preview.children[1],
      originalPreview = preview.children[2] as HTMLImageElement;

    tl = gsap.timeline({
      onReverseComplete: () => {
        gsap.set(preview, { display: 'none' });
        gsap.set(currentImg, { alpha: 1 });
      },
    });

    gsap.set(preview, { display: 'flex' });
    gsap.set(currentImg, { alpha: 0 });
    gsap.set(canvas, { alpha: 1 });

    originalPreview.setAttribute('src', img);
    clonePreview.setAttribute('src', img);

    const dx =
        // use this instead of window.innerWidth to exclude width of scroll bar
        (document.documentElement.clientWidth - currentImg.offsetWidth) / 2 -
        imgOffset.left,
      dy = (window.innerHeight - currentImg.offsetHeight) / 2 - imgOffset.top,
      z = Math.min(
        originalPreview.offsetWidth / imgOffset.width,
        originalPreview.offsetHeight / imgOffset.height
      );

    gsap.set(clonePreview, {
      width: currentImg.offsetWidth,
      height: currentImg.offsetHeight,
      top: imgOffset.top,
      left: imgOffset.left,
    });

    createRipple(() => {
      gsap.to(closeButton, { alpha: 1 });
    });

    tl.to(clonePreview, {
      x: dx,
      y: dy,
      scale: z,
      ease: 'Power3.easeIn',
    })
      .set(originalPreview, { alpha: 1 })
      .set(clonePreview, { alpha: 0 })
      .play();
  };

  const createRipple = (onComplete: () => void) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const vw = (canvas.width = window.innerWidth);
    const vh = (canvas.height = window.innerHeight);

    const radius = Math.sqrt(vw * vw + vh * vh);

    const ripple = {
      alpha: 0,
      radius: 0,
      x: 0,
      y: 0,
    };

    const drawRipple = (clr: typeof ripple) => {
      if (!ctx) return;

      ctx.clearRect(0, 0, vw, vh);
      ctx.globalCompositeOperation = 'source-over';

      ctx.beginPath();
      ctx.arc(clr.x, clr.y, clr.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = 'rgba(51, 51, 51,' + clr.alpha + ')';
      ctx.fill();
    };

    gsap.to(ripple, {
      alpha: 1,
      radius: radius,
      ease: 'Power2.easeOut',
      onUpdate: drawRipple,
      onUpdateParams: [ripple],
      onComplete: onComplete,
    });
  };

  const closePreview = () => {
    tl.reverse();
    if (previewRef.current)
      gsap.set(previewRef.current.firstChild, { alpha: 0 });
    gsap.to(canvasRef.current, { alpha: 0 });
  };

  if (images.length === 0 || !infos) return <></>;

  return (
    <div className={classes.root}>
      <Typography variant="h4">{params.id}</Typography>
      <Masonry
        breakpointCols={{
          default: 3,
          [theme.breakpoints.values('sm')]: 1,
          [theme.breakpoints.values('md')]: 2,
        }}
        className={classes.masonry}
        columnClassName={classes.masonryColumn}
      >
        <div className={classes.description}>
          <Typography variant="subtitle1">{infos.theme}</Typography>
          <Typography>{infos.date}</Typography>
        </div>
        {images.map((img, index) => (
          <div key={index} onClick={(ev) => previewImage(img, ev)}>
            <img src={img} alt="test" />
          </div>
        ))}
      </Masonry>

      <div ref={previewRef} className={classes.preview} aria-hidden>
        <MenuButton className={classes.closeBtn} onClick={closePreview} close>
          X
        </MenuButton>
        <img className={classes.clone} alt="clone img from unsplash" />
        <img className={classes.original} alt="img from unsplash" />
        <canvas className={classes.canvas} ref={canvasRef} />
      </div>
    </div>
  );
};

const useStyles = createUseStyles<Theme>((theme) => ({
  root: {
    textTransform: 'capitalize',
  },
  masonry: {
    marginLeft: -16,
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    display: 'flex',

    width: 'auto',
  },
  masonryColumn: {
    paddingLeft: 16,
    backgroundClip: 'padding-box',

    '& > div': {
      marginBottom: 16,
    },

    '& > div img': {
      display: 'block',
      width: '100%',
    },
  },
  description: {
    paddingBottom: theme.spacing(3),

    [theme.breakpoints.up('sm')]: {
      textAlign: 'right',
      padding: theme.spacing(3, 0),

      '& h6': {
        position: 'relative',
        display: 'inline-block',
      },

      '& h6:before': {
        content: '""',
        position: 'absolute',
        top: '50%',
        left: '-32px',
        width: '24px',
        height: '2px',
        backgroundColor: theme.palette.text.secondary,
      },
    },
  },
  preview: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1001,
    display: 'none',

    justifyContent: 'center',
    alignItems: 'center',
  },
  canvas: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  },
  closeBtn: {
    position: 'absolute',
    top: 16,
    right: 16,
    opacity: 0,
  },
  clone: {
    position: 'absolute',
    display: 'block',
  },
  original: {
    display: 'block',
    maxWidth: '100vw',
    maxHeight: '100vh',
    margin: '0 auto',
    opacity: 0,
  },
}));

export default connector(ProjectView);
