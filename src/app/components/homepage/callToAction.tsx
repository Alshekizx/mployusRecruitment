import Image from "next/image";

export default function CallToAction() {
  return (
    <div className="containerDiv flex flex-col items-center justify-center">
      <div className="flex flex-col lg:flex-row bg-[var(--primary-color)] w-full p-[60px] rounded-lg overflow-hidden text-white">
        
        {/* Text Section */}
        <div className="flex-1 flex flex-col gap-6 justify-center  py-10">
          <h3 className="text-2xl font-bold">Other Recruitment Solutions</h3>
          <p className="text-base max-w-xl" style={{color: "white"}}>
            We provide tailor-made solutions for a variety of other HR needs, such as niche & executive recruitment, manpower outsourcing, training, and much more.
          </p>
          <button className="callToActionButton w-fit">Contact Us: 0818 900 300</button>
        </div>

        {/* Image Section */}
        <div className="relative flex-1 w-1/3 rounded-lg overflow-hidden">
          <Image
            src="/images/callToActionPic.png"
            alt="Other Recruitment Solutions"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}