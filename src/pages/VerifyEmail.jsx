import React from "react";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Root from "../assets/images/a-root.png";
import OnboardingNav from "@/components/ui/onboardingNav";
import Logo from "@/components/ui/logo";

const VerifyEmail = () => {
  return (
    <section className="h-screen w-full bg-primary md:bg-background overflow-auto">
      <div className="onboarding-container">
        <div className="hidden md:block py-10 px-8 self-start">
          <Logo />
        </div>

        <div className="max-w-[572px] w-full m-auto">
          <div className="w-full h-full p-6 rounded-2xl md:bg-primary">
            <OnboardingNav />

            {/* Content */}
            <div className="min-h-[calc(100vh-100px)] md:min-h-[440px] flex flex-col justify-between">
              <div className="flex flex-col items-center mt-16 md:mt-10 text-white md:text-black">
                <div className="bg-card p-4 text-xl md:text-2xl rounded-[16px] text-center">
                  <p className="text-accent">We’ve emailed you a link.</p>
                  <p className="text-secondary">
                    Just click the link to verify your email.
                  </p>
                </div>

                <div className="pt-6 pb-[33px]">
                  <img
                    src={Root}
                    alt="the root icon"
                    className="h-[103px] object-contain"
                  />
                </div>
              </div>

              <div>
                <Link to="/create-account" className="w-full">
                  <Button className="w-full h-[64px] text-base rounded-[14px]">
                    Begin lesson
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerifyEmail;
