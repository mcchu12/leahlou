type Work = {
  name: string,
  theme: string,
  date: string,
  thumbnail: string,
  images?: string[]
}

type WorkState = { [key: string]: Work }
type ImageState = { [key: string]: string[] }