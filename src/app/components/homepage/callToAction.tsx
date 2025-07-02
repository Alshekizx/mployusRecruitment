import Image from "next/image";
import Link from "next/link";

export default function CallToAction() {
  return (
    <div className="containerDiv flex flex-col items-center justify-center" style={{ minHeight: '50vh' }}>
      <div className="flex flex-col lg:flex-row bg-[var(--primary-color)] w-full p-6 md:p-10  rounded-lg overflow-hidden text-white card-texture-bg">

  {/* Text Section */}
  <div className="w-full lg:w-2/3 flex flex-col gap-6 justify-center py-6 sm:py-10">
    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">Other Recruitment Solutions</h2>
    <p className="p11 text-sm sm:text-base lg:text-lg text-white">
      We provide tailor-made solutions for a variety of other HR needs, such as niche & executive recruitment, manpower outsourcing, training, and much more.
    </p>
    <Link href="tel:0818900300" className="callToActionButton w-fit text-sm sm:text-base"><p>Contact Us: 0818 900 300</p></Link>
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