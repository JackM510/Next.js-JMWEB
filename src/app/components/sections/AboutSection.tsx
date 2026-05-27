import SectionHeading from "../ui/SectionHeading"

export default function AboutSection() {
    return (
        <section id="about" className="bg-[var(--ghost-white)]">
            <div className="content-container">
                <SectionHeading color="text-[var(--dark-azure)]">About JM Web</SectionHeading>
            </div>
        </section>
    );
}