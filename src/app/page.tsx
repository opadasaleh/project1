import Image from "next/image";
import Navbar from "../../components/Navbar";
import Showform from "../../components/Showform";
import { gsap } from "gsap";

import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollToPlugin, SplitText, TextPlugin);
export default function Home() {
  return (
    <main >
      <div className="min-h-screen bg-[url(/sand-photo.jpg)] bg-cover pt-">
        <Navbar />

        <div className="dropping-texts text-7xl font-[tangerine] flex 
       text-[#ffffffc3] break-all md:break-all justify-start ml-50 pt-30 ">
          Syro Where We build
          {/* <div>Dream</div>
        <div>Memore</div>
        <div>Goal</div>
        <div>Hope</div> */}
        </div>
      </div>
      <div className="justify-center flex p-10 text-4xl font-mono">
        <p >Shop by category</p>
      </div>
      <div className="  justify-center flex relative pb-10">
        <div className=" pr-5 text-center font-semibold transition delay-100 duration-500 ease-in-out hover:-translate-y-1 hover:scale-90 ">
          <a href="/shop" className="">
            <img src={'/Neckless.webp'} width={250} />
            <p className="absolute px-4 text-lg text-white bottom-3">Neckless</p> </a>
        </div>
        <div className="pr-5 text-center font-semibold transition delay-100 duration-500 ease-in-out hover:-translate-y-1 hover:scale-90 ">
          <a href="/shop">
            <img src={'/Ring.webp'} width={250} /></a>
          <p className="absolute px-4 bottom-3 text-white">Rings</p>
        </div>
        <div className=" pr-5 text-center font-semibold transition delay-100 duration-500 ease-in-out hover:-translate-y-1 hover:scale-90 ">
          <a href="/shop"><img src={'/Earrings.webp'} width={250} /></a>
          <p className="absolute px-4 text-lg text-white bottom-3">Earrings</p>
        </div>
        <div className=" pr-5 text-center font-semibold transition delay-100 duration-500 ease-in-out hover:-translate-y-1 hover:scale-90 ">
          <a href="/shop"><img src={'/Bracelets.webp'} width={250} /></a>
          <p className="absolute px-4 text-lg text-white bottom-3">Bracelets</p>
        </div>
      </div>

      <div className="pt-10 flex">
        <p className="text-5xl flex justify-start ml-70">Jewels of the season</p>
      </div>

      diqMl8rQOxTQYIZo
      mongosh "mongodb+srv://cluster0.mmpg8f0.mongodb.net/" --apiVersion 1 --username kami --password diqMl8rQOxTQYIZo
    </main>
  );
}






