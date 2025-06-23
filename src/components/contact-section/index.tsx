
import { Section } from "../section";

import { Github, Linkedin, Mail } from "lucide-react";

export const ContactSection = () => {
    return (
        <Section id="contact" name="Contact" className="flex flex-col py-3 sm:p-3 gap-3">
            <div className="flex flex-row gap-3 py-3 sm:p-3 items-center">
                <Github className="w-7 h-7" />
                <span>https://github.com/Afanc0</span>
            </div>
            <div className="flex flex-row gap-3 py-3 sm:p-3 items-center">
                <Linkedin className="w-7 h-7" />
                <span>https://www.linkedin.com/in/gianromani/</span>
            </div>
            <div className="flex flex-row gap-3 py-3 sm:p-3 items-center">
                <Mail className="w-7 h-7" />
                <span>gianromani.gr@gmail.com</span>
            </div>
        </Section>
    )
}