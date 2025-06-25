
import Hero from "../components/homepage/hero";
import WhatWeOffer from "../components/homepage/whatWeOffer";
import TailoredHiringSolutions from "../components/homepage/tailoredHiringSolutions";
import SectorsWeCover from "../components/homepage/sectorsWeCover";
import CallToAction from "../components/homepage/callToAction";
import FaqAccordion from "../components/homepage/faq";
import Testimonials from "../components/homepage/testimonia";

export default function Home() {
  return (
    <div className="py-20 flex flex-col items-center gap-20">
     <Hero/>
     <WhatWeOffer/>
     <TailoredHiringSolutions/>
     <SectorsWeCover/>
     <CallToAction/>
     <Testimonials/>
     <FaqAccordion/>
    </div>
  );
}
