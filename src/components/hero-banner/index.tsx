import Image from "next/image"
import data from "@afanco/data/about.json"

import Link from "next/link"

import { ArrowUpRight } from "lucide-react";

export const HeroBanner = () => {
    return (
        <section className="flex flex-col-reverse md:flex-row py-12 gap-12 items-center w-full px-4 sm:px-8 lg:px-16 mx-auto max-w-screen-xl">
            <div className="flex-1 w-full">
                <div className="flex flex-col gap-8 justify-center">

                    <div className="flex flex-col gap-3 items-center sm:items-start">
                        <h1 className="text-5xl md:text-7xl font-light leading-tight">I&apos;m Gianfranco</h1>
                        <span className="text-3xl md:text-5xl font-light">Designer.</span>
                        <span className="text-3xl md:text-5xl font-light">Builder.</span>
                        <span className="text-3xl md:text-5xl font-light">Engineer.</span>
                    </div>
                    
                    <p className="text-base md:text-lg hidden sm:flex text-gray-300 max-w-xl">{data.intro}</p>

                    <div className="flex flex-row justify-center sm:justify-normal gap-4 pt-4">
                        <Link href="#portfolio">
                            <button className="bg-white text-black text-sm font-light py-2 px-6 md:px-9 rounded-full transition hover:bg-gray-200 cursor-pointer">
                                <div className="flex justify-center items-center flex-row gap-1  py-1">
                                    View Work
                                    <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </button>
                        </Link>
                    </div> 
                </div>
            </div>
            <div className="flex-1 w-full flex justify-center md:justify-end">
                <Image
                    className="rounded-2xl object-cover"
                    src="/me.jpg"
                    alt="Portrait of Gianfranco"
                    width={450}
                    height={500}
                    priority
                />
            </div>
        </section>
    );
};