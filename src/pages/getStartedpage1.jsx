import { Link } from "react-router-dom";

import Logo from "@/components/ui/logo";
import Carousel from "@/components/ui/carousel";

function GetStarted1() {
  return (
    <section className="min-h-screen w-full bg-background">
      <div className="onboarding-container">
        <div className="hidden md:block py-10 px-8 self-start"></div>

        <div className="max-w-[572px] w-full m-auto">
          <div className="min-h-screen md:min-h-auto w-full gap-[16vh] md:gap-0 p-6 mt-8 flex flex-col items-center md:bg-white/1 md:border md:border-white/6 rounded-[28px]">
            <Logo />

            <div className="min-h-[360px] w-full pt-12 pb-12 flex flex-row justify-between">
              <Carousel />
            </div>

            <div className="w-full flex gap-1 flex-col">
              <Link
                to="/sign-in"
                className="w-full h-[64px] mt-auto text-base text-primary-foreground bg-secondary hover:bg-secondary/70 flex justify-center items-center rounded-[14px] cursor-pointer"
              >
                Get Started
              </Link>

              <Link
                to="#/"
                className="w-full h-[64px] md:h-[50px] mt-auto text-base text-foreground hover:text-foreground/70 flex justify-center items-center rounded-[14px] cursor-pointer"
              >
                I already have an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetStarted1;
