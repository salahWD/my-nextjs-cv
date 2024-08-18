import Link from "next/link";
import React from "react";
import GoToBtn from "@/app/components/GoToBtn";
import ProjectsSection from "./projects/page";

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-between w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        <div className="flex flex-col items-center justify-center grow h-full">
          <nav className="my-16 animate-fade-in">
            <ul className="flex items-center justify-center gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-base duration-700 text-zinc-500 hover:text-zinc-300"
                >
                  {item.name}
                </Link>
              ))}
            </ul>
          </nav>
          <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
          <h1 className="py-3.5 px-0.5 z-10 text-7xl leading-[0rem] opacity-0 text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display whitespace-nowrap bg-clip-text ">
            salahbakhash
          </h1>

          <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
          <div className="my-16 text-center animate-fade-in">
            <h2 className="text-base text-zinc-500">
              I'm showing{" "}
              <Link
                href="/projects"
                className="underline duration-700 hover:text-zinc-300"
              >
                these porjects
              </Link> to demonstrate and prove my abilities and skills as a web developer.
            </h2>
          </div>
        </div>
        <div className="animate-fade-in pb-9">
            <GoToBtn target="projects" />
        </div>
      </div>
      <ProjectsSection />
    </>
  );

}
