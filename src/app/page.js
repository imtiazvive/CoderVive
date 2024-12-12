import Image from "next/image";
import NavBar from "./NavBar";
import Logo from "./logo.png";
import Hero from "./hero";
import Fotter from "./footer";

export default function Home() {
  return (
    <div className="">
      <NavBar></NavBar>
      <Hero></Hero>
      <Fotter></Fotter>
    </div>
  );
}
