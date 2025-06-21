import { SkillCard } from "../skill-card"
import Image from "next/image";

export const ProjectCard = () => {
    return (
        <div className="w-auto bg-[#1E1E1E] rounded-xl">
            <Image 
                src="/ecommerce.png" 
                className="rounded-t-xl w-full"
                alt="site image" 
                width={656} 
                height={400} 
            />
            <div className="flex flex-col justify-center gap-3 px-3 py-5">
                <div className="w-42">
                    <SkillCard label="Web Development" />
                </div>
                <span className="text-4xl font-light">
                    Real Formation
                </span>
                <span className="text-base font-light">
                    Modern e-commerce solution with advanced filtering and seamless checkout experience
                </span>
                <span className="text-base font-normal">
                    New York City - United States
                </span>
                <div className="flex gap-3 min-w-full flex-wrap">
                    <SkillCard label="WordPress" />
                    <SkillCard label="Elementor" />
                    <SkillCard label="JavaScript" />
                </div>
            </div>
        </div>
    )
}