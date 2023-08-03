import "../Loader/Loader.scss";
import {
  ColorRing,
  FallingLines,
  InfinitySpin,
  MutatingDots,
  Oval,
  Puff,
  Rings,
  ThreeCircles,
} from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader-component">
      <Puff
        height="80"
        width="80"
        radius={1}
        color="#4fa94d"
        ariaLabel="puff-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;

// #2aa3fb
