import { useContext, useEffect, useState } from "react";
import "../Products/Products.scss";
import { DataContext } from "../../../context/dataContext";
import ProductInformation from "./ProductInformation/ProductInformation";
import { useParams } from "react-router-dom";
import DescriptionProduct from "./DescriptionProduct/DescriptionProduct";
import ListProduct from "../../../components/Product/ListProduct/ListProduct";

const Products = () => {
  const { productVegistData } = useContext(DataContext);

  const [idProduct, setIdProduct] = useState();

  const param = useParams();

  const findProduct = productVegistData.filter(
    (val) => val.id === Number(idProduct)
  );
  const cloneProductInfo = [...findProduct][0];

  const filterNewArrivals = productVegistData.filter(
    (val) => val.category === "fruits"
  );

  useEffect(() => {
    setIdProduct(param.productId);
  }, [param]);

  return (
    <div className="products-page">
      <div className="product-page-body container">
        {cloneProductInfo && (
          <ProductInformation
            imageProduct={cloneProductInfo.image}
            category={cloneProductInfo.category}
            productName={cloneProductInfo.name}
            price={cloneProductInfo.price}
            review={cloneProductInfo.review}
            sku={cloneProductInfo.sku}
          />
        )}

        <DescriptionProduct />
        <div className="layout-bottom related-products">
          <div className="main-title">
            <p className="mb-0">Related Products</p>
          </div>
          <ListProduct listProduct={filterNewArrivals} />
        </div>
      </div>
    </div>
  );
};

export default Products;
