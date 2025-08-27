import Image from "next/image";
import {  Navbar,   NavbarBrand,   NavbarContent,   NavbarItem,   NavbarMenuToggle,  NavbarMenu,  NavbarMenuItem} from "@heroui/navbar";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#101a2d] ">
      <header className="flex flex-row justify-end items-center bg-[#101a2d] rounded-tr-full rounded-bl-full
       p-4  border-2 border-[#DFC9A2] w-full px-10 max-w-[1200px] mx-auto shadow-2xl h-20 ">


        
        <h1 className="text-5xl md:text-6xl  text-[#DFC9A2] 
        pl-10 drop-shadow-lg uppercase font-thin pt-5 pb-7 ">syro </h1>
        
        <img src={'/snake.png'}  className="w-20 h-20 
        p-4  "/>
      </header>
      <section>
        <div className="p-14 ">
          <h1 className="text-gray-500 text-2xl font-extrabold border-b-4">Lets build your Dream</h1>

        </div>
      </section>
      

         
    </main>
  );
}
