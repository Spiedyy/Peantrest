"use client";
import { useState, useEffect } from "react";
import { ImageInt } from "../../lib/response";
import { getImages } from "./severside";
import Image from "next/image";
import { Savebtn } from "./savebtn";
import { Modalcomp } from "./modal";
import React from "react";

export function Cards() {
  const [images, setImages] = useState<ImageInt[] | null>(null);
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    getImages().then((res) => {
      const images = res.data.images;
      const imagesWithId = images.map((image) => ({
        ...image,
        id: image.img_id,
      }));
      setImages(imagesWithId);
    });
  }, []);

  const handleSave = (imageID: number) => {
    setSelectedImage(imageID);
    setOpenModal(true);
  };

  return (
    <>
      <Modalcomp
        openModal={openModal}
        setOpenModal={setOpenModal}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
      <div className="p-8 column columns-2 md:columns-5 xl:columns-7">
        {images &&
          images.map((image) => (
            <div className="max-w-sm relative group mb-4 break-inside-avoid border-none drop-shadow-2xl">
              <div className="relative group-hover:brightness-50 transition-all duration-300">
                <Image
                  loading="lazy"
                  src={image.img}
                  className="rounded-xl"
                  alt="Image"
                  width={250}
                  height={200}
                />
              </div>
              <Savebtn onClick={() => handleSave(image.id)} />
            </div>
          ))}
      </div>
    </>
  );
}
