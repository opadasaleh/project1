import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Showform from "../../components/Showform";
import { gsap } from "gsap";

import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(ScrollToPlugin, SplitText, TextPlugin);

const categories = [
  { name: "Necklaces", image: "/Neckless.webp", link: "/shop" },
  { name: "Rings", image: "/Ring.webp", link: "/shop" },
  { name: "Earrings", image: "/Earrings.webp", link: "/shop" },
  { name: "Bracelets", image: "/Bracelets.webp", link: "/shop" },
];

export default function Home() {
  return (
    <main>
      <div className="relative min-h-screen pt-5">
        <Image
          src="/sand-photo.jpg"
          alt="hero background"
          fill
          className="object-cover -z-10"
          priority
        />
        <Navbar />

        <div className=" text-7xl font-serif flex flex-col text-primary-foreground break-all md:break-all justify-start  ml-50 pt-30 ">
          <span className="">Syro Where We build</span>

          <span>Dream</span>

          <span>Memory</span>
          <span>Goal</span>
          <span>Hope</span>
        </div>
      </div>
      <div className="justify-center flex p-10 text-4xl font-mono">
        <p>Shop by category</p>
      </div>
      <div className="  justify-center flex relative pb-10">
        {categories.map((category) => (
          <div className="pr-5 text-center font-semibold transition delay-100 duration-500 ease-in-out hover:-translate-y-3 hover:scale-95 group relative">
            <Link href={category.link} className="" key={category.name}>
              <div className="relative overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={250}
                  height={250}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-20 from-black from-25% to-transparent opacity-20 group-hover:opacity-60 transition-opacity duration-500"></div>
              </div>
              <p className="absolute left-1/5 transform -translate-x-1/2 bottom-6 text-lg text-white group-hover:-translate-y-4 transition-transform duration-500">
                {category.name}
              </p>
            </Link>
          </div>
        ))}
      </div>

      <div className="pt-10 flex">
        <p className="text-5xl flex justify-start ml-70">
          Jewels of the season
        </p>
      </div>
    </main>
  );
}
