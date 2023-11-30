"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
export default function Home() {
  return (
    <main className="grid grid-cols-3 gap-6 min-h-screen  items-center justify-center p-24">
      <Link id="big-button" href="//" className="relative pb-2">
        <div className="group relative z-10 flex items-center space-x-5 rounded-full bg-sb-grey p-4 text-lg font-light lowercase text-sb-white lg:py-4 lg:pl-8 lg:pr-6 lg:text-3xl">
          <span>Big Button</span>
        </div>
        <div className="absolute inset-0 -bottom-2 z-0 h-full w-full rounded-full bg-sb-pink" />
      </Link>

      <Link id="basic-link" href="//" className="relative pb-2">
        <div className="group relative z-10 flex items-center space-x-5 rounded-full text-sb-pink p-4 text-lg font-light lowercase  lg:py-4 lg:pl-8 lg:pr-6 lg:text-3xl">
          <span>Basic Link</span>
        </div>
      </Link>
      <div
        id="phone-button"
        className="container relative z-20 hidden justify-between py-3 text-lg text-sb-grey md:flex"
      >
        <a href="//">Phone Number</a>
      </div>
      <div
        id="email-button"
        className="container relative z-20 hidden justify-between py-3 text-lg text-sb-grey md:flex"
      >
        <a href="//">Email</a>
      </div>
      <a
        id="social-link"
        href="//"
        target="_blank"
        rel="noreferrer noopener"
        className="bg-sb-grey rounded-full text-sb-white py-3 px-6 font-black text-3xl hover:rotate-0 transition-transform block"
      >
        Social Link
      </a>
      <Link id="journal-div" href="//" className="relative pb-2">
        <div className="group relative z-10 flex items-center space-x-5 rounded-full text-sb-pink p-4 text-lg font-light lowercase  lg:py-4 lg:pl-8 lg:pr-6 lg:text-3xl">
          <span>Journal Entry</span>
        </div>
      </Link>
    </main>
  );
}
