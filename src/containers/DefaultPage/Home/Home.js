import { useContext, useEffect, useState } from "react";
import Advertising01 from "../../../components/Advertising/Advertising01/Advertising01";
import "../Home/Home.scss";
import TopBanner from "./TopBanner/TopBanner";
import ListProduct from "../../../components/Product/ListProduct/ListProduct";
import Carousel from "react-elastic-carousel";
import ItemCategories from "../../../components/Home/ItemCategories/ItemCategories";
import AdvertisingShoses from "../../../components/Advertising/AdvertisingShoses/AdvertisingShoses";
import AdvertisingSummer from "../../../components/Advertising/AdvertisingSummer/AdvertisingSummer";
import { useDispatch } from "react-redux";
import { getAllProduct } from "../../../redux/slice/Product/productSlice";
import { Link } from "react-router-dom";
import { DataContext } from "../../../context/dataContext";
import AdvertisingCollection from "../../../components/Advertising/AdvertisingCollection/AdvertisingCollection";
import SubscribeBanner from "../../../components/Banner/SubscribeBanner/SubscribeBanner";
import AdvertisingDiscountJacket from "../../../components/Advertising/AdvertisingDiscountJacket/AdvertisingDiscountJacket";
import ItemInstagram from "../../../components/Home/ItemInstagram/ItemInstagram";

