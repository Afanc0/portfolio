import { ProjectCard } from "../project-card"
import { Section } from "../section"
import data from "@afanco/data/projects.json"

export const Portfolio = () => {
    return (
        <Section id="portfolio" name="Portfolio" className="p-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 p-3">
                {data.map((val, key) => (
                    <div key={key} className="w-full h-full">
                        <ProjectCard project={val} />
                    </div>
                ))}
            </div>
        </Section>
    )
}