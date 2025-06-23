interface SectionProps {
    children: React.ReactNode
    className?: string
    name: string
    id: string
}

export const Section = ({ children, className = "", name, id }: SectionProps) => {
    return (
        <section id={id} className="w-full px-4 sm:px-8 lg:px-16 mx-auto max-w-screen-xl">
            <div className="py-12 flex flex-col gap-12">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light break-words">
                    {name}
                </h2>
                <div className={className}>
                    {children}
                </div>
            </div>
        </section>
    );
};

