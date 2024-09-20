import play from "../assets/google-play.png"
import apple from "../assets/app-store.png"
import review1 from "../assets/review1.png"
import review2 from "../assets/review2.png"
import review3 from "../assets/review3.png"
import Carousel from "../common/Carousel";


const Reviews = () => {
    const slides = [

    {
      src: review2,
      text: '"Using 9Hedge has streamlined my financial transactions like never before. Highly recommended for anyone looking to simplify their finances!"',
      name: "Blessing Ukwo",
      state: "Kano"
    },
    {
      src: review1,
      text: '"9Hedge has been a game changer for my daily financial dealings. It allows for quick and secure money transfers, which saves me a lot of time and effort."',
      name: "John Paul",
      state: "Lagos"
    },
    {
      src: review3,
      text: '"9Hedge has helped me send and receive money with little to no complications. It´s what everyone who wants to be on top of their money needs!"',
      name: "Sarah John",
      state: "Port Harcourt"
    },
    
        
    ]
    return (
      <section
        id="reviews"
        className="flex max-w-7xl flex-col bg-blue-950 rounded-2xl items-center justify-between px-8 py-20 lg:m-auto lg:flex-row lg:px-12"
      >
        <article className="mb-10 flex flex-col items-center justify-center lg:w-1/2 lg:items-start lg:mb-0">
          <h2
            className="mb-4 max-w-[16ch] text-center text-4xl font-semibold text-white lg:w-full lg:text-left"
          >
            Join other thousands of people growing with 9Hedge
          </h2>
          <div className="flex gap-4 items-center justify-center lg:justify-start mx-auto sm:w-auto lg:mx-0">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={play}
                alt="Play Store Logo"
                className="w-[120px] sm:w-[150px] md:w-[150px] lg:w-[150px] xl:w-[150px]"
              />
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={apple}
                alt="Apple Store Logo"
                className="w-[120px] sm:w-[150px] md:w-[150px] lg:w-[150px] xl:w-[150px]"
              />
            </a>
          </div>
        </article>
        <Carousel slides={slides} />
      </section>
    );
    
}

export default Reviews