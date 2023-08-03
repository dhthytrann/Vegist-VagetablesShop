import { useContext, useEffect, useState } from "react";
import "../ItemProduct/ItemProduct.scss";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../../../context/dataContext";

const ItemProduct = ({
  idProduct,
  imgProduct,
  categoryName,
  productName,
  price,
  // rate,
  discount,
  featured,
  diverseProduct,
}) => {
  const [rate, setRate] = useState(0);
  const handleRate = () => {
    if (idProduct > 5) {
      if (price % 2 === 0) {
        setRate(3);
      } else {
        setRate(0);
      }
    } else {
      setRate(idProduct);
    }
  };

  const arrRate = [];
  for (let i = 0; i < rate; i++) {
    arrRate.push(arrRate[i]);
  }

  const arrStar = [1, 2, 3, 4, 5];
  arrStar.splice(0, rate);

  //Handle Feature

  const { cartData, setCartData } = useContext(DataContext);
  const { productVegistData } = useContext(DataContext);
  const { setCartTotalAmount } = useContext(DataContext);
  const { setOpenViewProduct } = useContext(DataContext);
  const { setIdViewProduct } = useContext(DataContext);

  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/products/${idProduct}`, { replace: false });
  };

  const inTotalCart = () => {
    const total = cartData.reduce((accumulator, object) => {
      const item = productVegistData.find((val) => val.id === object.idProduct);
      const price = item.price;

      return accumulator + object.amount * price;
    }, 0);
    setCartTotalAmount(total);
  };

  const handleAddToCard = (idProduct) => {
    const existInCart = cartData.findIndex(
      (val) => val.idProduct === idProduct
    );

    const findItem = productVegistData.filter((val) => val.id === idProduct);
    const cloneData = [...findItem];
    const itemInfo = cloneData[0];

    if (existInCart != -1) {
      const cloneCartData = [...cartData];
      cloneCartData[existInCart].amount = cloneCartData[existInCart].amount + 1;
      inTotalCart();
    } else {
      const newItem = {
        idCart: cartData.length + 1,
        idProduct: idProduct,
        // size: "XL",
        // color: "Brown",
        amount: 1,
      };

      setCartData((prevCartData) => [...prevCartData, newItem]);
    }
  };

  const handleQuickViewProduct = () => {
    setIdViewProduct(idProduct);
    setOpenViewProduct(true);
  };

  useEffect(() => {
    handleRate();
  }, []);

  return (
    <div className="item-product">
      <div className="img-product">
        <img
          className="img-01"
          src={imgProduct}
          alt=""
          onClick={() => {
            handleNavigate();
          }}
        />
      </div>
      <div className="content">
        <div className="product-name mb-1">
          <p className="mb-0">{productName}</p>
        </div>
        <div className="price mb-1 ">
          <p className="mb-0">${price}.00</p>
        </div>
        <div className="point">
          <div className="rate mr-2">
            {arrRate.map((item, idx) => (
              <i
                key={idx}
                className="fa-solid fa-star"
                style={{ color: "#d26e4b" }}
              ></i>
            ))}
            {arrStar.map((item, idx) => (
              <i
                key={idx}
                className="fa-duotone fa-star"
                style={{ color: "#a09e9e" }}
              ></i>
            ))}
          </div>
          <div className="reviews-number">
            <p className="mb-0">({rate} Reviews)</p>
          </div>
        </div>
        <div className="description">
          <p className="mb-0">
            Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
            luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus
            adipiscing.
          </p>
        </div>
      </div>
      <div className="badge-top">
        <div className="list-badge">
          {categoryName && (
            <div className="badge badge-featured">
              <p className="mb-0">
                {categoryName?.charAt(0).toUpperCase() + categoryName?.slice(1)}
              </p>
            </div>
          )}
          {price - 50 >= 0 && price - 50 <= 100 && (
            <div className="badge badge-discount">
              <p className="mb-0">-{price - 50}%</p>
            </div>
          )}
        </div>
      </div>
      <div className="badge-bottom">
        <div className="box-option">
          <div
            className="btn-add-to-cart btn-option mr-4"
            onClick={() => {
              handleAddToCard(idProduct);
            }}
          >
            <i class="fal fa-shopping-bag  mr-4"></i>
            <p className="mb-0">Add to cart</p>
          </div>
          <div className="like btn-option mr-4">
            <i class="fal fa-heart"></i>
            <p className="mb-0">Add to wishlist</p>
          </div>
          <div
            className="quick-view btn-option"
            onClick={() => {
              handleQuickViewProduct();
            }}
          >
            <i class="fal fa-search"></i>
            <p className="mb-0">Quickview</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemProduct;
