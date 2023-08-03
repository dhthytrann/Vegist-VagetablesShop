import { useContext, useState } from "react";
import "../SearchBar/SearchBar.scss";
import ItemSearchResult from "./ItemSearchResult/ItemSearchResult";
import { DataContext } from "../../../../../context/dataContext";

const SearchBar = () => {
  // const listProduct = JSON.parse(localStorage.getItem("productData"));
  const { productVegistData } = useContext(DataContext);
  const [searchResult, setSearchResult] = useState(productVegistData);
  const [key, setKey] = useState(false);

  // console.log(productData);

  //const [keyWord, setKeyWord] = useState();
  const handleSearch = (e) => {
    const key = e.target.value;
    if (key != null) {
      setKey(true);
    } else {
      setKey(false);
    }
    // setKeyWord(key);
    // console.log(key);

    const handleFilterProduct = productVegistData.filter((val) =>
      val.name.toLocaleLowerCase().includes(key.toLocaleLowerCase())
    );
    //const searchResult = [...handleFilterProduct];
    setSearchResult(handleFilterProduct);
  };

  // setSearchResult(handleFilterProduct);

  return (
    <div className="searchbar">
      <div className="btn-search">
        <i class="fa-regular fa-magnifying-glass"></i>
        <div className="search-box">
          <form action="" className="searchbox">
            <input
              type="text"
              className="search-input"
              placeholder="Type here to search..."
              onChange={(e) => handleSearch(e)}
            />
            <i class="fa-regular fa-magnifying-glass"></i>
          </form>
          {key && (
            <div className="border-box-result">
              <div className="box-result mt-1">
                {searchResult &&
                  searchResult.map((product) => (
                    <ItemSearchResult
                      key={product.id}
                      idProduct={product.id}
                      imgProduct={product?.image}
                      productName={product?.name}
                      price={product?.price}
                    />
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
