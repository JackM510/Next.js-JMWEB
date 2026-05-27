type SectionHeadingProps = {
    children: string;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
    return (
        <h1 className="text-3xl font-bold mb-12">{ children }</h1>
    );
}