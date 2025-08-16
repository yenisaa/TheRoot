import { Link } from "react-router-dom";

import Logo from "@/components/ui/logo";
import Carousel from "@/components/ui/carousel";

function GetStarted1() {
  return (
    <section className="h-screen w-full bg-background">
      <div className="h-full onboarding-container">
        <div className="hidden md:block py-10 px-8 self-start"></div>

        <div className="h-full pt-7 md:pb-7 md:h-auto max-w-[572px] w-full m-auto ">
          <div className="h-full md:min-h-auto p-6 flex flex-col items-center justify-between md:bg-white/1 md:rounded-[28px]">
            <div className="md:pb-5">
              <Logo />
            </div>

            <div className="w-full min-h-[260px] md:min-h-[300px] md:pt-6 flex justify-between">
              <Carousel />
            </div>

            <div className="w-full flex gap-1 flex-col md:pt-[52px]">
              <Link
                to="/sign-in"
                className="w-full h-[64px] mt-auto text-base text-primary-foreground bg-secondary hover:bg-secondary/70 flex justify-center items-center rounded-[14px] cursor-pointer"
              >
                Get Started
              </Link>

              <div className="mt-5 flex items-center justify-center">
                <Link
                  to="/login"
                  className="text-base text-foreground hover:text-foreground/70 text-center cursor-pointer"
                >
                  I already have an account
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetStarted1;
