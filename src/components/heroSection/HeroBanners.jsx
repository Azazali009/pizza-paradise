"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Banner from "./Banner";
import { useBanner } from "./useBanner";
import ErrorMessage from "@/ui/ErrorMessage";

const HeroBanner = () => {
  const { banners, isLoading, isError } = useBanner();
  if (isLoading)
    return (
      <div className=" skeleton flex h-[85vh] w-full items-center justify-center text-xl capitalize">
        loading...
      </div>
    );
  if (isError) return <ErrorMessage>Error while loading banner</ErrorMessage>;
  return (
    <div className="mx-auto mt-4 max-w-[1200px] overflow-hidden rounded-2xl  px-4 pb-20">
      <Carousel
        autoPlay
        infiniteLoop
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
        interval={3000}
        width="100%"
        dynamicHeight={true}
        className="mx-auto rounded-2xl"
      >
        {banners?.map((banner) => (
          <Banner key={banner.id} {...banner} />
        ))}
      </Carousel>
    </div>
  );
};

export default HeroBanner;
