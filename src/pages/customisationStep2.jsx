import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";

import OnboardingNav from "@/components/ui/onboardingNav";
import NavigationLinks from "@/components/features/onboarding/navLinks";
import Logo from "@/components/ui/logo";
import { ChevronDown } from "lucide-react";

const languages = [
  { name: "English", code: "us" },
  { name: "Hausa", code: "ng" },
  { name: "Igbo", code: "ng" },
  { name: "Yoruba", code: "ng" },
  { name: "Swahili (Kenya)", code: "ke" },
  { name: "Zulu", code: "za" },
];

const learningLanguages = [
  { name: "Hausa", code: "ng", disabled: false }, // Nigeria
  { name: "Igbo", code: "ng", disabled: true }, // Nigeria
  { name: "Swahili (Kenya)", code: "ke", disabled: true }, // Kenya
];

function CustomisationStep2() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedLearning, setSelectedLearning] = useState(null);

  return (
    <section className="min-h-screen w-full bg-primary md:bg-background">
      <div className="hidden md:block py-10 px-8 self-start">
        <Logo />
      </div>

      <div className="max-w-[572px] w-full m-auto">
        <div className=" w-full p-6 flex flex-col h-full min-h-screen md:min-h-0 items-center md:bg-primary md:rounded-[16px]">
          <div className="w-full h-[50px] md:h-[32px] flex flex-row justify-between">
            {/* Nav Container  */}
            <div
              className="w-full flex justify-between items-center"
              role="navigation container"
            >
              {/* Navigation */}
              <Link to="/customisation1">
                <OnboardingNav />
              </Link>
              <div className="">
                <NavigationLinks />
              </div>
            </div>
          </div>

          <div className="mt-6 md:mt-11 text-[24px] text-secondary text-center">
            <p>Tell me a little bit </p>
            <p>more about yourself ...</p>
          </div>

          <div className="w-[100%] mt-6 flex flex-col text-background md:mt-10 text-[14px]">
            <label className="mb-2">What language do you speak?</label>

            <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
              <div className="relative">
                <ListboxButton className="cursor-pointer w-full h-[64px] bg-white rounded-[16px] px-4 text-left flex justify-between items-center">
                  {selectedLanguage ? (
                    <span className="flex items-center gap-2">
                      <img
                        src={`https://flagcdn.com/w40/${selectedLanguage.code}.png`}
                        alt={selectedLanguage.name}
                        className="w-5 h-5 object-cover rounded-full"
                      />
                      {selectedLanguage.name}
                    </span>
                  ) : (
                    "Select language"
                  )}
                  <span className="text-black text-sm ml-2">
                    <ChevronDown />
                  </span>
                </ListboxButton>

                <ListboxOptions className="absolute mt-2 md:mt-[6px] max-h-[300px] md:h-[210px] w-full overflow-y-auto rounded-[16px] bg-white shadow-lg z-10">
                  {languages.map((language, idx) => (
                    <div key={idx}>
                      {(idx === 1 || idx === 4 || idx === 5) && (
                        <div className="border-t border-2 md:border border-primary my-1 mx-1 md:my-[5px] md:mx-0"></div>
                      )}

                      <ListboxOption
                        value={language}
                        className={({ active }) =>
                          `cursor-pointer px-4 py-2 md:px-2 md:py-1 text-sm 
                rounded-[10px] m-1 md:m-[1px] transition flex justify-between items-center ${
                  active ? "bg-primary" : ""
                }`
                        }
                      >
                        <span className="flex items-center gap-2">
                          <img
                            src={`https://flagcdn.com/w40/${language.code}.png`}
                            alt={language.name}
                            className="w-4 h-4 object-cover rounded-full"
                          />
                          {language.name}
                        </span>

                        {language.name === "Zulu" && (
                          <span className="text-[14px] md:text-[10px] bg-gray-200 text-gray-700 px-2 py-[2px] rounded-md">
                            Coming soon
                          </span>
                        )}
                      </ListboxOption>
                    </div>
                  ))}
                </ListboxOptions>
              </div>
            </Listbox>
          </div>

          <div className="w-[100%] mt-[10px] flex flex-col text-background text-sm md:mt-[12px]">
            <label className="mb-2">I want to learn</label>

            <Listbox value={selectedLearning} onChange={setSelectedLearning}>
              <div className="relative">
                <ListboxButton className="cursor-pointer w-full h-[64px] bg-white rounded-[16px] px-4 text-left flex justify-between items-center">
                  {selectedLearning ? (
                    <span className="flex items-center gap-2">
                      <img
                        src={`https://flagcdn.com/w40/${selectedLearning.code}.png`}
                        alt={selectedLearning.name}
                        className="w-5 h-5 object-cover rounded-full"
                      />
                      {selectedLearning.name}
                    </span>
                  ) : (
                    "Choose language"
                  )}
                  <span className="text-black text-sm ml-2">
                    <ChevronDown />
                  </span>{" "}
                  {/* Temporary icon */}
                </ListboxButton>

                <ListboxOptions className="absolute mt-2 max-h-[270px] w-full overflow-y-auto rounded-[16px] md:max-h-[120px] bg-white shadow-lg z-10">
                  {learningLanguages.map((lang, idx) => (
                    <ListboxOption
                      key={idx}
                      value={lang}
                      disabled={lang.disabled}
                      className={({ active, disabled }) =>
                        `cursor-pointer px-4 py-2 md:px-2 md:py-2 rounded-[10px] transition flex items-center gap-2 ${
                          disabled
                            ? "text-gray-400 cursor-not-allowed"
                            : active
                            ? "bg-primary"
                            : ""
                        }`
                      }
                    >
                      <img
                        src={`https://flagcdn.com/w40/${lang.code}.png`}
                        alt={lang.name}
                        className="w-4 h-4 object-cover rounded-full"
                      />
                      <span>{lang.name}</span>
                    </ListboxOption>
                  ))}
                </ListboxOptions>
              </div>
            </Listbox>
          </div>

          {selectedLanguage && selectedLearning ? (
            <Link
              to="/welcome"
              className=" mt-auto w-[100%] h-[64px] mb-5  md:mb-[-10px]  md:mt-20 text-[16px] text-white flex justify-center items-center rounded-[16px]"
              style={{ backgroundColor: "var(--secondary)" }}
            >
              Continue
            </Link>
          ) : (
            <button
              disabled
              style={{ backgroundColor: "#deae73" }}
              className="cursor-not-allowed mt-auto mb-5 w-[100%] h-[64px]  md:mb-[-7px]  md:mt-17 text-[16px] text-white flex justify-center items-center rounded-[14px]"
            >
              Continue
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default CustomisationStep2;
