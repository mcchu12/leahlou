import { works, workImages } from './dummy';

export const fetchWorks = () => {
  return Promise.resolve(works);
}

export const fetchWorkImages = (name: string) => {
  return Promise.resolve({ name, images: workImages[name] })
}