import Image from "next/image";

export const ContactSection = () => {
    return (
        <section id="contact">
            <div className="py-12 flex flex-col gap-12 min-w-full">
                <h2 className="text-5xl font-light">Contact</h2>
                <div className="flex flex-col p-3 gap-3">
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
                </div>
            </div>
        </section>
    )
}