import Image from "next/image";

export default function SectorsWeCover() {
  const services = [
    {
      title: "Retail",
      bgImage: "/images/retail.jpg",
    },
    {
      title: "Hospitality",
      bgImage: "/images/hospitality.jpg",
    },
    {
      title: "Healthcare",
      bgImage: "/images/healthcare.jpg",
    },
    {
      title: "Education",
      bgImage: "/images/education.jpg",
    },
    {
      title: "Construction",
      bgImage: "/images/construction.jpg",
    },
    {
      title: "IT & Tech",
      bgImage: "/images/tech.jpg",
    },
    {
      title: "Logistics",
      bgImage: "/images/logistics.jpg",
    },
    {
      title: "Finance",
      bgImage: "/images/finance.jpg",
    },
  ];

  return (
    <div className="containerDiv flex flex-col items-center justify-center gap-10">
      <div className="text-center w-full max-w-[800px]">
        <h3 className="text-[var(--primary-color)] text-2xl font-bold">Sectors We Cover</h3>
        <p className="text-base">
          We provide expert recruitment services to a wide range of sectors. Our tailored solutions meet the unique needs of each industry, ensuring compliance and smooth onboarding.
        </p>
      </div>

      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 w-max">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden min-w-[300px] h-[400px] "
            >
              <Image
                src={service.bgImage}
                alt={`${service.title} sector`}
                layout="fill"
                objectFit="cover"
                className="z-0"
              />
              <div className="absolute flex flex-col justify-center items-center inset-0 bg-gradient-to-br from-black/50 to-black/20 z-10">
                <h3 className="text-white text-center text-xl font-semibold">{service.title}</h3>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}