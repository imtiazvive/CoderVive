import NavBar from "./NavBar";
import Hero from "./hero";
import Protfolio from "./protfolio";
import ReviewCard from "./reviewcard";
import AskSec from "./asksec";
import Footer from "./footerSec";
import ScrollComponent from "./ScrollComponent";




export default function Home() {


  return (
    <div data-scroll-container>
      
      <ScrollComponent />
      <NavBar />
      <Hero />
      <Protfolio />
      <ReviewCard />
      <AskSec />
      <Footer />
    </div>
  );
}
