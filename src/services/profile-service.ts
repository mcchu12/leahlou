import { profile, socials, about } from './dummy';

export const fetchProfile = () => {
  return Promise.resolve(profile);
}

export const fetchSocials = () => {
  return Promise.resolve(socials)
}

export const fetchAbout = () => {
  return Promise.resolve(about)
}