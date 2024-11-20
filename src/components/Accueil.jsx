import { Link } from 'react-router-dom';
import backgroundImage from '../assets/acceuil.jpg'; // Import the image
import logo from "../assets/logosb.png"
const WelcomeSection = () => {
  return (
    <div id='acceuil' className="background w-full md:h-[100vh] h-[100svh] relative  mt-16" style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0,48,141,0.6), rgba(0,44,63,0.6)), url(${backgroundImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <div className="flex flex-row justify-between items-center px-4 py-3 absolute w-full">

        
        <img src={logo} alt="IEEE Issatso SB" className="h-16 w-36" />
      </div>

      <div className="flex flex-col gap-8 items-center justify-center h-full" style={{ opacity: 1 }}>
        <div className="flex flex-col items-center text-5xl md:text-[64px] text-white font-bold text-center">
          <div>
            <span>Welcome To </span>
            <span className="text-secondary">RocketBot 2.0</span>
          </div>
          <div>
            <span className="text-light-blue text-5xl md:text-[64px]">quality over quantity</span>
          </div>
        </div>
        <Link 
          to="/About"
          className="px-12 py-2 rounded-3xl border border-light inline-flex items-center justify-center gap-2.5 text-2xl font-bold text-light hover:scale-110 transition-transform text-white hover:text-black hover:bg-white"
        >
          About US
        </Link>
      </div>
    </div>
  );
};

export default WelcomeSection;
