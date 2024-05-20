import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Integrantes from "./components/Integrantes";
import Duvidas from "./components/Duvidas";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-[url('./../assets/background.svg')] bg-cover bg-repeat py-20 gap-y-40">
      <Hero/>
      <Banner/>
      <Integrantes/>
      <Duvidas/>
    </main>
  );
}
