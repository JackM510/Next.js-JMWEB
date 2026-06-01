import SectionHeading from "../ui/SectionHeading"
import InfoRow from "../ui/InfoRow"
import ServiceCard from "../ui/ServiceCard";

export default function ServicesSection() {
    return (
        <section id="services" className="bg-[#011a2e]">
            <div className="content-container">
                <SectionHeading color="text-white">Explore Services</SectionHeading>
                <InfoRow color="text-[var(--dark-azure)]" background="bg-[var(--ghost-white)]"
                    title="Launch a Website"
                    text="Start your online journey today. Answer 6 quick questions to receive tailored solutions for your project."
                    button
                    buttonId="startWebsite"
                    buttonText="Start Website"
                    imgSrc="/assets/images/service-offering.jpg"
                    imgAlt="test"
                    reverse
                />
                <hr className="mb-12"></hr>
                <div className="grid grid-cos-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-4">
                    {/* Web Development */}
                    <ServiceCard 
                        id="web-development"
                        icon="assets/icons/typescript.svg"
                        title="Web Development"
                        button
                        buttonId='websiteDevelopment'
                        buttonText='Read More'
                        description="Build a website tailored to your needs or refine your existing site as your business grows."
                    />
                    {/* Web Development */}
                    <ServiceCard 
                        id="web-development"
                        icon="assets/icons/typescript.svg"
                        title="Lorem ipsum"
                        button
                        buttonId='test'
                        buttonText='Read More'
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
  ullamcorper justo."
                    />
                    {/* Web Development */}
                    <ServiceCard 
                        id="web-development"
                        icon="assets/icons/typescript.svg"
                        title="Lorem ipsum"
                        button
                        buttonId='test'
                        buttonText='Read More'
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
  ullamcorper justo."
                    />
                </div>
            </div>
        </section>
    );
}