import J1 from "../../assets/suiveur/S1.jpg";
import J2 from "../../assets/suiveur/S2.jpg";
import J3 from "../../assets/suiveur/S11.jpg";
import J4 from "../../assets/suiveur/S3.jpg";
import J5 from "../../assets/suiveur/S4.jpg";
import J6 from "../../assets/suiveur/S5.jpg";
import J7 from "../../assets/suiveur/S6.jpg";
import J8 from "../../assets/suiveur/S7.jpg";
import J9 from "../../assets/suiveur/S8.jpg";
import Acceuil from './ChallengeAcceuil'
import Image from '../../assets/suiveur/acceuil.jpg'
import { Link } from "react-router-dom";
const Suiveurs = () => {
  const Suiveurs = [
    { src: J1, alt: "Suiveur" },
    { src: J2, alt: "Suiveur" },
    { src: J3, alt: "Suiveur" },
    { src: J4, alt: "Suiveur" },
    { src: J5, alt: "Suiveur" },
    { src: J6, alt: "Suiveur" },
    { src: J7, alt: "Suiveur" },
    { src: J8, alt: "Suiveur" },
    { src: J9, alt: "Suiveur" },
  ];

  return (
    <>
    <Acceuil Name="Line-Follower" backgroundImage={Image}/>
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
    <div className="h-fit mb-6">
        <p className="text-justify text-xl md:mb-5 mb-9 font-sans">The <span className="font-bold">Line-Follower </span> challenge takes its inspiration from the iconic Pac-Man game. Robots in this competition are designed to follow a predefined path, much like how Pac-Man moves through mazes while avoiding ghosts. The challenge emphasizes sensor accuracy and autonomous control, requiring robots to precisely follow lines, corners, and avoid obstacles along the path. This test of responsiveness and precision challenges competitors to fine-tune their robots programming to efficiently complete the course without deviating from the path.</p>
        <div className="flex justify-center items-center">
          <Link to="https://docs.google.com/forms/d/e/1FAIpQLSfTgKJoWHDvxjwCg74jM6pw2Jp7HPJK8fJgiek6VaadNNrz6A/viewform">
          <button className="mr-2 text-white flex justify-center items-center rounded-lg bg-purple-500 hover:bg-purple-950 px-4 py-2 h-11 font-semibold hover:delay-150">subscribe</button>
          </Link>
          <Link to="https://drive.google.com/file/d/1FIwEC6LImgP8UJnNHk1WCUszhqPbAxV4/view">
          <button className="text-white flex justify-center items-center rounded-lg  px-4 py-2 h-11 w-48 font font-semibold  bg-purple-500 hover:bg-purple-950  hover:delay-150">Project Specifications</button>
          </Link>
        </div>
      </div>
      <div className="mb-12 flex items-center justify-center gap-3">
        <h2 className="text-center text-2xl md:text-4xl font-extrabold">Line-Follower Challenge</h2>
      </div>
      <div className="grid mx-auto mt-10 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Suiveurs.map((chapter, index) => (
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

export default Suiveurs;
