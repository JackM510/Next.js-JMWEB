type ServiceProps = {
  id: string;
  icon: string;
  title: string;
  button?: boolean;
  buttonId?: string;
  buttonText?: string;
  description: string;
};

export default function ServiceCard({
  id,
  icon,
  title,
  button,
  buttonId,
  buttonText,
  description
}: ServiceProps) {
  return (
    <div id={id} className="w-full h-full bg-[var(--ghost-white)] text-[var(--dark-azure)] p-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
            <img src={icon} className="h-12 text-[var(--azure)]"/>
            <h3 className="text-3xl font-semibold">
                {title}
            </h3>
        </div>
        {/* Body */}
        <div className="">
            <p className="mb-4">{description}</p>

            {button && (
                <button
                    id={buttonId}
                    className="mt-6 bg-gray-500 w-auto me-auto text-white px-8 py-2 transition duration-200 hover:opacity-80 hover:scale-105"
                >
                    {buttonText}
                </button>
                )}

            <ul className="space-y-1">
            </ul>
        </div>
    </div>
  );
}
