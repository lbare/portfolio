import { useEffect, useState } from "react";
import aldergreens_1 from "../assets/images/alderGreens-1.png";
import aldergreens_2 from "../assets/images/alderGreens-2.png";
import aldergreens_3 from "../assets/images/alderGreens-3.png";
import aldergreens_4 from "../assets/images/alderGreens-4.png";
import aldergreens_5 from "../assets/images/alderGreens-5.png";
import aldergreens_6 from "../assets/images/alderGreens-6.png";
import aldergreens_7 from "../assets/images/alderGreens-7.png";
import baseballStats_1 from "../assets/images/baseballStats-1.png";
import baseballStats_2 from "../assets/images/baseballStats-2.png";
import baseballStats_3 from "../assets/images/baseballStats-3.png";
import baseballStats_4 from "../assets/images/baseballStats-4.png";
import baseballStats_5 from "../assets/images/baseballStats-5.png";
import messenger_1 from "../assets/images/messenger-1.png";
import photoTracker_1 from "../assets/images/photoTracker-1.jpeg";
import photoTracker_2 from "../assets/images/photoTracker-2.jpeg";
import uhub_1 from "../assets/images/uhub-1.png";
import uhub_2 from "../assets/images/uhub-2.png";
import uhub_3 from "../assets/images/uhub-3.png";
import uhub_4 from "../assets/images/uhub-4.png";
import uhub_5 from "../assets/images/uhub-5.png";
import weather_1 from "../assets/images/weather-1.png";
import weather_2 from "../assets/images/weather-2.png";

export const projectImages = [
  aldergreens_1,
  aldergreens_2,
  aldergreens_3,
  aldergreens_4,
  aldergreens_5,
  aldergreens_6,
  aldergreens_7,
  baseballStats_1,
  baseballStats_2,
  baseballStats_3,
  baseballStats_4,
  baseballStats_5,
  messenger_1,
  photoTracker_1,
  photoTracker_2,
  uhub_1,
  uhub_2,
  uhub_3,
  uhub_4,
  uhub_5,
  weather_1,
  weather_2,
];

const usePreloadImages = () => {
  const [imagesLoaded, setImagesLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (projectImages.length === 0) {
      setImagesLoaded(true);
      return;
    }

    let loadedCount = 0;
    const totalImages = projectImages.length;

    const onLoad = () => {
      loadedCount += 1;
      if (loadedCount === totalImages) {
        setImagesLoaded(true);
      }
    };

    projectImages.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = onLoad;
      img.onerror = onLoad;
    });
  }, []);

  return imagesLoaded;
};

export default usePreloadImages;
