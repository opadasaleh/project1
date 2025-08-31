import Image from "next/image";
import Navbar from "../../components/Navbar";
import Showform from "../../components/Showform";
export default function Home() {
  return (
    <main className="min-h-screen bg-[url(/sand-photo.jpg)] bg-cover">
      <Navbar />
      <section>
        <div className="p-14 ">
          {/* <Showform /> */}
        </div>
      </section>
      <div className="text-7xl font-[tangerine] pt-5 pb-7 fill-lime-500 flex justify-between
       space-x-4 text-[#ffffff] break-all md:break-all">
        
        <p className=" m-13  ">
          Breathe in the desert’s quiet grace.<br />
          Let beauty begin with a single spark.<br />
          <strong>SYRO</strong> — where dreams take form. 
        </p>
        
      </div>
      
      

         
    </main>
  );
}
