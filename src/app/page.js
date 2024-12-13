import Image from "next/image";
import NavBar from "./NavBar";
import Logo from "./logo.png";
import Hero from "./hero";
import Fotter from "./fotter";
import From from "./from";
import Protfolio from "./protfolio";

export default function Home() {
  return (
    <div className="">
      <NavBar></NavBar>
      <Hero></Hero>
      <Protfolio></Protfolio>
      <From></From>
      <Fotter></Fotter>
    </div>
  );
}
