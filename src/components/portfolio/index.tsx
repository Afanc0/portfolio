import { ProjectCard } from "../project-card"
import { Section } from "../section"
import data from "@afanco/data/projects.json"

export const Portfolio = () => {
    return (
        <Section id="portfolio" name="Portfolio" className="py-3 sm:p-3">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 py-3 sm:p-3">
                {data.map((val, key) => (
                    <div key={key} className="w-full flex justify-center">
                        <ProjectCard project={val} />
                    </div>
                ))}
            </div>
        </Section>
    )
}