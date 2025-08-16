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
    <section className="h-screen w-full bg-primary md:bg-background overflow-auto">
      <div className="onboarding-container">
        <div className="hidden md:block py-10 px-8 self-start">
          <Logo />
        </div>

        {/* Main content box */}
        <div className="max-w-[572px] w-full m-auto">
          <div className="w-full h-full p-6 rounded-2xl md:bg-primary flex flex-col">
            <div className="w-full flex justify-between items-center">
              <OnboardingNav />
              <NavigationLinks />
            </div>

            <div className="w-full min-h-[calc(100vh-124px)] md:min-h-auto mt-6 md:mt-10 flex flex-col justify-between">
              <div className="md:mb-[72px]">
                <div className="mb-14 md:mb-8">
                  <h1 className="text-secondary text-2xl text-center text-[20px]">
                    What is your <br /> daily learning goal?
                  </h1>
                </div>

                <div className="flex flex-col items-center">
                  <div className="flex flex-col items-center  w-full">
                    <div className="w-full flex flex-col gap-6 md:gap-2">
                      {options.map((option) => (
                        <Button
                          key={option.id}
                          onClick={() => setSelected(option.id)}
                          className={cn(
                            "w-full max-w-[524px] h-[64px] rounded-md border text-background flex justify-center",
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
                </div>
              </div>

              <div className="w-full mx-auto flex self-end">
                <Link
                  to={selected ? "/experience-prep" : "#"}
                  className="block w-full"
                >
                  <Button
                    className="w-full h-[64px] hover:bg-secondary/90"
                    onClick={handleSelection}
                    disabled={!selected}
                  >
                    Continue
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReasonForLearning;
