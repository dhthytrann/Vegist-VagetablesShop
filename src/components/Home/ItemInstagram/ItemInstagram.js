import "../ItemInstagram/ItemInstagram.scss";

const ItemInstagram = ({ image1, image2 }) => {
  return (
    <div className="item-instagram">
      <div className="list-img-insta">
        <div className="img-instagram">
          <img src={image1} alt="" />
          <i class="fa-brands fa-instagram"></i>
        </div>
        <div className="img-instagram">
          <img src={image2} alt="" />
          <i class="fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  );
};

export default ItemInstagram;
