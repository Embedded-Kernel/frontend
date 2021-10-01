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

      <main className="font-poppins min-h-screen">
          <nav className="flex justify-around block py-4">

    <div>

    </div>

            <ul className="flex items-center font-semibold space-x-4 text-secondary">
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
              <li className="px-8 py-2 bg-primary rounded-md">
                <Link href="login">
                  <a>Login</a>
                </Link>
                </li>
            </ul>
          </nav>
        <div className="flex items-center justify-center h-full">
          <h1 className="font-bold text-8xl">
            Smart <span className="text-secondary">student</span> card
          </h1>
        </div>
      </main>
    </>
  );
}
