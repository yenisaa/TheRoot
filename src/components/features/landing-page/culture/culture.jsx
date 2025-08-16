import bgImage from "@/assets/images/culture-bg.png";

import CultureFaceCards from "./cultureFaceCards";
import CultureForm from "./cultureForm";

function Culture() {
  return (
    <section id="waitlist" className="py-[42px] sm:py-[95px] relative">
      <div
        style={{
          backgroundImage: `linear-gradient(180deg, #3E2800 0%, rgba(62, 40, 0, 0) 100%), url(${bgImage})`,
        }}
        className="h-full w-full absolute bottom-0 bg-cover bg-no-repeat bg-center"
      ></div>

      <div className="flex flex-col items-center justify-center p-4 relative overflow-hidden">
        <CultureFaceCards />

        <CultureForm />
      </div>
    </section>
  );
}

export default Culture;
