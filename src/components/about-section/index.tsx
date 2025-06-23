import Image from "next/image";
import { Section } from "../section";
import data from "@afanco/data/about.json"

export const AboutSection = () => {
    return (
        <Section name="About" id="about" className="flex flex-col p-3 gap-3">
            <div className="flex flex-col gap-12 p-3 lg:flex-row">
                <p className="flex-1">{data.p1}</p>
                <p className="flex-1">{data.p2}</p>
            </div>
            <div className="flex flex-row gap-12 p-3">
                <div className="flex-1 flex flex-row gap-6">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/Afanc0">
                        <Image src="/github.svg" alt="GitHub logo" width={28} height={28} />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gianromani/">
                        <Image src="/linkedin.svg" alt="LinkedIn logo" width={28} height={28} />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="mailto:gianromani.gr@gmail.com">
                        <Image src="/mail.svg" alt="Mail logo" width={28} height={28} />
                    </a>
                </div>
            </div>
        </Section>
    )
}