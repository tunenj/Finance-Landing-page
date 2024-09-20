import logo from "../assets/app_frame.png"
import ShieldCheck from "../assets/check.png"
import coins from "../assets/coins.png"
import frame from "../assets/frames.png"

const Features = () => {
  return (
    <section 
    id="about" 
    className="flex max-w-7xl flex-col gap-10 px-8 pt-10 lg:px-12 xl:m-auto xl:pt-20 lg:w-screen"
    >
       <article className="m-auto h-[15vh] w-[30ch] text-center text-gradiebt md:m-0 md:w-full">
        <h2 className="mb-4 text-4xl font-semibold text-blue-900">Invest your money wisely</h2>
        <p className="text-gray-600 font-bold">Make your money work for you.
            Spend smarter, lower your bills, <br /> get the best transaction experience<br />and unlock credit to grow your business.
        </p>
       </article>

       <article className="flex w-full flex-col gap-8 overflow-hidden xl:h-96 xl:flex-row">
        <div className="flex flex-col bg-blue-950 rounded-2xl text-white px-4 sm:px-0 md:flex-row md:gap-8 xl:w-2/3 transition-all duration-500 ease-out hover:opacity-75 hover:translate-x-4">
            <div className="mt-10 flex flex-col justify-center gap-4 text-center sm:mx-10 md:mx-0 md:ml-10 md:w-1/2 md:text-left">
                <h2 className="m-auto text-center text-3xl font-semibold text-white sm:w-[18ch] md:m-0 md:text-left">Pay with 9Hedge, quick, simple and easy</h2>
                <p className="m-auto text-center text-white sm:w-[34ch] md:m-0 md:text-left">Paying your bills on 9Hedge has never been easier, 
                  whether you are paying for electricity or internet, 
                  9Hedge gets it done within seconds.
                </p>
            </div>

            <div className="m-auto mt-8 max-w-72 md:mx-10 md:w-1/2 lg:mx-0">
                <img src={logo} alt="9Hedge"/>
            </div>
        </div>
        <div className="flex flex-col justify-center gap-4 rounded-2xl bg-blue-950 p-10 xl:w-1/3 transition-all duration-500 ease-out hover:opacity-75 hover:translate-y-2">
        <div className="w-fit rounded-full bg-indigo-200 p-4">
          <img src={ShieldCheck} alt="" />
        </div>
        <h2 className="text-3xl font-semibold text-white">Bank level security</h2>
        <p className="text-white">Your money is 100% safe and secure on 9Hedge. No hassles, no
          glitches, get access to your money anytime.
        </p>
        </div>
        
       </article>

       <article className="flex w-full flex-col gap-8 xl:h-96 xl:flex-row">
       <div className="flex flex-col justify-center gap-4 rounded-2xl bg-orange-500 p-10 xl:w-1/3 transition-all duration-500 ease-out hover:opacity-75 hover:translate-x-2">
        <div className="w-fit rounded-full bg-orange-200 p-4">
          <img src={coins} alt="" />
        </div>
        <h2 className="text-3xl font-semibold text-white">Cost reduction</h2>
        <p className="text-white">9Hedge reduced maintenance and processing fees. No hidden fees.
        </p>
      </div>
        <div className="flex flex-col gap-8 overflow-hidden bg-blue-950 rounded-2xl text-white px-4 sm:px-0 md:flex-row md:gap-8 xl:w-2/3 
                        transition-all duration-500 ease-out hover:opacity-75 hover:translate-y-2">
            <div className="mt-10 flex flex-col justify-center gap-4 text-center sm:mx-10 md:mx-0 md:mt-0 md:ml-10 md:w-1/2 md:text-left">
                <h2 className="m-auto text-center text-3xl font-semibold text-white sm:w-[18ch] md:m-0 md:text-left">Send, receive and exchange money</h2>
                <p className="m-auto text-center text-white sm:w-[34ch] md:m-0 md:text-left">Paying your bills on 9Hedge has never been easier, 
                  Transfer, payments all work on 9Hedge. Get your alert message immediately after a completed transaction
                </p>
            </div>
            <div className="m-auto mt-8 max-w-72 md:mx-10 md:w-1/2 lg:mx-0">
                <img src={frame} alt="9Hedge"/>
            </div>
        </div>
        
       </article>
    </section>
  )
}

export default Features 
