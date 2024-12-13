import Image from "next/image";
import NavBar from "./NavBar";
import Logo from "./logo.png";
import Hero from "./hero";
import Fotter from "./footer";
import From from "./from";
import Protfolio from "./protfolio";
import ReviewCard from "./reviewcard";
import Accordion from "./accordion";
import { Akshar } from "next/font/google";
import AskSec from "./asksec";

export default function Home() {



 
  return (
    <div className="">
      <NavBar></NavBar>
      <Hero></Hero>
      <Protfolio></Protfolio>
      <ReviewCard></ReviewCard>
      <AskSec></AskSec>

      <From></From>
      <Fotter></Fotter>
    </div>
  );
}
