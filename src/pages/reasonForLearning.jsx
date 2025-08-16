import OnboardingNav from "@/components/ui/onboardingNav";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import NavigationLinks from "@/components/features/onboarding/navLinks";
import Logo from "@/components/ui/logo";
import Travel from "../assets/icons/travel-icon.svg";
import Spread from "../assets/icons/spread-icon.svg";
import Culture from "../assets/icons/culture-icon.svg";
import Career from "../assets/icons/career-icon.svg";

function ReasonForLearning() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState("");

  const handleSelection = () => navigate("/commitment");

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
    <section className="h-screen w-screen bg-primary md:bg-background flex flex-col items-center">
      {/* Logo */}
      <div className="hidden md:block py-10 self-start">
        <Logo />
      </div>

      {/* Main box */}
      <div className="w-full max-w-[572px] md:h-[572px] h-full rounded-[28px] md:bg-primary flex flex-col justify-between px-6 py-[12px]">
        {/* Navigation */}
        <div className="w-full flex justify-between items-center min-h-[40px]">
          <OnboardingNav />
          <NavigationLinks isDisabled={!selected} />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between flex-1">
          <div className="mb-[32px]">
            <h1 className="text-secondary text-2xl text-center">
              Why are <br /> you learning Igbo?
            </h1>
          </div>

          <div className="flex flex-col items-center w-full">
            <p className="text-background mb-[8px] self-start">
              I am learning for ...
            </p>
            {options.map((option) => (
              <Button
                key={option.id}
                onClick={() => setSelected(option.id)}
                className={cn(
                  "w-full h-[64px] rounded-md border text-background flex justify-start mb-[8px]",
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

        {/* Continue Button */}
        <div className="w-full mt-4">
          <Button
            className="w-full max-w-full h-[64px] hover:bg-secondary/90"
            onClick={handleSelection}
            disabled={!selected}
          >
            Continue
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ReasonForLearning;
