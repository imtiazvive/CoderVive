import Image from "next/image";
import NavBar from "./NavBar";
import Logo from "./logo.png";
import Hero from "./hero";
import From from "./from";
import Protfolio from "./protfolio";
import ReviewCard from "./reviewcard";
import AskSec from "./asksec";
import Footer from "./footerSec";



export default function Home() {


 
  return (
    <main >
      
      <Hero></Hero>
      <Protfolio></Protfolio>
      <ReviewCard></ReviewCard>
      <AskSec ></AskSec>
      <From ></From>
      <Footer/>
    </main>
  );
}
