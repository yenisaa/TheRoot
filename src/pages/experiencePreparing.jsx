import NavigationLinks from "@/components/features/onboarding/navLinks";
import OnboardingNav from "@/components/ui/onboardingNav";
import Root from "../assets/images/a-root.png";
import Spinner from "@/components/ui/spinner";
import Logo from "@/components/ui/logo";

function ExperiencePreparing() {
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

            <div className="mt-8 md:mt-16">
              <div className="max-w-[400px] m-auto flex flex-col items-center gap-[33px]">
                <img src={Root} alt="Rootie Image" className="h-[103px]" />

                <h1 className="text-secondary text-2xl text-center font-stylish">
                  <span className="text-accent">Rootie is</span> preparing your
                  learning experience.
                </h1>
              </div>

              <div className="mt-8 md:mt-20 mb-1 md:mb-16 flex items-center justify-center">
                <Spinner />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperiencePreparing;
