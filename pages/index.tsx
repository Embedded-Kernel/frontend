import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Embeded Kernel</title>
      </Head>

      <main className="font-poppins">
        <nav className="flex justify-around py-4">
          <Image src="/Scs.png" width={100} height={30} alt="logo image" />

          <ul className="flex space-x-4 font-semibold items-center text-secondary">
            <li>
              <Link href="/about">
                <a>About us</a>
              </Link>
            </li>
            <li>
              <Link href="partiners">
                <a>Our partners</a>
              </Link>
            </li>
            <li>
              <Link href="why">
                <a>Why us</a>
              </Link>
            </li>
            <li>
              <Link href="contact">
                <a>Contact us</a>
              </Link>
            </li>
            <li className="bg-primary px-8 py-2 rounded-md">
              <Link href="login">
                <a>Login</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex justify-center items-center min-h-screen">
          <h1 className="font-bold text-8xl">
            Smart <span className="text-secondary">student</span> card
          </h1>
        </div>
      </main>
    </>
  );
}
