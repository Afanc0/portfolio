import { SkillCard } from "../skill-card"


export const ExperienceSection = () => {
    return (
        <section id="experience" className="py-12 flex flex-col gap-12 min-w-full">
           <h2 className="text-5xl font-light">Experience</h2>
           <div className="p-3 flex flex-row gap-3">
                <div className="p-3 flex flex-col gap-3 flex-1">
                    <span className="font-light">2022 - Present</span>
                    <span className="font-light text-4xl">Software Engineer Intern</span>
                    <span className="font-medium">Sub360</span>
                </div>
                <div className="p-3 flex flex-col gap-3 flex-1">
                    <span className="font-light">Leading frontend development for enterprise applications using React and Next.js</span>
                    <div className="flex gap-3 min-w-full flex-wrap">
                        <SkillCard label="React" />
                        <SkillCard label="TypeScript" />
                        <SkillCard label="Next.js" />
                        <SkillCard label="GraphQL" />
                    </div>
                </div>
           </div>
        </section>
    )
}