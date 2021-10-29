import React from 'react';
import Head from 'next/head';
import { Nav } from '../components/Nav';

import { Hero } from '../components/home/Hero';
import { Card } from '../components/home/Card';
import { Aboutus } from '../components/home/Aboutus';
import { Partners } from '../components/home/Partners';
import { Why } from '../components/home/Why';
import { Contactus } from '../components/home/Contactus';
import { Footer } from '../components/home/Footer';



export default function Home() {
  return (
    <>
      <Head>
        <title>Embeded Kernel</title>
      </Head>
{/* <InactiveCardsSidebar/> */}

      <Nav />
      <Hero />
      <Card />
      <Aboutus />
      <Partners />
      <Why />
      <Contactus />
      <Footer />
    </>
  );
}
