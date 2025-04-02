"use client";
import Masonry from "react-masonry-css";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Image from "next/image";
import "./Gallery.css"; // We'll create this file

const breakpointColumns = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

export default function ProjectGallery({ images }: { images: string[] }) {
  return (
    <div className="gallery-container">
      <LightGallery
        plugins={[lgZoom, lgThumbnail]}
        elementClassNames="hidden"
        galleryId="masonry-gallery"
      >
        {images.map((image, index) => (
          <a href={image} key={image}>
            <Image
              key={index}
              src={image}
              alt={`Image ${index}`}
              width={200}
              height={200}
              className="w-full h-auto rounded-lg hover:opacity-90 transition-opacity"
              quality={0}
              loading="lazy"
            />
          </a>
        ))}
      </LightGallery>

      <Masonry
        breakpointCols={breakpointColumns}
        className="my-masonry-grid select-none"
        columnClassName="my-masonry-grid_column flex flex-col"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="gallery-item !bg-gray-200 flex !h-max flex-col overflow-hidden rounded-3xl"
            onClick={() => {
              const el: HTMLAnchorElement | null = document.querySelector(
                `a[href="${image}"]`
              );
              if (el) {
                el.click();
              }
            }}
          >
            <Image
              src={image}
              alt={`Image ${index}`}
              width={600}
              height={400}
              className="w-full h-auto rounded-lg hover:scale-110 transition-all duration-500 cursor-pointer"
              quality={80}
              loading="lazy"
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
}
