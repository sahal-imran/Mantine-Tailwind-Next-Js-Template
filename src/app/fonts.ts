import { Cinzel_Decorative } from 'next/font/google';
import { Montserrat } from 'next/font/google';

export const primary = Cinzel_Decorative({
  weight: ['400', '700', '900'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-primary',
});
export const secondary = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-secondary',
});
