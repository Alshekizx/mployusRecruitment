// myApplication/page.tsx
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import ApplySection from "../components/applyCard";
import { sampleJobs } from "../components/forJobSeakerComponent/sampleData";
import Link from "next/link";

export default function MyApplication() {
  return (
    <div className="containerDiv flex flex-col items-center" style={{paddingTop:"100px"}}>
      <div className="flatCard flex flex-col gap-6 ">
     <div className="flex items-center gap-2">
        <Link href="/" className="IconButton"> 
        <ArrowLeftIcon className="w-5 h-5 text-[--color-primary]" />
        </Link>
        <p className="text-lg font-medium">My Application</p>
      </div>

      {/* Job Description */}
      <div>
        
        <ApplySection jobs={sampleJobs} filterApplied={true} />
      </div>
    </div>
    </div>
  );
}
