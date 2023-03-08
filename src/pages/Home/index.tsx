import BannerHome from "../../assets/banner-home.png";
import { Gallery } from "./components/Gallery";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <img src={BannerHome} alt="" />
      <Gallery />
    </HomeContainer>
  );
}
