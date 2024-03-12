"use client";

import Image from "next/image";
import Earth from "../../../public/planet-earth.svg";
import EarthStructure from "../../../public/planet-earth-internal.svg";
import GeologyEarth from "../../../public/geology-earth.png";
import Jupiter from "../../../public/planet-jupiter.svg";
import JupiterStructure from "../../../public/planet-jupiter-internal.svg";
import GeologyJupiter from "../../../public/geology-jupiter.png";
import Mars from "../../../public/planet-mars.svg";
import MarsStructure from "../../../public/planet-mars-internal.svg";
import GeologyMars from "../../../public/geology-mars.png";
import Mercury from "../../../public/planet-mercury.svg";
import MercuryStructure from "../../../public/planet-mercury-internal.svg";
import GeologyMercury from "../../../public/geology-mercury.png";
import Neptune from "../../../public/planet-neptune.svg";
import NeptuneStructure from "../../../public/planet-neptune-internal.svg";
import GeologyNeptune from "../../../public/geology-neptune.png";
import Saturn from "../../../public/planet-saturn.svg";
import SaturnStructure from "../../../public/planet-saturn-internal.svg";
import GeologySaturn from "../../../public/geology-saturn.png";
import Uranus from "../../../public/planet-uranus.svg";
import UranusStructure from "../../../public/planet-uranus-internal.svg";
import GeologyUranus from "../../../public/geology-uranus.png";
import Venus from "../../../public/planet-venus.svg";
import VenusStructure from "../../../public/planet-venus-internal.svg";
import GeologyVenus from "../../../public/geology-venus.png";
import { useState } from "react";

type Props = {
  id?: number | undefined;
  name?: string | undefined;
  radius?: number | undefined;
  revolution?: number | undefined;
  rotation?: number | undefined;
  overview_content?: string | undefined;
  overview_source?: string | undefined;
  structure_content?: string | undefined;
  structure_source?: string | undefined;
  temperature?: number | undefined;
  geology_source?: string | undefined;
  geology_content?: string | undefined;
};

