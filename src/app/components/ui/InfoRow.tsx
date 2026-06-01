type InfoRowProps = {
  title: string;
  text: string;
  color: string;
  background: string;
  button?: boolean;
  buttonId?: string;
  buttonText?: string;
  imgSrc: string;
  imgAlt: string;
  reverse?: boolean;
};

export default function InfoRow({
  title,
  text,
  color,
  background,
  button,
  buttonId,
  buttonText,
  imgSrc,
  imgAlt,
  reverse,
}: InfoRowProps) {
    return (
        <div className={`flex flex-col lg:flex-row ${reverse ? "lg:flex-row-reverse" : ""} shadow-lg lg:shadow-none mb-12 gap-x-2`}>
            <div className="basis-full lg:basis-2/5 shadow-none lg:shadow-lg">
                <img className="w-full h-full object-cover" src={imgSrc} alt={imgAlt} />
            </div>
            <div className={`${color} ${background} basis-full lg:basis-3/5 px-4 py-6 lg:p-8 shadow-none lg:shadow-lg lg:flex lg:flex-col lg:justify-center`}>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 pb-2 border-b border-b-[1px] border-b-[var(--azure)]">{title}</h2>
                <p className="text-xl">{text}</p>
               {button && (
                <button
                    id={buttonId}
                    className="mt-6 bg-[var(--azure)] w-auto me-auto text-white px-8 py-2 hover:opacity-80 transition-opacity"
                >
                    {buttonText}
                </button>
                )}
            </div>
        </div>
    );
}