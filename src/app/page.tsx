import Image from "next/image";
import Navbar from "../../components/Navbar";
import Showform from "../../components/Showform";
export default function Home() {
  return (
    <main className="min-h-screen bg-[url(/sand-photo.jpg)] bg-cover">
      <Navbar />
      <section>
        <div className="p-14 ">
          <Showform />
        </div>
      </section>
      

         
    </main>
  );
}
