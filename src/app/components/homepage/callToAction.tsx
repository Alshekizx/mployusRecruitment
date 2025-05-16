import Image from "next/image";

export default function CallToAction() {
  return (
    <div className="containerDiv flex flex-col items-center justify-center">
      <div className="flex flex-col lg:flex-row bg-[var(--primary-color)] w-full p-[60px] rounded-lg overflow-hidden text-white">
        
        {/* Text Section */}
       <div
          className="flex-1 flex flex-col gap-6 justify-center py-10"
          style={{
            backgroundColor: "#a1007e",
            backgroundRepeat: 'repeat',
            backgroundSize: 'auto',
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%23cc4fa8' fill-opacity='0.21'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        >
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