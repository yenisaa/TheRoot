import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import OnboardingNav from "@/components/ui/onboardingNav";
import Carousel2 from "@/components/ui/carouselSmaller";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/components/ui/logo";

function LoginStep() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const handleClick1 = () => navigate("");

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <section className="md:min-h-screen w-full bg-primary md:bg-background overflow-hidden">
      <div className="onboarding-container">
        <div className="hidden md:block py-10 px-8 self-start">
          <Logo />
        </div>

        <div className="max-w-[572px] w-full m-auto">
          <div className="min-h-screen md:min-h-auto w-full p-6 flex flex-col items-center md:bg-primary md:border md:border-white/6 rounded-[28px]">
            <OnboardingNav />

            <div className="w-full min-h-[calc(100vh-100px)] md:min-h-auto flex flex-col">
              <div className="min-h-[170px] md:min-h-[230px] w-full">
                <Carousel2 />
              </div>

              <form
                onSubmit={handleSubmit}
                className="flex-1 flex flex-col justify-between md:gap-6"
              >
                <div className="w-full flex flex-col items-start gap-2">
                  {/* Email */}
                  <div className="w-full flex flex-col justify-center items-start gap-2">
                    <label htmlFor="Email" className="text-black text-sm">
                      Email address
                    </label>
                    <Input
                      id="Email"
                      name="email"
                      type="email"
                      placeholder="Input your email address"
                      value={formData.email}
                      onChange={handleChange}
                      className="flex w-full px-[22px] py-7 rounded-2xl text-black placeholder:text-sm placeholder:text-placeholder"
                    />
                  </div>

                  {/* Password */}
                  <div className="w-full flex flex-col justify-center items-start  gap-2">
                    <label htmlFor="password" className="text-black text-sm">
                      Create your password
                    </label>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="Create a password"
                      value={formData.password}
                      onChange={handleChange}
                      className="flex w-full px-[22px] py-7 rounded-2xl text-black placeholder:text-sm placeholder:text-placeholder"
                    />
                  </div>
                </div>

                <div>
                  <Button
                    type="submit"
                    disabled={!formData.email || !formData.password}
                    className={`w-full h-16 text-white text-[16px] md:text-[14px] rounded-[14px] 
                          ${
                            !formData.email || !formData.password
                              ? "bg-secondary opacity-100 cursor-not-allowed"
                              : "bg-secondary hover:bg-secondary/90"
                          } 
                        `}
                  >
                    Login
                  </Button>

                  <div
                    style={{ cursor: "pointer" }}
                    className="w-full mt-5 md:text-[12px] text-background flex justify-center items-center rounded-[14px]"
                  >
                    Don't have an account? &nbsp;
                    <Link to="/sign-in" className="text-accent">
                      Sign up
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginStep;
