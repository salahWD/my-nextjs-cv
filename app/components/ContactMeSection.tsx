import Link from "next/link";
import React from "react";

export default async function ContactMeSection() {

  return (
    <div className="bg-gradient-to-tl from-black via-zinc-600/20 to-black pt-10 pb-28 md:pt-24 lg:pt-32">
      <div className="mx-auto space-y-8 max-w-7xl px-6 lg:px-8 md:space-y-16">

      <div className="max-w-2xl mx-auto lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          Contact Me
        </h2>
        <p className="mt-4 text-zinc-400">
          Don't worry, I will respond quickly.
        </p>
      </div>
      <div className="w-full h-px bg-zinc-800" />
        <ul className="p-0 list-none flex gap-4 items-center justify-between">
          <li className="text-white"><a href="#">HackerRank</a></li>
          <li className="text-white"><a href="#">Github</a></li>
          <li className="text-white"><a href="#">LinkedIn</a></li>
          <li className="text-white"><a href="#">Gmail</a></li>
          <li className="text-white"><a href="#">Phone</a></li>
        </ul>
      </div>
    </div>
  );
}