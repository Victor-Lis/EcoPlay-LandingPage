import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Integrantes from "./components/Integrantes";
import Duvidas from "./components/Duvidas";
import Header from "./components/Header";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-[url('./../assets/background.svg')] bg-cover bg-repeat gap-y-40">
      <Header/>
      <Hero/>
      <Banner/>
      <Integrantes/>
      <Duvidas/>
    </main>
  );
}
