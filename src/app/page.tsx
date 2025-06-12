
import AppDisplay from "@/components/appdisplay/appdisplay";
import ChurchSection from "@/components/churchsection/churchsection";
import Discover from "@/components/discover/discover";
import FAQ from "@/components/faq/faq";
import Footer from "@/components/footer/footer";
//import { ParallaxScrollSecondDemo } from "@/components/features/feature";
import Header from "@/components/header/header";
import Main from "@/components/main/main";
import SectionApp from "@/components/sectionapp/sectionapp";

export default function Home() {
  return (
    <>

      <Header />
      <Main />
      <Discover />
      <ChurchSection />
      <AppDisplay />
      {/* <ParallaxScrollSecondDemo /> */}
      <FAQ />
      <SectionApp />
      <Footer />
    </>
  );
}
