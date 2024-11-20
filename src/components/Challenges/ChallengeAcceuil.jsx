import logo from "../../assets/logosb.png"
const WelcomeSection = (props) => {
  return (
    <div id='acceuil' className="background w-full md:h-[100vh] h-[100svh] relative  mt-16" style={{
      backgroundImage: `linear-gradient(to bottom, rgba(0,48,141,0.6), rgba(0,44,63,0.6)), url(${props.backgroundImage})`,
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
            <br />
            <span className="text-secondary">{props.Name} Challenge</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
