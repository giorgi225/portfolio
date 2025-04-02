"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../ui/button";
import {
  ArrowRight01Icon,
  Calendar01Icon,
  SmartPhone01Icon,
} from "hugeicons-react";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { Pointer } from "../magicui/pointer";

export default function Blogs({ id }: { id: string }) {
  const titleRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: titleRef, // Track only while in view
    offset: ["start end", "end start"], // Start at entering, stop at leaving
  });

  const blogs = [
    {
      src: "/blogs/jwt.svg",
      cursor: "/blogs/jwt-cursor.jpg",
      link: "https://medium.com/@gigi.shalamberidze2022/implementing-secure-authentication-authorization-in-express-js-with-jwt-typescript-and-prisma-087c90596889",
      title:
        "Step-by-Step Guide to Secure JWT Authentication with Refresh Tokens in Express.js, TypeScript, and Prisma",
      description:
        "Learn how to implement secure authentication and authorization in an Express.js API using JWT, TypeScript, and Prisma. This guide walks you through setting up access & refresh tokens, securing endpoints, and structuring a scalable project with controllers, middlewares, and validations. Perfect for building authentication in real-world apps!",
      keywords: ["Node.js", "Express.js", "JsonWebToken", "Auth"],
      date: "Mar 18, 2025",
    },
  ];

  return (
    <section className="container-main" data-target={id}>
      <div className="w-full flex flex-col items-center gap-6 lg:gap-12">
        <div className="flex flex-col items-center gap-2">
          <motion.h2
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-center"
          >
            Lastest Blogs
          </motion.h2>
          <motion.p
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-sm lg:text-base text-center font-medium leading-5 max-w-[360px] lg:max-w-[451px]"
          >
            I share valuable tips and insights on various topics. Check out my
            latest blogs.
          </motion.p>
        </div>

        <div className="w-full flex flex-col gap-4 lg:gap-8">
          {blogs.map((blog, index) => (
            <Link
              key={index}
              href={blog.link}
              target="_blank"
              aria-label={`view blog: ${blog.title}`}
              className="grid sm:grid-cols-[260px_auto] lg:grid-cols-[345px_auto] items-center gap-8 min-h-[236px] lg:min-h-[278px]"
            >
              <Image
                src={blog.src}
                alt={blog.title}
                width={345}
                height={258}
                className="w-full h-full object-cover object-center rounded-3xl overflow-hidden"
              />
              <div className="w-full flex flex-col gap-3 px-4 sm:px-0">
                <div className="flex items-center gap-2 text-foreground/70">
                  <Calendar01Icon className="size-4" />
                  <span className="text-sm lg:tex-base">Date: {blog.date}</span>
                </div>
                <h5 className="text-lg lg:text-2xl font-bold leading-6 lg:leading-8 line-clamp-2">
                  {blog.title}
                </h5>
                <p className="text-sm lg:text-base leading-5 lg:leading-6 line-clamp-3 lg:line-clamp-4">
                  Learn how to implement secure authentication and authorization
                  in an Express.js API using JWT, TypeScript, and Prisma. This
                  guide walks you through setting up access & refresh tokens,
                  securing endpoints, and structuring a scalable project with
                  controllers, middlewares, and validations. Perfect for
                  building authentication in real-world apps!
                </p>
                <div className="flex items-center flex-wrap gap-1">
                  {blog.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="px-4 py-1.5 text-xs lg:text-sm bg-black text-background rounded-full"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
              <Pointer>
                <motion.div
                  animate={{
                    scale: [0.8, 1, 0.8],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className=" shadow-md text-neutral"
                >
                  <Image
                    src={blog.cursor}
                    alt="pointer"
                    width={600}
                    height={600}
                    className="w-48 h-48 object-cover rounded-xl"
                    priority={true}
                  />
                </motion.div>
              </Pointer>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
