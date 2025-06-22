import Image from "next/image";
import { Section } from "../section";

export const ContactSection = () => {
    return (
        <Section id="contact" name="Contact" className="flex flex-col p-3 gap-3">
            <div className="flex flex-row gap-3 p-3 items-center">
                <Image src="/mail.svg" alt="Mail logo" width={28} height={28} />
                <span>gianromani.gr@gmail.com</span>
            </div>
            <div className="flex flex-row gap-3 p-3 items-center">
                <Image src="/linkedin.svg" alt="LinkedIn logo" width={28} height={28} />
                <span>https://www.linkedin.com/in/gianromani/</span>
            </div>
            <div className="flex flex-row gap-3 p-3 items-center">
                <Image src="/github.svg" alt="GitHub logo" width={28} height={28} />
                <span>https://github.com/Afanc0</span>
            </div>
        </Section>
    )
}