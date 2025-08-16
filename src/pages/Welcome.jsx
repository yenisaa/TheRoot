import { Link } from "react-router-dom";



import { AudioLines } from "lucide-react";
import { Button } from "@/components/ui/button";

import Root from "../assets/images/a-root.png";
import Polygon from '../assets/icons/Polygon.svg'

import NavigationLinks from "@/components/features/onboarding/navLinks";
import OnboardingNav from "@/components/ui/onboardingNav";
import Logo from "@/components/ui/logo";

function Welcome() {

  return (
    <section className="h-screen w-screen bg-primary md:bg-background flex flex-col items-center onboarding-container">
     
     {/* Logo */}
      <div className="hidden md:block  md:py-10  self-start" role="Logo section">
        <Logo />
      </div>

      <div
        className="w-full max-w-[572px] md:h-[572px] h-full rounded-[28px] md:bg-primary flex flex-col justify-between px-6 pt-[12px]" role="main box"
      >
        {/* Nav Container  */}
        <div
          className="w-full flex justify-between items-center"
          role="navigation container"
        >
          {/* Navigation */}
          <Link to="/customisation2">
            <OnboardingNav />
          </Link>
          <div className="">
            <NavigationLinks size="w-12 h-6" />
          </div>
        </div>

        <div className="flex flex-col jusitfy-center items-center pt-[64px] mb-[56px]">
          {/* Content */}
          <div className="flex flex-col items-center justify-center bg-card rounded-[16px] h-[96px] w-[216px]">
            <p className="text-accent text-2xl">Great Choice.</p>
            <p className="text-secondary text-2xl">Nnọọ! Kedu ka</p>
          </div>
          <div className="w-[18.9px] h-[18] mt-[-3px] mb-[24px]">
            <img src={Polygon} alt="polygon icon" />
          </div>
          

          {/* Rootie Image */}
          <div className="">
            <img
              src={Root}
              alt="the root icon"
              className="w-[157px] h-[103px]"
            />
          </div>
        </div>

        <div className="w-full md:mt-14 flex flex-col items-center justify-center">
          {/* Button and Link */}
          <div className="w-full flex flex-col items-center justify-center ">
            <Button className="w-full h-[64px] hover:bg-secondary/90" >
              <AudioLines size={29} /> Play audio
            </Button>

            <Link
              to="/reason-for-learning"
              className="text-link text-xl text-background"
            >
              Skip
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Welcome;
