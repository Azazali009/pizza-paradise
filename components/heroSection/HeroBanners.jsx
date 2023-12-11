"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Banner from "./Banner";
import { useBanner } from "./useBanner";

const HeroBanner = () => {
  const { banners, isLoading, isError } = useBanner();
  if (isLoading)
    return (
      <div className=" skeleton flex h-[90vh] w-full items-center justify-center text-xl capitalize">
        loading...
      </div>
    );
  return (
    <div className="pb-20">
      <Carousel
        autoPlay
        infiniteLoop
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        interval={3000}
        width="100%"
        dynamicHeight={true}
        className="mx-auto "
      >
        {banners?.map((banner) => (
          <Banner key={banner.id} {...banner} />
        ))}
      </Carousel>
    </div>
  );
};

export default HeroBanner;
