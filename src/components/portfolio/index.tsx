import { ProjectCard } from "../project-card"


export const Portfolio = () => {
    return (
        <section id="portfolio">
            <div className=" flex flex-col py-12 gap-12">
                <h2 className="text-5xl font-light">Portfolio</h2>
                <div className="flex flex-wrap gap-8">
                    <div className="w-full sm:w-[48%]">
                        <ProjectCard />
                    </div>
                    <div className="w-full sm:w-[48%]">
                        <ProjectCard />
                    </div>
                    <div className="w-full sm:w-[48%]">
                        <ProjectCard />
                    </div>
                    <div className="w-full sm:w-[48%]">
                        <ProjectCard />
                    </div>
                </div>
            </div>
        </section>
    )
}