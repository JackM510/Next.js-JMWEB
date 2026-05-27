type SectionHeadingProps = {
    children: string;
    color?: string;
}

export default function SectionHeading({ children, color }: SectionHeadingProps) {
    return (
        <h1 className={`${color} text-5xl text-center font-bold mb-12`}>{ children }</h1>
    );
}