const Home = () => {
  const { filterProductData, setFilterProductData } = useContext(DataContext);

  const { productData } = useContext(DataContext);

  const { productVegistData } = useContext(DataContext);

  const breakPoints = [
    { width: 1, itemsToShow: 2 },
    { width: 550, itemsToShow: 3, itemsToScroll: 2 },
    { width: 768, itemsToShow: 4 },
    { width: 1100, itemsToShow: 5 },
  ];

  const breakPointsOurClient = [
    { width: 1, itemsToShow: 3 },
    { width: 550, itemsToShow: 4, itemsToScroll: 3 },
    { width: 768, itemsToShow: 5 },
    { width: 1200, itemsToShow: 6 },
  ];

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProduct());
  });

  // const listProduct = JSON.parse(localStorage.getItem("productData"));
  // const [productData, setProductData] = useState(listProduct);

  const filterOurFeatured = productData.filter((val) =>
    val.category.includes("Our Featured")
  );
  const filterBestSellers = productVegistData.filter(
    (val) => val.price % 2 === 0
  );
  const filterNewArrivals = productVegistData.filter(
    (val) => val.price % 2 != 0
  );
  const filterHotDeal = productVegistData.filter(
    (val) => val.category === "nuts" || val.category === "fruits"
  );

  return (
    <div className="home-page">
      <TopBanner />
      <div className="list-product-categories ">
        <div className="list-categories container">
          <div className="main-subject mb-4">
            <p className="main-title">OUR CATEGORIES</p>
            <p className="sub-title">
              Only the Best Seller Products Added Recently
            </p>
          </div>
          <Carousel
            breakPoints={breakPoints}
            showArrows={false}
            pagination={false}
          >
            <Link
              to={"/categories/Vegetables/0/400"}
              replace={true}
              onClick={() => {
                const filter = productVegistData.filter(
                  (val) => val.category === "vegetables"
                );
                setFilterProductData(filter);
              }}
            >
              <ItemCategories
                imgCategories={"/images/categories/01.webp"}
                categoriesName={"VEGETABLES"}
                numberProduct={12}
              />
            </Link>
            <Link
              to={"/categories/Fruits/0/400"}
              replace={true}
              onClick={() => {
                const filter = productVegistData.filter(
                  (val) => val.category === "fruits"
                );
                setFilterProductData(filter);
              }}
            >
              <ItemCategories
                imgCategories={"/images/categories/02.webp"}
                categoriesName={"FRUITS"}
                numberProduct={5}
              />
            </Link>
            <Link
              to={"/categories/Vegetables/0/400"}
              replace={true}
              onClick={() => {
                const filter = productVegistData.filter(
                  (val) => val.category === "vegetables"
                );
                setFilterProductData(filter);
              }}
            >
              <ItemCategories
                imgCategories={"/images/categories/04.webp"}
                categoriesName={"ORGANIC"}
                numberProduct={12}
              />
            </Link>
            <Link
              to={"/categories/Vegetables/0/400"}
              replace={true}
              onClick={() => {
                const filter = productVegistData.filter(
                  (val) => val.category === "vegetables"
                );
                setFilterProductData(filter);
              }}
            >
              <ItemCategories
                imgCategories={"/images/categories/03.webp"}
                categoriesName={"DRY GOODS"}
                numberProduct={25}
              />
            </Link>
            <Link
              to={"/categories/Nuts/0/400"}
              replace={true}
              onClick={() => {
                const filter = productVegistData.filter(
                  (val) => val.category === "nuts"
                );
                setFilterProductData(filter);
              }}
            >
              <ItemCategories
                imgCategories={"/images/categories/05.webp"}
                categoriesName={"NUTS"}
                numberProduct={23}
              />
            </Link>
          </Carousel>
        </div>
      </div>

      <div className="list-product-best-sellers">
        <div className="main-subject mb-3">
          <p className="main-title">BEST SELLERS</p>
          <p className="sub-title">
            Products in our store recorded top sale recently
          </p>
        </div>
        <ListProduct listProduct={filterBestSellers} />
      </div>
      <div className="advertising">
        <Advertising01 />
      </div>
      <div className="list-product-best-sellers">
        <div className="main-subject mb-3">
          <p className="main-title">New Arrivals</p>
          <p className="sub-title">
            Products in our store recorded top sale recently
          </p>
        </div>
        <ListProduct listProduct={filterNewArrivals} />
      </div>
      <div className="advertising">
        <AdvertisingCollection />
      </div>
      <div className="list-product-best-sellers">
        <div className="main-subject mb-3">
          <p className="main-title">BEST SELLERS</p>
          <p className="sub-title">
            Products in our store recorded top sale recently
          </p>
        </div>
        <ListProduct listProduct={filterBestSellers} />
      </div>
      <div className="advertising">
        <AdvertisingDiscountJacket />
      </div>
      <div className="list-product-best-sellers">
        <div className="main-subject mb-3">
          <p className="main-title">HOT DEAL</p>
          <p className="sub-title">
            Products in our store recorded top sale recently
          </p>
        </div>
        <ListProduct listProduct={filterHotDeal} />
      </div>

      <div className="blog list-product-our-featured">
        <div className="main-subject mb-4">
          <p className="main-title">INSTAGRAM SHOP</p>
          <p className="sub-title">
            Products in our store recorded top sale recently
          </p>
        </div>
        <div className="list-news container">
          <Carousel
            breakPoints={breakPoints}
            showArrows={false}
            pagination={false}
            itemPadding={[0, 5]}
          >
            <ItemInstagram
              image1={"/images/Instagram/img-01.webp"}
              image2={"/images/Instagram/img-06.webp"}
            />
            <ItemInstagram
              image1={"/images/Instagram/img-02.webp"}
              image2={"/images/Instagram/img-07.webp"}
            />
            <ItemInstagram
              image1={"/images/Instagram/img-03.webp"}
              image2={"/images/Instagram/img-08.webp"}
            />
            <ItemInstagram
              image1={"/images/Instagram/img-04.webp"}
              image2={"/images/Instagram/img-09.webp"}
            />
            <ItemInstagram
              image1={"/images/Instagram/img-05.webp"}
              image2={"/images/Instagram/img-10.webp"}
            />
          </Carousel>
        </div>
      </div>

      <div className="our-client list-product-our-featured">
        <div className="list-our-client container">
          <Carousel
            // loop
            // enableAutoPlay
            // autoPlaySpeed={1000}
            breakPoints={breakPointsOurClient}
            showArrows={false}
            pagination={false}
          >
            <div className="item">
              <div className="img-banner">
                <img src="/images/Page Home/Trade Mark/img-01.png " alt="" />
              </div>
            </div>
            <div className="item">
              <div className="img-banner">
                <img src="/images/Page Home/Trade Mark/img-02.png " alt="" />
              </div>
            </div>
            <div className="item">
              <div className="img-banner">
                <img src="/images/Page Home/Trade Mark/img-03.png " alt="" />
              </div>
            </div>
            <div className="item">
              <div className="img-banner">
                <img src="/images/Page Home/Trade Mark/img-04.png " alt="" />
              </div>
            </div>
            <div className="item">
              <div className="img-banner">
                <img src="/images/Page Home/Trade Mark/img-05.png " alt="" />
              </div>
            </div>
            <div className="item">
              <div className="img-banner">
                <img src="/images/Page Home/Trade Mark/img-06.png " alt="" />
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Home;
