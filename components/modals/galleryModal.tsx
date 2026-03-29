"use client";

import Image from "next/image";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import ModalLayout from "./modalLayout";
import { ModalControls } from "@/hooks/useModal";
import { DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

export type GalleryModalProps = {
  title: string;
  images: string[];
  index?: number;
};

type Props = ModalControls<GalleryModalProps>;

export default function GalleryModal({ isOpen, onClose, props }: Props) {
  const { title, images, index = 0 } = props;

  const [current, setCurrent] = React.useState(index + 1);

  return (
    <ModalLayout
      isOpen={isOpen}
      onClose={onClose}
      withBorders={false}
      classNames={{
        heading: "p-0 lg:p-0 border-none z-10",
        body: "p-0 lg:p-0",
        closeBtn: "top-1 right-1 bg-secondary",
      }}
    >
      <div className="relative w-full">
        <Carousel
          opts={{
            startIndex: index,
          }}
          setApi={(api) => {
            if (!api) return;

            // ✅ update current index on slide change
            api.on("select", () => {
              setCurrent(api.selectedScrollSnap() + 1);
            });
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2">
            {images?.map((img, i) => (
              <CarouselItem key={i} className="pl-2">
                <div className="relative w-full h-[65vh] bg-muted/20">
                  <Image
                    src={`/imgs${img}`}
                    alt={`${title} ${i + 1}`}
                    fill
                    priority={i === index}
                    className={cn(
                      "object-contain transition-transform duration-500",
                      "hover:scale-[1.02]",
                    )}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Controls */}
          <CarouselPrevious className="left-4 h-10 w-10" />
          <CarouselNext className="right-4 h-10 w-10" />
        </Carousel>

        {/* ✅ Counter */}
        <div className="absolute bottom-3 right-4 bg-black/60 text-white text-sm px-3 py-1 rounded-full backdrop-blur-sm">
          {current} / {images.length}
        </div>
      </div>
    </ModalLayout>
  );
}
