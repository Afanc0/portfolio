
export const SkillCard = ({label} : {label: string}) => {
    return (
        <div className="py-1 flex justify-center items-center border rounded-full px-6">
            <span className="text-sm font-light">{label}</span>
        </div>
    )
}