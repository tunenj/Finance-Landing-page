
import phone from "../assets/mockup.svg"
import img from "../assets/img2.png"
import play from "../assets/google-play.png"
import apple from "../assets/app-store.png"




const Hero = () => {
  return (
    <section id="hero" className="relative mt-4 flex h-fit max-w-7xl flex-col items-center gap-10 px-8 sm:gap-16
    md:my-0 md:h-[85vh] md:flex-row md:gap-0 lg:px-12 xl:m-auto xl:gap-0 xl:overflow-hidden">
      <div className="sm:w-full md:w-3/6">
        <h1 className="mx-auto mb-8 w-[20ch] text-center text-4xl font-semibold text-blue-900 sm:text-5xl md:mx-0 md:text-left">
          Get more value <br /> for your money.</h1>
        <p className="m-auto w-[34ch] text-center text-gray-500 md:m-0 md:text-left font-semibold">
         Take control of your finance Anytime.
         Discover the smart way to use your Money with 9Hedge!
        </p>
        <div className="flex gap-2 items-center justify-center md:justify-start mx-auto sm:w-auto">
        <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
          <img
            src={play}
            alt="Play Store Logo"
            className="w-[120px] sm:w-[150px] md:w-[150px]"
          />
        </a>
        <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
         <img
            src={apple}
            alt="Apple Store Logo"
            className="w-[120px] sm:w-[150px] md:w-[150px]"
          />
        </a>
      </div>

      </div>
      <div className="md:w-3/6 xl:mb-12 xl:overflow-hidden md:justify-normal lg:py-12">
        <img className="right-0 m-auto w-72 xl:absolute xl:left-60 xl:mt-32 xl:w-80" src={phone} alt="logo" />
        <img className="mt-3 mr-8 hidden rounded-2xl xl:flex" src={img} style={{width: "92%"}} alt="img" />
      </div>
    </section>
  );
};

export default Hero;
