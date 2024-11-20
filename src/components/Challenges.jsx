import React from "react";
import { Link } from "react-router-dom";
import rocket from "../assets/challenges/rocket.png";
import minecraft from "../assets/challenges/minecraft.png";
import packman from "../assets/challenges/packman.png"
import mario from "../assets/challenges/mario.png"
const Chapters = () => {
  const chapters = [
    {
      name: "Tout-Terrain",
      link: "/ToutTerrain",
      imgSrc: minecraft,
      bgColor: "bg-[#740f0f]",
    },
    {
      name: "Suiveur",
      link: "/Suiveur",
      imgSrc: packman,
      bgColor: "bg-[#c65503]",
    },
    {
      name: "Junior",
      link: "/Junior",
      imgSrc:mario,
      bgColor: "bg-[#d9e2e5]",
    },
    {
      name: "Rocket-League",
      link: "/RocketLeague",
      imgSrc: rocket,
      bgColor: "bg-[#a14706]",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mb-12 flex items-center justify-center gap-3">
        <h2 className="text-center text-4xl font-bold">Our Challenges</h2>
      </div>
      <div className="ggrid mx-auto mt-10 flex max-w-lg grid-cols-4 flex-wrap items-center justify-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        {chapters.map((chapter, index) => (
          <div key={index} className="transition hover:scale-105">
            <Link to={chapter.link}>
              <img
                className={`col-span-2 mx-auto h-36 w-64 rounded-2xl ${chapter.bgColor} object-contain p-6 shadow-md shadow-gray-200 transition dark:shadow-gray-800 lg:col-span-1`}
                src={chapter.imgSrc}
                alt={chapter.name}
                loading="lazy"
              />
              <h1 className="mt-4 text-center text-lg font-extrabold">
                {chapter.name}
              </h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chapters;
