import React from "react";

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Root from "../assets/images/a-root.png";
import OnboardingNav from "@/components/ui/onboardingNav";

import Logo from "@/components/ui/logo";

const CreateAccount = () => {
  return (
    <section className="w-full min-h-screen bg-primary md:bg-transparent">
      <div className="onboarding-container">
        <div className="hidden md:block py-10 px-8 self-start">
          <Logo />
        </div>

        <div className="max-w-[572px] w-full m-auto">
          <div className="w-full h-full p-6 rounded-2xl md:bg-primary">
            <OnboardingNav />

            <div className="min-h-[calc(100vh-100px)] md:min-h-[480px] flex flex-col">
              {/* Content */}
              <div className="flex flex-col items-center mt-16 md:mt-6 text-white md:text-black">
                {/* Welcome Text Box */}
                <div className="bg-card p-4 text-xl md:text-2xl rounded-[16px] text-center">
                  <p className="text-accent">Just one more step!</p>
                  <p className="text-secondary">Let’s set up your account</p>
                </div>

                {/* Rootie Image */}
                <div className="pt-6 pb-[33px]">
                  <img
                    src={Root}
                    alt="the root icon"
                    className="h-[103px] object-contain"
                  />
                </div>
              </div>

              {/* Button Section */}
              <div className="mt-auto mb-5 md:mb-0">
                <Link to="/customisation1">
                  <Button className="w-full h-[64px] text-base rounded-[18px]">
                    Create a profile
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

export default CreateAccount;
