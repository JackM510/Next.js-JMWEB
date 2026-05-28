type InfoRowProps = {
    title: string;
    text: string;
    color: string;
    background: string;
    imgSrc: string;
    imgAlt: string;
    reverse?: boolean; 
}

export default function InfoRow({ title, text, color, background, imgSrc, imgAlt, reverse }: InfoRowProps) {
    return (
        <div className={`flex flex-col lg:flex-row ${reverse ? "lg:flex-row-reverse" : ""} mb-12 `}>
            <div className="basis-full lg:basis-2/5">
                <img className="w-full h-auto shadow-lg" src={imgSrc} alt={imgAlt} />
            </div>
            <div className={`${color} ${background } basis-full lg:basis-3/5 px-4 py-6 lg:p-8`}>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 pb-2 border-b border-b-[1px] border-b-[var(--azure)]">{title}</h2>
                <p className="text-xl">{text}</p>
            </div>
        </div>
    );
}