import { useState } from "react";
import { ChevronDown } from "lucide-react";

function FaqItems({ index, question, answer }) {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="border-t border-[#ECE9E5] overflow-hidden">
      <button
        onClick={() => toggleAccordion(index)}
        className="w-full px-6 py-5 text-left flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors duration-200"
      >
        <h3 className="text-xl font-stylish font-eudoxus700 text-tertiary pr-4">
          {question}
        </h3>
        <div className="p-1 bg-[#F4F9F4] border border-[#E9F3E9] rounded-[8px] cursor-pointer">
          <ChevronDown
            className={`w-5 h-5 text-accent transition-transform duration-200 flex-shrink-0 ${
              openIndex === index ? "rotate-180" : ""
            }`}
          />
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-5">
          <p className="text-lg text-tertiary leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default FaqItems;
