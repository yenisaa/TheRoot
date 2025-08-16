import OnboardingNav from "@/components/ui/onboardingNav";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/logo";
import Leaves from "../assets/icons/leaves-icon.svg";
import Sprout from "../assets/icons/sprout-icon.svg";
import powerPlant from "../assets/icons/power-plant-icon.svg";
import NavigationLinks from "@/components/features/onboarding/navLinks";

function ReasonForLearning() {
  const [selected, setSelected] = useState("");

  const options = [
    {
      id: "light",
      icon: <img src={Sprout} alt="Sprout Icon" className="w-6" />,
      label: "5 min/day (Light)",
    },
    {
      id: "steady",
      icon: <img src={Leaves} alt="Leave icon" className="w-4" />,
      label: "10 min/day (Steady)",
    },
    {
      id: "intense",
      icon: <img src={powerPlant} alt="Power plant icon" className="w-4" />,
      label: "20 min/day (Intense)",
    },
  ];

  const handleSelection = () => {
    // Post user selection to backend function
  };

  return (
    <section className="min-h-screen w-full bg-primary md:bg-background flex flex-col items-center onboarding-container">
      {/* Logo */}
      <div className="hidden md:block py-10  self-start">
        <Logo />
      </div>

      {/* Main content box */}
      <div className="w-full max-w-[572px] md:max-h-[572px] rounded-[28px] md:bg-primary flex flex-col justify-between  px-6 py-[12px] flex-1">
        <div className="flex justify-between items-center">
          <OnboardingNav />
          <NavigationLinks isDisabled={!selected} />
        </div>

        <div className="mb-[32px]">
          <h1 className="text-secondary text-2xl text-center text-[20px]">
            What is your <br /> daily learning goal?
          </h1>
        </div>
        {/*Title & Options */}
        <div className="flex flex-col items-center mb-[] flex-1 justify-start">
          <div className="flex flex-col items-center  w-full">
            {options.map((option) => (
              <Button
                key={option.id}
                onClick={() => setSelected(option.id)}
                className={cn(
                  "w-full max-w-[524px] h-[64px] rounded-md border text-background flex justify-center mb-[24px] md:mb-[8px]",
                  selected === option.id
                    ? "bg-label border-ring text-primary"
                    : "bg-card border-secondary/30 text-background hover:border-secondary/30"
                )}
              >
                {option.icon}
                {option.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Bottom: Continue Button */}
        <div className="w-full max-w-[524px] mx-auto flex self-end">
          <Link
            to={selected ? "/experience-prep" : "#"}
            className="block w-full"
          >
            <Button
              className="w-full max-w-full h-[64px] hover:bg-secondary/90"
              onClick={handleSelection}
              disabled={!selected}
            >
              Continue
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ReasonForLearning;
