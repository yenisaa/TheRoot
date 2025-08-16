import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import signUpSchema from "@/lib/schemas/signUpSchema";

import Logo from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import OnboardingNav from "@/components/ui/onboardingNav";

import googleLogo from "@/assets/images/google-logo.png";

const SignIn = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    navigate("/verify-email");
  };

  return (
    <section className="h-screen w-full bg-primary md:bg-background overflow-auto">
      <div className="onboarding-container">
        <div className="hidden md:block py-10 px-8 self-start">
          <Logo />
        </div>

        <div className="max-w-[572px] w-full m-auto">
          <div className="w-full h-full p-6 rounded-2xl md:bg-primary">
            <OnboardingNav />

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full min-h-[calc(100vh-152px)] md:min-h-auto mt-10 flex flex-col justify-between"
            >
              <div className="flex flex-col justify-between gap-2">
                {/* Email */}
                <div className="w-full flex flex-col gap-2">
                  <label
                    htmlFor="Email"
                    className="text-black text-sm font-medium"
                  >
                    Email address
                  </label>
                  <Input
                    id="Email"
                    type="email"
                    placeholder="Input your email address"
                    {...register("email")}
                    className="h-16 flex w-full px-[24px] py-[22px] rounded-2xl text-black placeholder:text-sm placeholder:text-placeholder"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Password */}
                <div className="w-full flex flex-col gap-2">
                  <label
                    htmlFor="password"
                    className="text-black text-sm font-medium"
                  >
                    Create your password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Create a password"
                    {...register("password")}
                    className="h-16 flex w-full px-[24px] py-[22px] rounded-2xl text-black placeholder:text-sm placeholder:text-placeholder"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs">
                      {errors.password.message}
                    </p>
                  )}
                </div>

                {/* Confirm Password */}
                <div className="w-full flex flex-col gap-2">
                  <label
                    htmlFor="confirmPassword"
                    className="text-black text-sm font-medium"
                  >
                    Confirm password
                  </label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm the password"
                    {...register("confirmPassword")}
                    className="h-16 flex w-full px-[24px] py-[22px] rounded-2xl text-black placeholder:text-sm placeholder:text-placeholder"
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-500 text-xs">
                      {errors.confirmPassword.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-10">
                <Button
                  type="submit"
                  className="w-full h-16 text-base text-primary-foreground rounded-[14px] bg-secondary hover:bg-secondary/90"
                >
                  Create a profile
                </Button>

                {/* Divider */}
                <div className="flex items-center my-4">
                  <div className="flex-grow h-px bg-stone-300"></div>
                  <span className="px-3 text-wheat4-500 text-sm font-medium">
                    OR
                  </span>
                  <div className="flex-grow h-px bg-stone-300"></div>
                </div>

                <Button
                  type="button"
                  variant="ghost"
                  className="w-full h-16 flex items-center justify-center gap-3 text-base text-background rounded-[14px] cursor-pointer"
                  onClick={() => console.log("Google Sign Up clicked")}
                >
                  <img src={googleLogo} alt="Google" className="h-6" />
                  Sign up using Google
                </Button>
              </div>
            </form>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
