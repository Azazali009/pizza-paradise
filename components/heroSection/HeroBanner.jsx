// "use client";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
// import Image from "next/image";
// import FeatureProducts from "../feature product/FeatureProducts";

// const HeroBanner = () => {
//   return (
//     <div>
//       <Carousel
//         autoPlay
//         infiniteLoop
//         showIndicators={false}
//         showStatus={false}
//         showThumbs={false}
//         interval={3000}
//         width="100%"
//         dynamicHeight={true}
//         className="mx-auto "
//       >
//         <div className=" relative banner-image-box">
//           <Image
//             src="/pizza.jpg"
//             alt="pizza image"
//             width={700}
//             height={700}
//             className=" banner-image bg-gray-600  "
//           />
//           <button
//             title="add to cart"
//             className=" absolute bottom-6 capitalize left-6  bg-secondary font-extrabold hover:bg-primary duration-300 hover:text-black/[0.9] text-red-200 px-6 py-2 rounded-full "
//           >
//             buy now
//           </button>
//         </div>

//         <div className="banner-image-box">
//           <Image
//             src="/pizza-2.jpg"
//             alt="pizza image"
//             width={700}
//             height={700}
//             className=" banner-image bg-gray-300"
//           />
//           <button
//             title="add to cart"
//             className=" absolute bottom-6 capitalize left-6  bg-secondary font-extrabold hover:bg-primary duration-300 hover:text-black/[0.9] text-red-200 px-6 py-2 rounded-full "
//           >
//             buy now
//           </button>
//         </div>
//         <div className="banner-image-box">
//           <Image
//             src="/test.jpg"
//             alt="pizza image"
//             width={700}
//             height={700}
//             className="  banner-image bg-gray-300"
//           />
//           <button
//             title="add to cart"
//             className=" absolute bottom-6 capitalize left-6  bg-secondary font-extrabold hover:bg-primary duration-300 hover:text-black/[0.9] text-red-200 px-6 py-2 rounded-full "
//           >
//             buy now
//           </button>
//         </div>
//       </Carousel>
//       <FeatureProducts />
//     </div>
//   );
// };

// export default HeroBanner;
