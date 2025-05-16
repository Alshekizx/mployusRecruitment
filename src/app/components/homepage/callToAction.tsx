import Image from "next/image";

export default function CallToAction() {
  return (
    <div className="containerDiv flex flex-col items-center justify-center" style={{ minHeight: '50vh' }}>
      <div className="flex flex-col lg:flex-row bg-[var(--primary-color)] w-full p-6 sm:p-10 lg:p-[60px] rounded-lg overflow-hidden text-white card-texture-bg">

  {/* Text Section */}
  <div className="w-full lg:w-2/3 flex flex-col gap-6 justify-center py-6 sm:py-10">
    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">Other Recruitment Solutions</h3>
    <p className="text-sm sm:text-base lg:text-lg text-white">
      We provide tailor-made solutions for a variety of other HR needs, such as niche & executive recruitment, manpower outsourcing, training, and much more.
    </p>
    <button className="callToActionButton w-fit text-sm sm:text-base">Contact Us: 0818 900 300</button>
  </div>

  {/* Image Section */}
  <div className="relative w-full lg:w-1/3 h-[200px] sm:h-[300px] lg:h-auto mt-6 lg:mt-0 rounded-lg overflow-hidden">
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