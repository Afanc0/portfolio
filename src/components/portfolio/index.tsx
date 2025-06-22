import { ProjectCard } from "../project-card"
import { Section } from "../section"
import data from "@afanco/data/projects.json"

export const Portfolio = () => {
    return (
        <Section id="portfolio" name="Portfolio" className="p-3">
            <div className="flex flex-wrap gap-8 p-3">
                {data.map((val, key) => (
                    <div className="w-full sm:w-[48%]" key={key}>
                        <ProjectCard project={val} />
                    </div>
                ))}
            </div>
        </Section>
    )
}