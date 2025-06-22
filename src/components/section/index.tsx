interface SectionProps {
    children: React.ReactNode
    className?: string
    name: string
    id: string
}

export const Section = ({children, className, name, id}: SectionProps) => {
    return (
        <section id={id} className="min-w-full">
            <div className="py-12 flex flex-col gap-12">
                <h2 className="text-5xl font-light">{name}</h2>
                <div className={className}>
                    {children}
                </div>
            </div>
        </section>
    )
}