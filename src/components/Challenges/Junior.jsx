import J1 from "../../assets/junior/J1.jpg";
import J2 from "../../assets/junior/J2.jpg";
import J3 from "../../assets/junior/J3.jpg";
import J4 from "../../assets/junior/J4.jpg";
import J5 from "../../assets/junior/J5.jpg";
import J6 from "../../assets/junior/J11.jpg";
import J7 from "../../assets/junior/J7.jpg";
import J8 from "../../assets/junior/J8.jpg";
import J9 from "../../assets/junior/J9.jpg";
import Acceuil from './ChallengeAcceuil'
import Image from '../../assets/junior/acceuil.jpg'
import { Link } from "react-router-dom";
const Juniors = () => {
  const Juniors = [
    { src: J1, alt: "Junior" },
    { src: J2, alt: "Junior" },
    { src: J3, alt: "Junior" },
    { src: J4, alt: "Junior" },
    { src: J5, alt: "Junior" },
    { src: J6, alt: "Junior" },
    { src: J7, alt: "Junior" },
    { src: J8, alt: "Junior" },
    { src: J9, alt: "Junior" },
  ];

  return (
    
    <>
    <Acceuil Name="Junior" backgroundImage={Image}/>
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
    <div className="h-fit mb-6">
        <p className="text-justify text-xl md:mb-5 mb-9 font-sans">The <span className="font-bold">Junior</span> challenge, inspired by Mario, is targeted towards younger participants, focusing on basic robotics and coding principles. In this challenge, robots will navigate a course reminiscent of classic Mario levels, where they will have to overcome simple but fun obstacles like bridges, pipes, and enemies. The goal is to provide a playful, yet educational experience for juniors, emphasizing both creativity and foundational engineering skills. The Mario theme adds an element of familiarity and excitement, motivating participants to engage fully while learning new concepts.</p>
        <div className="flex justify-center items-center">
          <Link to="https://docs.google.com/forms/d/e/1FAIpQLScxJGcDb39MBdwTUehCmDc9pagW420eqAKq_z-yOj2JO8DdMA/viewform" >
          <button className="mr-2 text-white flex justify-center items-center rounded-lg bg-purple-500 hover:bg-purple-950 px-4 py-2 h-11 font-semibold hover:delay-150">subscribe</button>
          </Link>
          <Link to="https://drive.google.com/file/d/19Ik3GVQpIn3CFh6BmzOpYEAHwhiw8uSp/view">
          <button className="text-white flex justify-center items-center rounded-lg  px-4 py-2 h-11 w-48 font font-semibold  bg-purple-500 hover:bg-purple-950  hover:delay-150">Project Specifications</button>
          </Link>
        </div>
      </div>
      <div className="mb-12 flex items-center justify-center gap-3">
        <h2 className="text-center text-2xl md:text-4xl font-extrabold">Junior Challenge</h2>
      </div>
      <div className="grid mx-auto mt-10 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Juniors.map((chapter, index) => (
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

export default Juniors;
