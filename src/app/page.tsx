import Footer from '@/components/shared/footer/footer';
import { Navigation } from '@/components/shared/navigation/navigation';
import Home from '@/screens/home';
import { Metadata } from 'next';
import { Fragment } from 'react';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function index() {
  return (
    <Fragment>
      <Navigation />
      <Home />
      <Footer />
    </Fragment>
  );
}
