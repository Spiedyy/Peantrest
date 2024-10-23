"use client";
import { Card } from "flowbite-react";
import { useState, useEffect } from "react";
import { ImageInt } from "../../../lib/response";
import { getImages } from "../severside";
import Image from 'next/image';
import { Savebtn } from "../savebtn";

export function Cards() {
    const [images, setImages] = useState<ImageInt[] | null>(null);

    useEffect(() => {
        getImages().then((res) => {
            const images = res.data.images;
            const imagesWithId = images.map((image) => ({ ...image, id: image.img_id }));
            setImages(imagesWithId);
        });
    }, []);

    return (
        <div className="p-8 column columns-5 bg-neutral-900">
            {images && images.map((image, index) => (
                <Card
                    className="max-w-sm relative group mb-4 break-inside-avoid bg-neutral-900 border-black"
                    key={index}
                >
                    <div className="relative group-hover:brightness-50 transition-all duration-300">
                        <Image
                            loading="lazy"
                            src={image.img}
                            className="rounded"
                            alt="Image"
                            width={300}
                            height={200}
                        />
                    </div>
                    <Savebtn />
                </Card>
            ))}
        </div>
    );

}
