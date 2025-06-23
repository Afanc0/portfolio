import { Section } from "../section";
import data from "@afanco/data/about.json"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react";

export const AboutSection = () => {
    return (
        <Section name="About" id="about" className="flex flex-col py-3 sm:p-3 gap-3">
            <div className="flex flex-col gap-12 py-3 sm:p-3 lg:flex-row">
                <p className="flex-1">{data.p1}</p>
                <p className="flex-1">{data.p2}</p>
            </div>
            <div className="flex flex-row gap-12 py-3 sm:p-3">
                <div className="flex-1 flex flex-row gap-6">
                    <Link target="_blank" rel="noopener noreferrer" href="https://github.com/Afanc0">
                        <Github className="w-7 h-7 hover:text-gray-400" />
                    </Link>
                    <Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/gianromani/">
                        <Linkedin className="w-7 h-7 hover:text-gray-400"/>
                    </Link>
                    <Link target="_blank" rel="noopener noreferrer" href="mailto:gianromani.gr@gmail.com">
                        <Mail className="w-7 h-7 hover:text-gray-400"/>
                    </Link>
                </div>
            </div>
        </Section>
    )
}