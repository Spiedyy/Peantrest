"use client";
import { Card } from "flowbite-react";
import { useEffect, useState } from "react";


export function Cards() {
    return (
        <div className="p-8 column columns-5">

            <Card
                className="max-w-sm relative group mb-4 break-inside-avoid	"
            >
                <div className="relative group-hover:brightness-50 transition-all duration-300">
                    <img src="???" alt="???" className="w-full" />
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
        </div>
    );
}
