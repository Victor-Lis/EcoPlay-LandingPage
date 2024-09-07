import Hero from "./components/Hero";
import Banner from "./components/Banner";
import Integrantes from "./components/Integrantes";
import Duvidas from "./components/Duvidas";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-[url('./../assets/background.svg')] bg-cover bg-repeat gap-y-12 sm:gap-y-28">
      <Header/>
      <Hero/>
      <Banner/>
      <Integrantes/>
      <Duvidas/>
      <Footer/>
    </main>
  );
}
