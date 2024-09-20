import hedge from "../assets/logo.png";
import play from "../assets/google-play.png"
import apple from "../assets/app-store.png"
import twitter from "../assets/icons8-twitterx.svg"
import facebook from "../logo-wall/icons8-facebook.svg"


const Footer = () => {
  return (
    <section className="bg-gray-500 mt-12">
        <div className="flex max-w-7xl flex-col px-8 py-12 text-gray-300 lg:px-12 xl:m-auto">
            <div className="flex flex-col justify-between gap-12 md:flex-row md:gap-0">
                <div>
                    <img 
                    className="mb-4 w-36" 
                    src={hedge} alt="hedge logo" 
                  />
                  <p>Start spending the smart way.</p>
                </div>
                <div className="flex gap-10">
                <div className="flex flex-col gap-2">
                  <p className="text-white">Product</p>
                  <a href="#about">Company</a>
                  <a href="#partners">Partner</a>
                  <a href="#services">Services</a>
                  <a href="#review">Reviews</a>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-white">Resources</p>
                  <a href="#">Blog</a>
                  <a href="#">Newsletter</a>
                  <a href="#">Help Centre</a>
                  <a href="#">Support</a>
                </div>
                </div>
                <div className="w-fit">
                   <h2>Get the app</h2>
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
            </div>
            <hr />
            <div className="mt-14 flex justify-between border-t-gray-700 pt10">
              <p className="w-[16ch] md:w-full">
                &copy; 2024 9Hedge. All rights reserved.
                </p>
                <div className="flex gap-6">
                  <a href="http://twitter.com" target="_blank">
                   <img src={twitter} alt="twitter logo" />
                  </a>
                  <a href="http://facebook.com" target="_blank">
                   <img src={facebook} alt="facebook logo" />
                  </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer