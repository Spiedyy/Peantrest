"use client";
import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
import { getStaticProps } from "./serverside";
import { Image } from "../../lib/response";

const [images, setImages] = useState<Image[] | null>(null);

useEffect(() => {
    getStaticProps().then((res) => {
        const images = res.data.images;
        setImages(images);
    });
}, []);

export function Cards() {
    return (
        <div className="p-8 column columns-5">
            {images && images.map((image, index) => (  // Map over the images array
                <Card
                    className="max-w-sm relative group mb-4 break-inside-avoid"
                    key={index}  // Unique key for each image
                >
                    <div className="relative group-hover:brightness-50 transition-all duration-300">
                        <img src={image.img} className="w-full" alt={`Image ${index}`} />  {/* Use image.img for the image source */}
                    </div>

                    <div className="p-4 absolute top-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                        <a
                            href="#"
                            className="rounded-lg bg-red-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                        >
                            Save
                        </a>
                    </div>
                </Card>
            ))}
        </div>
    );

}
