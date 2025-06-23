import React from "react"
import { Section } from "../section"
import { SkillCard } from "../skill-card"
import data from "@afanco/data/experience.json"

export const ExperienceSection = () => {
    return (
        <Section id="experience" name="Experience" className="flex flex-col p-3 gap-8">
            {data.map((val, key) => (
                <div className="p-3 flex flex-row gap-3 flex-wrap" key={key}>
                    <div className="p-3 flex flex-col gap-3 flex-1 min-w-96">
                        <span className="font-light">{val.time}</span>
                        <span className="font-light text-4xl">{val.title}</span>
                        <span className="font-medium">{val.company}</span>
                    </div>
                    <div className="p-3 flex flex-col gap-3 flex-1 min-w-96">
                        <span className="font-light">{val.summary}</span>
                        <div className="flex gap-3 min-w-full flex-wrap">
                            {val.skills.map((skill, skillKey) => (
                                <SkillCard label={skill} key={skillKey} />
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </Section>
    )
}