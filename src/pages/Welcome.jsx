import { Link } from "react-router-dom";

import { AudioLines } from "lucide-react";
import { Button } from "@/components/ui/button";

import Root from "../assets/images/a-root.png";
import Polygon from "../assets/icons/Polygon.svg";

import NavigationLinks from "@/components/features/onboarding/navLinks";
import OnboardingNav from "@/components/ui/onboardingNav";
import Logo from "@/components/ui/logo";

function Welcome() {
  return (
    <section className="h-screen w-full bg-primary md:bg-background overflow-auto">
      <div className="onboarding-container">
        <div
          className="hidden md:block py-10 px-8 self-start"
          role="Logo section"
        >
          <Logo />
        </div>

        <div className="max-w-[572px] w-full m-auto">
          <div className="w-full h-full p-6 rounded-2xl md:bg-primary flex flex-col">
            <div className="w-full flex justify-between items-center">
              <OnboardingNav />
              <NavigationLinks />
            </div>

            <div className="w-full min-h-[calc(100vh-164px)] md:min-h-auto mt-16 md:mt-10 flex flex-col justify-between">
              <div className="flex flex-col jusitfy-center items-center ">
                <div className="flex flex-col items-center justify-center bg-card rounded-[16px] h-[96px] w-[216px]">
                  <p className="text-accent text-2xl">Great Choice.</p>
                  <p className="text-secondary text-2xl">Nnọọ! Kedu ka</p>
                </div>
                <div className="w-[18.9px] h-[18] mt-[-3px] mb-[24px]">
                  <img src={Polygon} alt="polygon icon" />
                </div>

                <div className="">
                  <img
                    src={Root}
                    alt="the root icon"
                    className="w-[157px] h-[103px]"
                  />
                </div>
              </div>

              <div className="w-full md:mt-14 flex flex-col items-center justify-center">
                <div className="w-full flex flex-col items-center justify-center ">
                  <Button className="w-full h-16 text-xl hover:bg-secondary/90">
                    <AudioLines size={29} /> Play audio
                  </Button>

                  <Link
                    to="/reason-for-learning"
                    className="text-link py-5 text-xl text-background"
                  >
                    Skip
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
