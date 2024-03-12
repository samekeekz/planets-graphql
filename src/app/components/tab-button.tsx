"use client";

type Props = {
  activeTab: string;
  number: string;
  label: string;
};

const TabButton = ({ activeTab, number, label }: Props) => {
  function setActiveTab(tab: string) {
    activeTab = tab;
  }

  return (
    <button
      className={`${activeTab === "overview" ? "active-tab" : ""} w-full flex justify-start items-center border-[1px] border-white border-opacity-20 md:py-3 md:pl-7 md:gap-7 sm:gap-4 sm:pl-5 sm:py-2 transition-all duration-200 hover:bg-[#D8D8D8] hover:bg-opacity-20`}
      onClick={() => setActiveTab("overview")}
    >
      <p className="md:text-xs md:tracking-[2.5px] uppercase font-bold leading-6 opacity-50 sm:text-[9px] sm:tracking-[1.9px]">
        {number}
      </p>
      <p className="md:text-xs md:tracking-[2.5px] uppercase font-bold leading-6 sm:text-[9px] sm:tracking-[1.9px]">
        {label}
      </p>
    </button>
  );
};

export default TabButton;
