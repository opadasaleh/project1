import Image from "next/image";
import Navbar from "../../components/Navbar";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#101a2d] ">
      <Navbar />
      <section>
        <div className="p-14 ">
          <h1 className="text-gray-500 text-2xl font-extrabold border-b-4">Lets build your Dream</h1>

        </div>
      </section>
      

         
    </main>
  );
}
