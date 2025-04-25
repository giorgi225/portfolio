import { ArrowLeft03Icon, Link01Icon } from "hugeicons-react";
import { Metadata } from "next";
import { headers } from "next/headers";
import Link from "next/link";
import React from "react";

import { projects } from "@/data/data";

import GoBackBtn from "@/components/btns/goBackBtn";
import Gallery from "@/components/gallery/Gallery";
import { Button } from "@/components/ui/button";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const projectData = projects.filter((project) => project.slug === slug)[0];
  const cleanedDescription = projectData.blogDescription
    .replace(/<\/?[^>]+(>|$)/g, "")
    .trim();
    
  return {
    title: projectData.title2 + " | gigi shalamberidze",
    description: `${cleanedDescription.slice(0, 160)}...`,
    alternates: {
      canonical: `https://shalamberidze-gigi.vercel.app/projects/${projectData.slug}`,
    },
    robots: "index, follow",
    authors: {
      name: "gigi shalamberidze",
      url: "https://shalamberidze-gigi.vercel.app",
    },
    openGraph: {
      type: "website",
      title: projectData.title2 + " | gigi shalamberidze",
      description: `${cleanedDescription.slice(0, 160)}...`,
      images: `https://shalamberidze-gigi.vercel.app${projectData.main_image}`,
      url: `https://shalamberidze-gigi.vercel.app/projects/${projectData.slug}`,
      siteName: "Gigi Shalamberidze Porfolio",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: projectData.title2 + " | gigi shalamberidze",
      description: `${cleanedDescription.slice(0, 160)}...`,
      images: `https://shalamberidze-gigi.vercel.app${projectData.main_image}`,
    },
  };
}

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const projectData = projects.filter((project) => project.slug === slug)[0];
  const isFromLocal = (await headers())
    .get("referer")
    ?.includes("https://shalamberidze-gigi.vercel.app")
    ? true
    : false;

  if (!projectData) {
    return (
      <div className="w-full flex-1 h-[calc(100vh-150px)] flex items-center">
        <div className="mx-auto">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-3xl font-bold">Project Not Found</h1>
            <p className="max-w-[420px]">
              We couldn’t find the project details you’re looking for. It may
              have been moved or doesn&apos;t exist.
            </p>
            <Button variant={`primary`} className="w-max mx-auto mt-6" asChild>
              <Link href={`/#home`}>
                <ArrowLeft03Icon />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="md:px-3 md:pt-8">
        <div
          className="relative w-full mt-4 md:flex hidden md:h-[460px] md:rounded-[36px] overflow-hidden bg-black"
          style={{
            backgroundImage: `url("${projectData.main_image}")`,
            backgroundPosition: "bottom",
            backgroundRepeat: "repeat",
            backgroundAttachment: "fixed",
            backgroundSize: "contain",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>
        </div>
      </div>
      <div className=" md:px-6 lg:px-12 md:-translate-y-24">
        <div className="w-full bg-white md:rounded-[36px] shadow-lg py-4 lg:py-9 px-4 lg:px-11">
          <div className="w-full text-foreground flex flex-col gap-4 md:gap-6 lg:gap-12">
            <div className="w-full flex md:flex-row flex-col items-start justify-between">
              <div className="flex flex-col gap-2">
                <GoBackBtn text="Go Back" isFromLocal={isFromLocal} />
                <h1 className="text-xl pl-1 lg:pl-0 md:text-2xl lg:text-3xl xl:text-4xl font-bold">
                  {projectData.title2}
                </h1>
                <div className="flex flex-wrap items-center gap-1 lg:gap-2 mt-1">
                  {projectData.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="flex px-3 py-1.5 text-xs lg:text-sm font-medium bg-[#f3f3f3] rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
              <Button
                asChild
                variant={`default`}
                className="bg-black text-primary md:w-max w-full md:mt-0 mt-4"
              >
                <Link href={projectData.link} target="_blank">
                  Visit Website
                  <Link01Icon />
                </Link>
              </Button>
            </div>
            <div
              className="blog"
              dangerouslySetInnerHTML={{
                __html: projectData.blogDescription,
              }}
            ></div>

            <div className="flex flex-col gap-2 md:gap-4">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                Tech Stack & Tools
              </h2>
              <div className="flex items-center flex-wrap gap-1 md:gap-2">
                {projectData.tools.map((tool) => (
                  <span
                    key={tool}
                    className="flex px-3 py-1.5 text-xs lg:text-sm font-medium bg-black text-background rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2 md:gap-4">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                Gallery
              </h2>
              <Gallery images={projectData.images} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
