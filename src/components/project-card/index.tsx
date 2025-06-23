import { SkillCard } from "../skill-card"
import Image from "next/image";

type Project = {
    title: string;
    summary: string;
    category: string;
    location: string;
    skills: string[];
    image:  string;
}

interface ProjectCardProp {
    project: Project;
}

export const ProjectCard = ({project}: ProjectCardProp) => {
    return (
        <div className="bg-[#1E1E1E] rounded-xl w-[600px]">
            <Image 
                src={project.image} 
                className="rounded-t-xl w-full h-[300px]"
                alt="site image" 
                width={656} 
                height={300} 
            />
            <div className="flex flex-col justify-center gap-3 px-3 py-5">
                <div className="w-fit">
                    <SkillCard label={project.category} />
                </div>
                <span className="text-4xl font-light">
                    {project.title}
                </span>
                <span className="text-base font-light">
                    {project.summary}
                </span>
                <span className="text-base font-normal">
                    {project.location}
                </span>
                <div className="flex gap-3 min-w-full flex-wrap">
                    {project.skills.map((val, skillKey) => (
                        <SkillCard label={val} key={skillKey} />
                    ))}
                </div>
            </div>
        </div>
    )
}