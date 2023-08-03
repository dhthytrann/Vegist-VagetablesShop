import Carousel from "react-elastic-carousel";
import ItemProduct from "../ItemProduct/ItemProduct";
import "../ListProduct/ListProduct.scss";

const ListProduct = ({ listProduct }) => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 576, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  const rate = 3;
  const diverse = true;

  return (
    <div className="list-products list-products-render custom-list-product container">
      <Carousel
        itemPadding={[0, 10]}
        breakPoints={breakPoints}
        showArrows={false}
        pagination={false}
      >
        {listProduct &&
          listProduct.map((product) => (
            <ItemProduct
              key={product.id}
              idProduct={product.id}
              imgProduct={product?.image}
              productName={product?.name}
              categoryName={product?.category}
              price={product?.price}
              rate={product?.review}
              discount={"-27%"}
              featured={product?.featured}
              diverseProduct={false}
            />
          ))}
      </Carousel>
    </div>
  );
};

export default ListProduct;
