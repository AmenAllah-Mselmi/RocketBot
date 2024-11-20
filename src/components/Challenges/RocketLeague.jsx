import J1 from "../../assets/rocketLeague/r1.jpg";
import J2 from "../../assets/rocketLeague/R2.jpg";
import J3 from "../../assets/rocketLeague/R3.jpg";
import J4 from "../../assets/rocketLeague/R4.jpg";
import J5 from "../../assets/rocketLeague/R5.jpg";
import J6 from "../../assets/rocketLeague/R6.jpg";
import J7 from "../../assets/rocketLeague/R7.jpg";
import J8 from "../../assets/rocketLeague/rocket.jpg";
import J9 from "../../assets/rocketLeague/rockett.jpg";
import Acceuil from './ChallengeAcceuil'
import Image from '../../assets/rocketLeague/acceuil.jpg'
import { Link } from "react-router-dom";
const RocketLeague = () => {
  const RocketLeagues = [
    { src: J1, alt: "RocketLeague" },
    { src: J2, alt: "RocketLeague" },
    { src: J3, alt: "RocketLeague" },
    { src: J4, alt: "RocketLeague" },
    { src: J5, alt: "RocketLeague" },
    { src: J6, alt: "RocketLeague" },
    { src: J7, alt: "RocketLeague" },
    { src: J8, alt: "RocketLeague" },
    { src: J9, alt: "RocketLeague" },
  ];

  return (
    <>
    <Acceuil Name="Rocket League" backgroundImage={Image}/>
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
      <div className="h-fit mb-6">
        <p className="text-justify text-xl md:mb-5 mb-9 font-sans">The <span className="font-bold mr-1">Rocket League</span> challenge mirrors the excitement of the popular video game, Rocket League. In this event, robots will be built to simulate soccer-like matches, but with a twist — the robots will act as both the player and the vehicle. Teams will design and program their robots to control the ball, navigate the field, and score goals, all while competing against other teams in real-time matches. The combination of speed, control, and strategy mirrors the chaotic fun of Rocket League, demanding quick reflexes and smart design choices from participants.</p>
        <div className="flex justify-center items-center">
          <Link to="https://docs.google.com/forms/d/e/1FAIpQLScnIsvTlpNA9DLHNHdiqEnA6VQv5Pj7MDciekv_xOPb7PvKfw/viewform">
          <button className="mr-2 text-white flex justify-center items-center rounded-lg bg-purple-500 hover:bg-purple-950 px-4 py-2 h-11 font-semibold hover:delay-150">subscribe</button>
          </Link>
          <Link to="https://drive.google.com/file/d/1gNhhk1Pj7dbr264xcmNQHx_YIInnOVkH/view">
          <button className="text-white flex justify-center items-center rounded-lg  px-4 py-2 h-11 w-48 font font-semibold  bg-purple-500 hover:bg-purple-950  hover:delay-150">Project Specifications</button>
          </Link>
          
        </div>
      </div>
      <div className="mb-12 flex items-center justify-center gap-3">
        <h2 className="text-center text-2xl md:text-4xl font-extrabold">RocketLeague Challenge</h2>
      </div>
      <div className="grid mx-auto mt-10 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {RocketLeagues.map((chapter, index) => (
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

export default RocketLeague;
