import { useState } from "react";

// icons
import { FaChevronDown } from "react-icons/fa6";

const Accordion = () => {
  const [isAccordingOpen, setIsAccordingOpen] = useState(0);

  // according data
  const accordingData = [
    {
      title: " What are your office hours?",
      description:
        "Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.",
    },
    {
      title: "How can I schedule an appointment?",
      description:
        "Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.",
    },
    {
      title: "Do you accept insurance?",
      description: `Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.`,
    },

    {
      title: `What should I bring to my appointment?`,
      description: `Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.`,
    },

    {
      title: `Do you offer telemedicine appointments?`,
      description: `Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.`,
    },
  ];

  const handleClick = (index) =>
    setIsAccordingOpen((prevIndex) => (prevIndex === index ? null : index));

  return (
    <div className="my-20 p-6 lg:p-0">
      <div>
        <button className="border-2 border-[#020043] text-[#020043] px-5 py-1 mb-3 rounded-full">
          Faq
        </button>
        <h1 className="text-3xl font-semibold text-[#020043] mt-2">
          Frequently Asked Question
        </h1>
      </div>
      <div className="flex gap-3 flex-col w-full mt-10">
        {accordingData?.map((according, index) => (
          <article
            key={index}
            className="border-b border-[#e5eaf2] rounded py-3"
          >
            <div
              className="flex gap-2 cursor-pointer items-center justify-between w-full"
              onClick={() => handleClick(index)}
            >
              <h2 className="text-[#020043] font-[600] text-[1.2rem]">
                {according.title}
              </h2>
              <p>
                <FaChevronDown
                  className={`text-[1.2rem] text-[#424242] transition-all duration-300 ${
                    isAccordingOpen === index &&
                    "rotate-[180deg] !text-[#020043]"
                  }`}
                />
              </p>
            </div>
            <div
              className={`grid transition-all duration-300 overflow-hidden ease-in-out ${
                isAccordingOpen === index
                  ? "grid-rows-[1fr] opacity-100 mt-4"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="text-[#424242] bg-[#FFFFFF] text-[0.9rem] overflow-hidden">
                {according.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
