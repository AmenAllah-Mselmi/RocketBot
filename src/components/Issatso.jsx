import image from '../assets/ieeeLogo.jpg'
import Challenges from "../components/Challenges"
const Issatso = () => {
  return (
      <>
      <section id='about' className="grid items-center justify-center gap-4 py-8 md:grid-cols-12 md:py-28 container mx-auto sm:mx-5 w-11/12 h-fit">
        <div className="col-span-6 mx-auto  ">
          <img 
            src={image}
            className="mx-auto h-56 rounded-2xl  lg:h-80  md:h-96 w-9/12" 
            alt="IEEE ISSATSO" 
            loading="lazy" 
          />
        </div>
        <div className="col-span-6 container mx-auto">
          <h1 className="mb-4 text-4xl font-bold tracking-tight lg:mb-7 lg:text-start lg:text-5xl lg:font-extrabold lg:leading-none">
            About IEEE ISSATSO Student Branch.
          </h1>
          <p className="mb-4 text-lg font-medium lg:mb-7 lg:text-start lg:text-xl lg:font-normal text-justify">
          The IEEE ISSAT Sousse Student Branch, approved on February 4, 2015, started with 17 members and has grown to around 170, aiming for 220 members. It focuses on diverse fields like Robotics, Automation, Energy, and Computer Science, with several chapters such as RAS, IAS, CS, and PES. The branch also supports women engineers through its WIE SAG affinity group. IEEE ISSAT Sousse strives to inspire innovation in the local community through publications, conferences, and educational activities, promoting technological excellence for the benefit of humanity.
          </p>
          <div>
            <a
              href="https://issatso.ieee.tn" 
              rel="noreferrer" 
              className="relative inline min-w-[120px] items-center justify-center rounded-full border-2 border-gray-600 px-6 py-2 text-center text-sm font-medium transition hover:border-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-400 dark:bg-black dark:hover:bg-white dark:hover:bg-opacity-20 dark:focus:ring-blue-800" 
              target="_blank"
            >
              <span>Learn more about ISSATSO</span>
            </a>
          </div>
        </div>
      </section>
      <Challenges/>
      </>
  );
}

export default Issatso;
