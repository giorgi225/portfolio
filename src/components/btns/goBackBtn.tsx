"use client";
import { ArrowLeft01Icon } from "hugeicons-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const GoBackBtn = ({ text, targetId }: { text: string; targetId: string }) => {
  const router = useRouter();

  return (
    <Link
      href={`#`}
      onClick={(e) => {
        e.preventDefault();
        window.history.length > 1 ? router.back() : router.push("/");
      }}
      className="flex items-center gap-2 hover:opacity-80 transition-all"
    >
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#f3f3f3]">
        <ArrowLeft01Icon />
      </div>
      {text}
    </Link>
  );
};

export default GoBackBtn;
