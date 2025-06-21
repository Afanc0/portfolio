import Image from "next/image";

export const AboutSection = () => {
    return (
        <section id="about" className="py-12 flex flex-col gap-12">
            <h2 className="text-5xl font-light">
                About
            </h2>
            <div className="flex flex-row gap-12">
                <p className="flex-1">
                    I&apos;m a passionate creator who bridges the gap between design and technology. 
                    With over 5 years of experience in digital product development, 
                    I specialize in crafting exceptional user experiences. 
                </p>
                <p className="flex-1">
                    When I&apos;m not coding or designing, you can find me exploring new  technologies, 
                    contributing to open-source projects, or sharing knowledge with the developer community.
                </p>
            </div>
            <div className="flex flex-row gap-12">
                <p className="flex-1">
                    I&apos;m a passionate creator who bridges the gap between design and technology. 
                    With over 5 years of experience in digital product development, 
                    I specialize in crafting exceptional user experiences. 
                </p>
                <div className="flex-1 flex flex-row gap-6">
                    <Image src="/github.svg" alt="GitHub logo" width={28} height={28} />
                    <Image src="/linkedin.svg" alt="LinkedIn logo" width={28} height={28} />
                    <Image src="/mail.svg" alt="Mail logo" width={28} height={28} />
                </div>
            </div>
        </section>
    )
}