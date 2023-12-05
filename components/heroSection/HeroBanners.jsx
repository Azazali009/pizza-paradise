"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Banner from "./Banner";

const images = [
  {
    id: Math.random(),
    imageSrc: "/pizza.jpg",
    imageName: "pizza banner image third",
  },
  {
    id: Math.random(),
    imageSrc: "/pizza-2.jpg",
    imageName: "pizza banner image first",
  },
  {
    id: Math.random(),
    imageSrc: "/pizza-3.jpg",
    imageName: "pizza banner image second",
  },
];
const HeroBanner = () => {
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
        {images.map((image) => (
          <Banner key={image.id} image={image} />
        ))}
      </Carousel>
    </div>
  );
};

export default HeroBanner;
