import type { IconType } from 'react-icons';
import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaHackerrank,
  FaCss3,
  FaEnvelope,
} from 'react-icons/fa6';
import type { SocialIcon } from './data';

// Maps each social channel to its react-icons glyph. CSS Battle has no brand
// icon, so the CSS3 mark stands in for the CSS-craft link.
export const SOCIAL_ICON: Record<SocialIcon, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  twitter: FaXTwitter,
  hackerrank: FaHackerrank,
  cssbattle: FaCss3,
  email: FaEnvelope,
};
