import SectionHeading from "../ui/SectionHeading"
import InfoRow from "../ui/InfoRow"


export default function AboutSection() {
    const rowTextColor = "text-white";
    const rowTextBackground = "bg-[var(--dark-azure)]"
    return (
        <section id="about" className="bg-[var(--ghost-white)]">
            <div className="content-container">
                <SectionHeading color="text-[var(--dark-azure)]">About JM Web</SectionHeading>
                <InfoRow color={rowTextColor} background={rowTextBackground}
                    title="Service Offering"
                    text="Whether you need a fresh website, a tidy‑up of an existing build, improvements, or ongoing support — JM Web has a solution that fits your project and your goals."
                    imgSrc="/assets/images/service-offering.jpg"
                    imgAlt="test"
                    reverse
                />
                <InfoRow color={rowTextColor} background={rowTextBackground}
                    title="Custom Solutions"
                    text="Your requirements are outlined to determine the most suitable solutions for your project. Each option is explained clearly, giving you flexibility and control over how the project moves forward."
                    imgSrc="/assets/images/custom-solutions.jpg"
                    imgAlt="test"
                /> 
                <InfoRow color={rowTextColor} background={rowTextBackground}
                    title="About Jack"
                    text="Jack has a background in programming and technical systems, with experience across small businesses and enterprise environments. With qualifications in IT and Business Management, he brings nearly a decade of experience creating websites and digital systems."
                    imgSrc="/assets/images/jack.png"
                    imgAlt="test"
                    reverse
                />
            </div>
        </section>
    );
}