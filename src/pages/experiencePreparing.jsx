import OnboardingNav from "@/components/ui/onboardingNav";
import { LoaderCircle } from "lucide-react";
import { Link } from "react-router-dom";
import NavigationLinks from "@/components/features/onboarding/navLinks";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/logo";
import Root from "../assets/images/Root.png";

function ExperiencePreparing() {
  return (
    <section className="h-screen w-screen bg-primary md:bg-background flex flex-col items-center onboarding-container">

      <div className="hidden md:block py-10  self-start" role="Logo section">
        <Logo />
      </div>

      <div className="w-full max-w-[572px] h-full md:h-[572px] rounded-[28px] md:bg-primary flex flex-col justify-between px-6 py-[12px]" role="container">

        <div className="w-full flex justify-between items-center" role="nav container">
          {/* Navigation */}
          <Link to="/commitment">
            <OnboardingNav />
          </Link>
          <div className="">
            <NavigationLinks />
          </div>
        </div>
        <div className="w-full max-w-[572px] md:-h-[572px] rounded-[28px] md:bg-primary flex flex-col justify-between px-6 py-[12px]" role="main box">
          <div className="flex flex-col items-center justify-center">
            {/* Rootie Image */}
            <img src={Root} alt="Rootie Image" className="w-50" />

            {/* Content */}
            <h1 className="text-secondary text-2xl text-center font-stylish">
              <span className="text-accent">Rootie is</span> preparing your
              learning experience.
            </h1>
          </div>
        </div>
        <div className="self-center">
          {/* Loading Spinner - Skeleton */}
          <LoaderCircle
            color="#C36C00"
            size="50"
            className={cn("animate-spin")}
          />
        </div>
      </div>
    </section>
  );
}

export default ExperiencePreparing;
