// import React, { useState } from "react";
// import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
// import AliceCarousel from "react-alice-carousel";
// import { Button } from "@mui/material";
// import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
// import { mens_kurta } from "../../../Data/Men/men_kurta";

// const HomeSectionCarosel = ({ data, sectionName }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const responsive = {
//     0: { items: 1 },
//     720: { items: 3 },
//     1024: { items: 5.5 },
//   };

//   const slidePrev = () => setActiveIndex(activeIndex - 1);
//   const slideNext = () => setActiveIndex(activeIndex + 1);

//   const syncActiveIndex = ({ item }) => setActiveIndex(item);
//   const items = data
//     .slice(0, 10)
//     .map((item) => <HomeSectionCard product={item} />);

//   return (
//     <div className=" border ">
//       <h2 variant="h6">{sectionName}</h2>
//       <div className="relative p-5">
//         <AliceCarousel
//           items={items}
//           disableButtonsControls
//           disableDotsControls
//           responsive={responsive}
//           onSlideChanged={syncActiveIndex}
//           activeIndex={activeIndex}
//         />

//         {activeIndex !== items.length - 5 && (
//           <Button
//             onClick={slideNext}
//             variant="contained"
//             sx={{
//               position: "absolute",
//               top: "8rem",
//               right: "0rem",
//               transform: "translate(60%) rotate(90deg)",
//               backgroundColor: "white",
//             }}
//             aria-label="next"
//             className="z-50 bg-white"
//           >
//             <KeyboardBackspaceIcon
//               sx={{ transform: "rotate(90deg)", color: "black" }}
//             />
//           </Button>
//         )}
//         {activeIndex !== 0 && (
//           <Button
//             onClick={slidePrev}
//             variant="contained"
//             sx={{
//               position: "absolute",
//               top: "8rem",
//               left: "0rem",
//               transform: "translate(-60%) rotate(90deg)",
//               backgroundColor: "white",
//             }}
//             aria-label="next"
//             className="z-50"
//           >
//             <KeyboardBackspaceIcon
//               sx={{ transform: "rotate(-90deg) ", color: "black" }}
//             />
//           </Button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HomeSectionCarosel;
//
import React, { useState } from "react";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import AliceCarousel from "react-alice-carousel";
import { Button } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { mens_kurta } from "../../../Data/Men/men_kurta";

const HomeSectionCarosel = ({ data, sectionName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [carouselKey, setCarouselKey] = useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev = () => {
    setActiveIndex((prevIndex) => prevIndex - 1);
    setCarouselKey((prevKey) => prevKey + 1);
  };

  const slideNext = () => {
    setActiveIndex((prevIndex) => prevIndex + 1);
    setCarouselKey((prevKey) => prevKey + 1);
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = data
    .slice(0, 10)
    .map((item) => <HomeSectionCard key={carouselKey} product={item} />);

  return (
    <div className="px-4 lg:px-8 border">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">
        {sectionName}
      </h2>
      <div className="relative p-5">
        <AliceCarousel
          key={carouselKey}
          items={items}
          disableButtonsControls
          disableDotsControls
          responsive={responsive}
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        {activeIndex !== items.length - 5 && (
          <Button
            bg-white
            variant="contained"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translate(60%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
            className="z-50"
            onClick={slideNext}
          >
            <KeyboardBackspaceIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
        {activeIndex !== 0 && (
          <Button
            bg-white
            variant="contained"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translate(-60%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
            className="z-50"
            onClick={slidePrev}
          >
            <KeyboardBackspaceIcon
              sx={{ transform: "rotate(-90deg) ", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
