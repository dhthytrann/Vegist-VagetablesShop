import { useState } from "react";
import ItemBanner from "../../../../components/Home/ItemBanner01/ItemBanner01";
import "../TopBanner/TopBanner.scss";
import videoBg from "../../../../assets/videos/video.mp4";
import ItemBanner01 from "../../../../components/Home/ItemBanner01/ItemBanner01";
import ItemBanner02 from "../../../../components/Home/ItemBanner02/ItemBanner02";
import ItemBanner03 from "../../../../components/Home/ItemBanner03/ItemBanner03";
import Carousel from "react-elastic-carousel";

const TopBanner = () => {
  const [isShow1, setIsShow1] = useState(true);
  const [isShow2, setIsShow2] = useState(false);
  const [isShow3, setIsShow3] = useState(false);

  return (
    <Carousel
      itemsToShow={1}
      showArrows={false}
      enableAutoPlay={true}
      enableSwipe={true}
      autoPlaySpeed={5000}
    >
      {/* {isShow1 && <ItemBanner01 />}
      {isShow2 && <ItemBanner02 />}
      {isShow3 && <ItemBanner03 />} */}
      <div className="top-banner">
        <ItemBanner01 />
      </div>
      <div className="top-banner">
        <ItemBanner02 />
      </div>
      <div className="top-banner">
        <ItemBanner03 />
      </div>
    </Carousel>
  );
};

export default TopBanner;

// enableAutoPlay={true} enableSwipe={true}
