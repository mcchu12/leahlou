import firework from './imgs/firework.jpg';
import tokyo from './imgs/tokyo.jpg';
import jamine from './imgs/jamine.jpg';
import april from './imgs/april.jpg';
import adrian from './imgs/adrian.jpg';
import colin from './imgs/colin.jpg';
import dave from './imgs/dave.jpg';
import gaelle from './imgs/gaelle.jpg';
import luisa from './imgs/luisa.jpg';
import albert from './imgs/albert.jpg';
import nathan from './imgs/nathan.jpg';

export const works: { [key: string]: Work } = {
  'firework': {
    name: 'firework',
    theme: 'landscape',
    date: 'jun 2019',
    thumbnail: firework
  }, 'tokyo': {
    name: 'tokyo',
    theme: 'travel',
    date: 'aug 2020',
    thumbnail: tokyo
  }, 'jamine': {
    name: 'jamine',
    theme: 'portrait',
    date: 'dec 2020',
    thumbnail: jamine
  }, 'april\'s blue': {
    name: 'april\'s blue',
    theme: 'landscape',
    date: 'jun 2019',
    thumbnail: april
  }
};

export const workImages: { [key: string]: string[] } = {
  'firework': [adrian, colin, dave, gaelle, albert, luisa],
  'tokyo': [adrian, colin, dave, gaelle, albert, luisa],
  'jamine': [adrian, colin, dave, gaelle, albert, luisa],
  'april\'s blue': [adrian, colin, dave, gaelle, albert, luisa],
}

export const profile = {
  name: 'Jaziel Pama',
  email: 'hello@email.com',
  phone: '+1 647 1234 567',
  location: 'Toronto, Canada'
}

export const socials = [{ platform: 'instagram', url: 'https://instagram.com' }, { platform: 'twitter', url: 'https://twitter.com' }];

export const about = {
  avatar: nathan,
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
  mollitia, molestiae quas vel sint commodi repudiandae consequuntur
  voluptatum laborum numquam blanditiis harum quisquam eius sed odit
  fugiat iusto fuga praesentium optio, eaque rerum! Provident
  similique accusantium nemo autem. Veritatis obcaecati tenetur iure
  eius earum ut molestias architecto voluptate aliquam nihil, eveniet
  aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
  error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
  quia.`
}