function Content({
  id,
  name,
  radius,
  revolution,
  rotation,
  overview_content,
  overview_source,
  structure_content,
  structure_source,
  temperature,
  geology_source,
  geology_content,
}: Props) {
  const [activeTab, setActiveTab] = useState("overview");

  function format(rotationInMilliseconds: number | undefined) {
    if (rotationInMilliseconds === undefined) return;
    const seconds = rotationInMilliseconds / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;
    const years = days / 365;

    if (years >= 1) {
      return `${years.toFixed(2)} years`;
    } else if (days >= 1) {
      return `${days.toFixed(2)} days`;
    } else {
      return `${hours.toFixed(2)} hours`;
    }
  }

  const img = {
    earth: {
      overview: Earth,
      structure: EarthStructure,
      geology: GeologyEarth,
    },
    jupiter: {
      overview: Jupiter,
      structure: JupiterStructure,
      geology: GeologyJupiter,
    },
    mercury: {
      overview: Mercury,
      structure: MercuryStructure,
      geology: GeologyMercury,
    },
    venus: {
      overview: Venus,
      structure: VenusStructure,
      geology: GeologyVenus,
    },
    mars: {
      overview: Mars,
      structure: MarsStructure,
      geology: GeologyMars,
    },
    uranus: {
      overview: Uranus,
      structure: UranusStructure,
      geology: GeologyUranus,
    },
    neptune: {
      overview: Neptune,
      structure: NeptuneStructure,
      geology: GeologyNeptune,
    },
    saturn: {
      overview: Saturn,
      structure: SaturnStructure,
      geology: GeologySaturn,
    },
  };

  function formatLength(lengthInMeters: number | undefined) {
    if (lengthInMeters === undefined) return;
    const kilometers = lengthInMeters / 1000;
    return `${kilometers.toLocaleString("en-US")} km`;
  }

  return (
    <div className="md:max-w-[1110px] w-full mx-auto flex md:flex-col md:gap-20 px-10 sm:gap-7 sm:flex-col pb-10">
      <div className="md:max-w-[1110px] w-full mx-auto flex md:flex-row md:justify-end md:items-center md:gap-[300px] md:pt-32 text-white sm:pt-12 sm:gap-9 sm:items-center sm:flex-col">
        <div className="md:w-[400px] md:h-[400px] sm:w-[369px] sm:h-[369px] relative">
          {activeTab === "geology" ? (
            <>
              <Image
                className="w-full"
                src={img[name?.toLowerCase() as keyof typeof img]?.overview}
                alt="Planet photo"
              />
              <Image
                className="w-[169px] h-[199px] absolute bottom-[-70px] left-1/2 transform -translate-x-1/2"
                src={
                  img[name?.toLowerCase() as keyof typeof img][
                    activeTab as keyof typeof img.earth
                  ]
                }
                alt="Planet photo"
              />
            </>
          ) : (
            <Image
              className="w-full"
              src={
                img[name?.toLowerCase() as keyof typeof img][
                  activeTab as keyof typeof img.earth
                ]
              }
              alt="Planet photo"
            />
          )}
        </div>
        <div className="md:max-w-[350px] w-full flex md:flex-col md:gap-10 sm:max-w-full sm:flex-row sm:items-center sm:gap-[69px]">
          <div className="flex flex-col gap-6 min-h-[155px] sm:max-w-[339px]">
            <h1 className="font-['Antonio'] text-[80px] uppercase">{name}</h1>
            <p className="min-h-[155px] text-sm leading-6">
              {activeTab === "overview"
                ? overview_content
                : activeTab === "structure"
                  ? structure_content
                  : geology_content}
            </p>
            <div className="flex gap-2 items-center">
              <p className="text-xs tracking-[2.5px] opacity-50 leading-6">
                Source
              </p>
              <a
                className="flex gap-2 items-center underline"
                href={`${
                  activeTab === "overview"
                    ? overview_source
                    : activeTab === "structure"
                      ? structure_source
                      : geology_source
                }`}
              >
                <p className="text-sm tracking-[2.5px] opacity-50 font-bold leading-6">
                  Wikipedia
                </p>
                <div className="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      opacity="0.5"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.75002 0C10.3698 0 10.8998 0.220059 11.3397 0.660095C11.7797 1.10013 11.9998 1.63022 11.9998 2.24998V9.74994C11.9998 10.3697 11.7797 10.8997 11.3396 11.3398C10.8997 11.7799 10.3697 12 9.74994 12H2.24998C1.63025 12 1.10021 11.7799 0.660095 11.3398C0.220059 10.8997 0 10.3696 0 9.74994V2.24998C0 1.63022 0.220059 1.10021 0.660095 0.660095C1.10021 0.220059 1.63025 0 2.24998 0H9.75002ZM9.69524 6.71084C9.89825 6.62224 9.99996 6.46867 9.99996 6.24993H9.99999V2.49998C9.99999 2.36455 9.95051 2.24733 9.85165 2.14843C9.75254 2.04943 9.63531 1.9999 9.49991 1.9999H5.75007C5.53133 1.9999 5.3776 2.10156 5.2891 2.30463C5.20061 2.51825 5.23703 2.70044 5.39853 2.85149L6.52354 3.97647L2.35161 8.14845C2.25264 8.24734 2.20313 8.36459 2.20313 8.49988C2.20313 8.63522 2.25264 8.75264 2.35161 8.85142L3.14847 9.64842C3.24742 9.74731 3.36461 9.79687 3.50012 9.79687C3.63557 9.79687 3.75266 9.74731 3.85174 9.64842L8.02342 5.47649L9.14835 6.60147C9.24218 6.70033 9.3594 6.74989 9.49989 6.74989C9.56228 6.74989 9.62762 6.73686 9.69524 6.71084Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div className="w-full flex flex-col gap-4">
            <button
              className={`${activeTab === "overview" ? "active-tab" : ""} w-full flex justify-start items-center border-[1px] border-white border-opacity-20 md:py-3 md:pl-7 md:gap-7 sm:gap-4 sm:pl-5 sm:py-2 transition-all duration-200 hover:bg-[#D8D8D8] hover:bg-opacity-20`}
              onClick={() => setActiveTab("overview")}
            >
              <p className="md:text-xs md:tracking-[2.5px] uppercase font-bold leading-6 opacity-50 sm:text-[9px] sm:tracking-[1.9px]">
                01
              </p>
              <p className="md:text-xs md:tracking-[2.5px] uppercase font-bold leading-6 sm:text-[9px] sm:tracking-[1.9px]">
                Overview
              </p>
            </button>
            <button
              className={`${activeTab === "structure" ? "active-tab" : ""} w-full flex justify-start items-center border-[1px] border-white border-opacity-20 md:py-3 md:pl-7 md:gap-7 sm:gap-4 sm:pl-5 sm:py-2 transition-all duration-200 hover:bg-[#D8D8D8] hover:bg-opacity-20`}
              onClick={() => setActiveTab("structure")}
            >
              <p className="md:text-xs md:tracking-[2.5px] uppercase font-bold leading-6 opacity-50 sm:text-[9px] sm:tracking-[1.9px]">
                02
              </p>
              <p className="md:text-xs md:tracking-[2.5px] uppercase font-bold leading-6 sm:text-[9px] sm:tracking-[1.9px]">
                Internal Structure
              </p>
            </button>
            <button
              className={`${activeTab === "geology" ? "active-tab" : ""} w-full flex justify-start items-center border-[1px] border-white border-opacity-20 md:py-3 md:pl-7 md:gap-7 sm:gap-4 sm:pl-5 sm:py-2 transition-all duration-200 hover:bg-[#D8D8D8] hover:bg-opacity-20`}
              onClick={() => setActiveTab("geology")}
            >
              <p className="md:text-xs md:tracking-[2.5px] uppercase font-bold leading-6 opacity-50 sm:text-[9px] sm:tracking-[1.9px]">
                03
              </p>
              <p className="md:text-xs md:tracking-[2.5px] uppercase font-bold leading-6 sm:text-[9px] sm:tracking-[1.9px]">
                Surface Geology
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-7 text-white">
        <div className="md:w-[255px] md:h-auto flex flex-col border-[1px] border-white border-opacity-20 md:pl-6 md:pt-5 md:pb-7 md:gap-1 sm:w-[164px] sm:h-[88px] sm:pl-4 sm:pt-4 sm:pb-5">
          <p className="md:text-[11px] md:tracking-[1px] opacity-50 font-bold leading-6 uppercase sm:text-[8px] sm:leading-[16px] sm:tracking-[0.72px]">
            ROTATION TIME
          </p>
          <h3 className="font-['Antonio'] md:text-[40px] md:tracking-[-1.5px] md:leading-[52px] uppercase sm:text-2xl sm:tracking-[-0.9px]">
            {format(rotation)}
          </h3>
        </div>
        <div className="md:w-[255px] md:h-auto flex flex-col border-[1px] border-white border-opacity-20 md:pl-6 md:pt-5 md:pb-7 md:gap-1 sm:w-[164px] sm:h-[88px] sm:pl-4 sm:pt-4 sm:pb-5">
          <p className="md:text-[11px] md:tracking-[1px] opacity-50 font-bold leading-6 uppercase sm:text-[8px] sm:leading-[16px] sm:tracking-[0.72px]">
            REVOLUTION TIME
          </p>
          <h3 className="font-['Antonio'] md:text-[40px] md:tracking-[-1.5px] md:leading-[52px] uppercase sm:text-2xl sm:tracking-[-0.9px]">
            {format(revolution)}
          </h3>
        </div>
        <div className="md:w-[255px] md:h-auto flex flex-col border-[1px] border-white border-opacity-20 md:pl-6 md:pt-5 md:pb-7 md:gap-1 sm:w-[164px] sm:h-[88px] sm:pl-4 sm:pt-4 sm:pb-5">
          <p className="md:text-[11px] md:tracking-[1px] opacity-50 font-bold leading-6 uppercase sm:text-[8px] sm:leading-[16px] sm:tracking-[0.72px]">
            radius
          </p>
          <h3 className="font-['Antonio'] md:text-[40px] md:tracking-[-1.5px] md:leading-[52px] uppercase sm:text-2xl sm:tracking-[-0.9px]">
            {formatLength(radius)}
          </h3>
        </div>
        <div className="md:w-[255px] md:h-auto flex flex-col border-[1px] border-white border-opacity-20 md:pl-6 md:pt-5 md:pb-7 md:gap-1 sm:w-[164px] sm:h-[88px] sm:pl-4 sm:pt-4 sm:pb-5">
          <p className="md:text-[11px] md:tracking-[1px] opacity-50 font-bold leading-6 uppercase sm:text-[8px] sm:leading-[16px] sm:tracking-[0.72px]">
            AVERAGE TEMP.
          </p>
          <h3 className="font-['Antonio'] md:text-[40px] md:tracking-[-1.5px] md:leading-[52px] uppercase sm:text-2xl sm:tracking-[-0.9px]">
            {temperature}°c
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Content;
