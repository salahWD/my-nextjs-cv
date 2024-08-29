import Link from "next/link";
import React from "react";

import { allProjects } from "contentlayer/generated";

import Card from "@/app/components/card";
import Project from "@/app/components/Project";
import TechStack from "@/app/components/TechStack";

export default function ProjectsSection() {

  const featured = allProjects.find((project) => project.slug === "musaadai")!;
  const top2 = allProjects.find((project) => project.slug === "eletorial")!;
  const top3 = allProjects.find((project) => project.slug === "chess-corner")!;
  const sorted = allProjects
    .filter((p) => p.published)
    .filter(
      (project) => ![featured.slug, top2.slug, top3.slug].includes(project.slug)
    )
    .filter(
      // to have only one row of project (other then the featured projects)
      (project, index) => index <= 2
    )
    .sort(
      (a, b) =>
        new Date(b.date ?? Number.POSITIVE_INFINITY).getTime() -
        new Date(a.date ?? Number.POSITIVE_INFINITY).getTime(),
    );

  return (
    <div className="relative min-h-screen pb-16 bg-gradient-to-tr from-black via-zinc-600/20 to-black" id="projects">
      <div className="px-6 pt-20 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            My Projects
          </h2>
          <p className="mt-4 text-zinc-400">
            {/* Some of the projects are from work and some are on my own time. */}
            These are some of my featured projects.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
          <Card>
            <Link href={`/projects/${featured.slug}`}>
              <article className="relative w-full h-full p-4 md:p-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs text-zinc-100">
                    {featured.date ? (
                      <time dateTime={new Date(featured.date).toISOString()}>
                        {Intl.DateTimeFormat(undefined, {
                          dateStyle: "medium",
                        }).format(new Date(featured.date))}
                      </time>
                    ) : (
                      <span>SOON</span>
                    )}
                  </div>
                  <span className="flex items-center gap-1 text-xs text-zinc-500">
                    {featured?.techs && <TechStack techs={featured.techs} />}
                  </span>
                </div>

                <h2
                  id="featured-post"
                  className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                >
                  {featured.title}
                </h2>
                <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                  {featured.description}
                </p>
                <div className="absolute bottom-4 md:bottom-8">
                  <p className="hidden text-zinc-200 hover:text-zinc-50 lg:block">
                    Read more <span aria-hidden="true">&rarr;</span>
                  </p>
                </div>
              </article>
            </Link>
          </Card>

          <div className="flex flex-col w-full gap-8 mx-auto border-t border-gray-900/10 lg:mx-0 lg:border-t-0 ">
            {[top2, top3].map((project, index) => (
              // <Card key={project?.slug && project.url}>
              <Card key={index}>
                <Project project={project} />
              </Card>
            ))}
          </div>
        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((project, index) => (
                // <Card key={project?.slug && project.url}>
                <Card key={index}>
                  <Project project={project} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((project, index) => (
                // <Card key={project?.slug && project.url}>
                <Card key={index}>
                  <Project project={project} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((project, index) => (
                // <Card key={project?.slug && project.url}>
                <Card key={index}>
                  <Project project={project} />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}