import OnboardingNav from "@/components/ui/onboardingNav";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import NavigationLinks from "@/components/features/onboarding/navLinks";
import Logo from "@/components/ui/logo";
import Travel from "../assets/icons/travel-icon.svg";
import Spread from "../assets/icons/spread-icon.svg";
import Culture from "../assets/icons/culture-icon.svg";
import Career from "../assets/icons/career-icon.svg";

function ReasonForLearning() {
  const [selected, setSelected] = useState("");

  const handleSelection = () => {
    // Post user selection to backend function
  };

  const options = [
    {
      id: "travel",
      icon: <img src={Travel} alt="Travel Icon" className="w-6" />,
      label: "I am learning because I want to Travel",
    },
    {
      id: "career",
      icon: <img src={Career} alt="Career Icon" className="w-6" />,
      label: "I am learning because of my career",
    },
    {
      id: "culture",
      icon: <img src={Culture} alt="Culture Icon" className="w-6" />,
      label: "I am learning to connect to my culture",
    },
    {
      id: "spread",
      icon: <img src={Spread} alt="Spread Icon" className="w-6" />,
      label: "I am learning for other reasons",
    },
  ];

  return (
    <section className="h-screen w-full bg-primary md:bg-background overflow-auto">
      <div className="onboarding-container">
        <div className="hidden md:block py-10 px-8 self-start">
          <Logo />
        </div>

        <div className="max-w-[572px] w-full m-auto">
          <div className="w-full h-full p-6 rounded-2xl md:bg-primary flex flex-col">
            <div className="w-full flex justify-between items-center">
              <OnboardingNav />
              <NavigationLinks />
            </div>

            <div className="w-full min-h-[calc(100vh-124px)] md:min-h-auto mt-6 md:mt-10 flex flex-col justify-between">
              <div className=" flex flex-col justify-between">
                <div className="mb-[32px]">
                  <h1 className="text-secondary text-2xl text-center">
                    Why are <br /> you learning Igbo?
                  </h1>
                </div>

                <div className="flex flex-col items-center w-full">
                  <p className="text-background mb-[8px] self-start">
                    I am learning for ...
                  </p>
                  <div className="w-full flex flex-col gap-2">
                    {options.map((option) => (
                      <Button
                        key={option.id}
                        onClick={() => setSelected(option.id)}
                        className={cn(
                          "w-full h-16 rounded-md border text-background flex justify-start",
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

              <div className="w-full md:mt-8">
                <Link
                  to={selected ? "/commitment" : "#"}
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
