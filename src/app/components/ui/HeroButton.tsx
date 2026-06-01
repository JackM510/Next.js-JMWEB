type HeroButtonProps = {
    text: string;
    link: string;
    imgSrc: string;
    imgAlt: string;
}

export default function HeroButton({ text, link, imgSrc, imgAlt } : HeroButtonProps) {
    return(
        <a href={link} className="flex justify-center items-center p-4 hover:bg-[var(--azure)] bg-[rgba(32,56,73,0.5)] border border-[var(--azure)]">
            <img src={imgSrc} className="h-8 me-2" alt={imgAlt} />
            <span>{text}</span>
        </a>
    );
}