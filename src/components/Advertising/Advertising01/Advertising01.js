import "../Advertising01/Advertising01.scss";
import Carousel from "react-elastic-carousel";

const Advertising01 = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  return (
    <div class="collection-banner slider-collection-banner owl-carousel owl-theme">
      <Carousel breakPoints={breakPoints} pagination={false} showArrows={false}>
        <div className="item-content-bottom mr-0">
          <div className="img-banner">
            <img src="/images/advertising01/img-01.jpg" alt="" />
          </div>
          <div className="content">
            <h5 className="mb-1">BEST SELLERS</h5>
            <p className="mb-0">23 PRODUCTS</p>
            <div className="btn-shop-now mt-1">
              <p className="mb-0">SHOP NOW</p>
            </div>
          </div>
        </div>
        <div className="item-content-middle  mr-0">
          <div className="img-banner">
            <img src="/images/advertising01/img-02.jpg" alt="" />
          </div>
          <div className="content">
            <h5 className="mb-2 text-white">New Arrivals</h5>
            <h1 className="mb-3">Organic Fruit</h1>
            <h6 className=" text-white">Top 5 trends from Riode</h6>
          </div>
          <div className="btn-shop-now mt-3">
            <p className="mb-0 mr-2">SHOP NOW</p>
            <i class="fa-light fa-arrow-right"></i>
          </div>
        </div>
        <div className="item-content-bottom mr-0">
          <div className="img-banner">
            <img src="/images/advertising01/img-03.png" alt="" />
          </div>
          <div className="content">
            <h5 className="mb-1">DEAL OFF THE DAY</h5>
            <p className="mb-0">4 PRODUCTS</p>
            <div className="btn-shop-now mt-1">
              <p className="mb-0">SHOP NOW</p>
            </div>
          </div>
        </div>
        <div className="item-content-middle tu">
          <div className="img-banner">
            <img
              className="blur-img"
              src="/images/advertising01/img-04.jpg"
              alt=""
            />
          </div>
          <div className="content">
            <h5 className="mb-2 ">Best of food</h5>
            <h1 className="mb-3">Healthy Food</h1>
            <h6 className="text-white">Top 5 trends from Riode</h6>
          </div>
          <div className="btn-shop-now mt-3">
            <p className="mb-0 mr-2">SHOP NOW</p>
            <i class="fa-light fa-arrow-right"></i>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Advertising01;
