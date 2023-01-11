import Banner from "./bannerMain/BannerMain";
import BannerProd from "./bannerProd/BannerProd";

const Main = () => {
  return (
    <>
      <Banner />
      <BannerProd id="001" nombre="The Parka" />
      <BannerProd id="002" nombre="The Canoe" pos="invert" />
      <BannerProd id="003" nombre="The Mukluk" />
      <BannerProd id="004" nombre="The Group of 7" pos="invert" />
    </>
  );
};

export default Main;
