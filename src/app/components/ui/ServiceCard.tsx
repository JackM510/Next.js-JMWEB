type ServiceProps = {
  id: string;
  icon: string;
  title: string;
  description: string;

};

export default function ServiceCard({
  id,
  icon,
  title,
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
            <ul className="space-y-1">
            </ul>
        </div>
    </div>
  );
}
