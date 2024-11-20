import J1 from "../../assets/Tout-Terrain/T1.jpg";
import J2 from "../../assets/Tout-Terrain/T2.jpg";
import J3 from "../../assets/Tout-Terrain/T3.jpg";
import J4 from "../../assets/Tout-Terrain/T4.jpg";
import J5 from "../../assets/Tout-Terrain/T5.jpg";
import J6 from "../../assets/Tout-Terrain/T6.jpg";
import J7 from "../../assets/Tout-Terrain/T7.jpg";
import J8 from "../../assets/Tout-Terrain/T8.jpg";
import J9 from "../../assets/Tout-Terrain/T9.jpg";
import Acceuil from './ChallengeAcceuil'
import Image from '../../assets/Tout-Terrain/acceuil.jpg'
import { Link } from "react-router-dom";
const ToutTerrains = () => {
  const ToutTerrains = [
    { src: J1, alt: "ToutTerrain" },
    { src: J2, alt: "ToutTerrain" },
    { src: J3, alt: "ToutTerrain" },
    { src: J4, alt: "ToutTerrain" },
    { src: J5, alt: "ToutTerrain" },
    { src: J6, alt: "ToutTerrain" },
    { src: J7, alt: "ToutTerrain" },
    { src: J8, alt: "ToutTerrain" },
    { src: J9, alt: "ToutTerrain" },
  ];

  return (
    <>
    <Acceuil Name="All Terrain" backgroundImage={Image}/>
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
    <div className="h-fit mb-6">
        <p className="text-justify text-xl md:mb-5 mb-9 font-sans">The <span className="font-bold">All-Terrain </span>challenge, themed around Minecraft, is designed to test the ability of robots to navigate through rugged and dynamic landscapes. Competitors will need to build robots capable of overcoming various obstacles, such as rough terrain, steep inclines, and unpredictable paths, inspired by the Minecraft world. The robots are required to navigate a six-stage course, each progressively more difficult, where precision and durability are crucial. Participants must demonstrate innovation in design and control to ensure their robots can traverse the entire course without losing balance or stalling.</p>
        <div className="flex justify-center items-center">
        <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfA6t_Xgx7kavekYeqq-TzTkxsEr8ztUdqoYxYlXhtTqrpF9w/viewform">
        <button className="mr-2 text-white flex justify-center items-center rounded-lg bg-purple-500 hover:bg-purple-950 px-4 py-2 h-11 font-semibold hover:delay-150">subscribe</button>
        </Link>
        <Link to="https://drive.google.com/file/d/1GPyQje5EbQXe-h-a40jmjJZjeCkl35Bb/view">
        <button className="text-white flex justify-center items-center rounded-lg  px-4 py-2 h-11 w-48 font font-semibold  bg-purple-500 hover:bg-purple-950  hover:delay-150">Project Specifications</button>
        </Link>
        </div>
      </div>
      <div className="mb-12 flex items-center justify-center gap-3">
        <h2 className="text-center text-2xl md:text-4xl font-extrabold">
        All-Terrain Challenge
        </h2>
      </div>
      <div className="grid mx-auto mt-10 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {ToutTerrains.map((chapter, index) => (
          <div key={index} className="transition hover:scale-105">
              <img
                className="mx-auto h-fit w-fit object-contain rounded-xl shadow-md"
                src={chapter.src}
                alt={chapter.alt}
                loading="lazy"
              />
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default ToutTerrains;
