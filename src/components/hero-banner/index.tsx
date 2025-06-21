import Image from "next/image";

export const HeroBanner = () => {
    return (
        <section className="flex flex-row min-w-full">
            <div className="flex-1">
                <div className="flex flex-col gap-8 min-h-full justify-center">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-7xl font-light">I&apos;m Gianfranco</h1>
                        <span className="text-5xl font-light">Designer.</span>
                        <span className="text-5xl font-light">Engineer.</span>
                        <span className="text-5xl font-light">Builder.</span>
                    </div>
                    <p>
                    Crafting digital experiences that bridge creativity and technology.  
                    Specialized in modern web development and user-centered design.      
                    </p>
                    <div className="flex flex-row gap-8 py-3">
                        <button className="bg-white rounded-full py-2 px-9">
                            <span className="text-black text-sm font-light">View Work</span>
                        </button>
                        <button className="rounded-full py-2 px-9 border border-white">
                            <span className="text-white text-sm font-light">Resume</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex-1">
                <div className="flex justify-end items-center">
                    <Image
                    className="rounded-2xl"
                    src="/me.jpg"
                    alt="Portrait of Gianfranco"
                    width={450}
                    height={500}
                    />
                </div>
            </div>
        </section>
    )
}