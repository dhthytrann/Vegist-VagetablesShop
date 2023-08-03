import "../AdvertisingCollection/AdvertisingCollection.scss";

const AdvertisingCollection = () => {
  return (
    <div className="advertising-collection">
      <div className="container">
        <div className="row">
          <div className="left-a col-lg-5">
            <div className="banner-new-collection">
              <div className="img-banner">
                <img src="/images/Page Home/Advertising/img-01.png" alt="" />
              </div>
              <div className="content">
                <p className="collection-name mb-0">New Collection</p>
                <div className="discount">
                  <p className="up-to mb-0 mr-1">UP TO</p>
                  <p className="sale mb-0">35% OFF</p>
                </div>
                <div className="btn-shop-now">
                  <p className="mb-0">SHOP NOW</p>
                </div>
              </div>
            </div>
            <div className="banner-top-trending">
              <div className="img-banner">
                <img src="/images/Page Home/Advertising/img-02.png" alt="" />
              </div>
              <div className="content">
                <p className="collection-name mb-0">Top Trending</p>
                <div className="discount">
                  <p className="mb-0">NEW ACCESSORIES</p>
                </div>
                <div className="btn-shop-now">
                  <p className="mb-0">SHOP NOW</p>
                  <i class="fa-light fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="right-a col-lg-7">
            <div className="layout-banner-left">
              <div className="banner-sport">
                <div className="img-banner">
                  <img src="/images/Page Home/Advertising/img-03.png" alt="" />
                </div>
                <div className="content">
                  <p className="collection-name mb-0">DISCOVER</p>
                  <p className="category mb-0">Organic Products</p>
                  <div className="btn-shop-now">
                    <p className="mb-0">SHOP NOW</p>
                    <i class="fa-light fa-arrow-right"></i>
                  </div>
                </div>
              </div>
              <div className="banner-sport">
                <div className="img-banner">
                  <img src="/images/Page Home/Advertising/img-04.png" alt="" />
                </div>
                <div className="content">
                  <p className="collection-name mb-0">LIMITED</p>
                  <p className="category mb-0">Healthy Food</p>
                  <div className="btn-shop-now">
                    <p className="mb-0">SHOP NOW</p>
                    <i class="fa-light fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="layout-banner-right">
              <div className="banner">
                <div className="img-banner">
                  <img src="/images/Page Home/Advertising/img-05.png" alt="" />
                </div>
                <div className="content">
                  <p className="category mb-2">BEST PRICE ALWAYS</p>
                  <p className="collection-name mb-0">Our Delicious Food at Your Doorstep!</p>
                  {/* <div className="btn-shop-now">
                    <p className="mb-0">SHOP NOW</p>
                    <i class="fa-light fa-arrow-right"></i>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisingCollection;
