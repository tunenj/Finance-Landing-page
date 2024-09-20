import mtn from "../logo-wall/mtn.png"
import bedc from "../logo-wall/bedc.png"
import dstv from "../logo-wall/dstv.png"
import mobile from "../logo-wall/mobile.png"
import airtel from "../logo-wall/airtel.png"
import glo from "../logo-wall/glo.png"
import sunking from "../logo-wall/sunking.png"
import luminous from "../logo-wall/luminous.png"
import ikeja from "../logo-wall/ikeja.png"
import gotv from "../logo-wall/gotv.png"
import startime from "../logo-wall/startime.png"
import bet from "../assets/bet.png"
import LogoWall from "../common/LogoWall"

const Partners = () => {
  return (
    <section id="partners" className="mt-20 flex flex-col bg-gray-50 py-20">
        <article className="mb-10 w-full px-8 text-center lg:px-12">
            <h2 className="mb-4 text-4xl font-semibold text-gray-800">Transact seamlessly with...</h2>
            <p>
                Connect your other accounts to 9Hedge seamlessly. 9Hedge supports 
                 <br />
                 100+
                integrations with other payment platforms.
            </p>
        </article>
       <div className="xl:flex xl:justify-center">
        <LogoWall
          src1={mtn} 
          src2={bedc} 
          src3={dstv} 
          alt1="mtn logo"
          alt2="bedc logo" 
          alt3="dstv logo" 
        />
          <LogoWall 
          src1={mobile} 
          src2={airtel} 
          src3={glo} 
          alt1="mobile logo"
          alt2="airtel logo" 
          alt3="glo logo" 
        />
        </div>
        <div className="xl:flex xl:justify-center">
          <LogoWall 
          src1={sunking} 
          src2={luminous} 
          src3={ikeja} 
          alt1="sunking logo"
          alt2="luminous logo" 
          alt3="ikeja logo" 
        />
          <LogoWall 
          src1={gotv} 
          src2={startime} 
          src3={bet} 
          alt1="gotv logo"
          alt2="startime logo" 
          alt3="bet logo" 
        />
        </div>
    </section>
  )
}

export default Partners