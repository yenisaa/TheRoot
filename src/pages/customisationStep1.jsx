import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import Logo from "@/components/ui/logo";
import rootImage from "../assets/images/a-root.png";
import OnboardingNav from "@/components/ui/onboardingNav";

function CustomisationStep1() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = () => {};

  return (
    <section className="h-screen w-full bg-primary md:bg-background overflow-auto">
      <div className="onboarding-container">
        <div className="hidden md:block py-10 px-8 self-start">
          <Logo />
        </div>

        <div className="max-w-[572px] w-full m-auto">
          <div className="w-full p-6 flex flex-col h-full min-h-screen md:min-h-0 items-center md:bg-primary md:rounded-[16px]">
            <div className="w-full h-[50px] md:h-[32px] flex flex-row justify-between">
              <OnboardingNav />

              <div className="flex flex-row items-center gap-1">
                <div className="w-8 h-1 bg-secondary" />
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    style={{ backgroundColor: "#eed6b7" }}
                    className="w-8 h-1"
                  />
                ))}
              </div>
            </div>

            <div className="mt-[58px] md:mt-16 mb-[33px]">
              <img
                src={rootImage}
                alt="the root icon"
                className="h-[103px] object-contain"
              />
            </div>

            <div className="mt-[-40px] ml-[10px] md:mt-[-20px] md:ml-[10px]">
              <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-t-[12px] md:border-l-[6px] md:border-r-[6px] md:border-t-[8px] border-l-transparent border-r-transparent rounded-[5px] border-t-secondary" />
            </div>

            <div className="text-green-600 text-[24px] mt-[10px] md:mt-[10px]">
              Hi I'm Rootie,
            </div>

            <div className=" text-[24px] text-secondary">
              what can I call you?
            </div>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full flex flex-col flex-1"
            >
              <input
                className="w-full h-[64px] border mt-[30px] md:mt-[25px] 
               pl-5 text-[14px] bg-white rounded-[16px] 
               placeholder:text-placeholder focus:outline-none text-background"
                placeholder="Input your preferred name"
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                })}
                onFocus={(e) => (e.target.style.borderColor = "#f5e7d5")}
                onBlur={(e) => (e.target.style.borderColor = "#f5e7d5")}
              />

              <div className="min-h-[20px] md:pl-2 md:min-h-[16px] mb-[40px]">
                {errors.name && (
                  <p className="text-red-500 text-[10px] mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <Link
                to={isValid ? "/customisation2" : "#"}
                onClick={(e) => {
                  if (!isValid) e.preventDefault();
                }}
                style={{
                  backgroundColor: !isValid ? "#deae73" : "var(--secondary)",
                  cursor: !isValid ? "not-allowed" : "pointer",
                }}
                className="w-full h-[64px] mt-auto mb-5 text-[16px] md:mb-0 text-white flex justify-center items-center rounded-[16px]"
              >
                Continue
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomisationStep1;
