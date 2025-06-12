
import AppDisplay from "@/components/appdisplay/appdisplay";
import ChurchSection from "@/components/churchsection/churchsection";
import Discover from "@/components/discover/discover";
import { ParallaxScrollSecondDemo } from "@/components/features/feature";
import Header from "@/components/header/header";
import Main from "@/components/main/main";

export default function Home() {
  return (
    <>

      <Header />
      <Main />
      <Discover />
      <ChurchSection />
      <AppDisplay />
      <ParallaxScrollSecondDemo />
    </>
  );
}
