import Lottie from "lottie-react";
import animationData from "../../../public/rocket-dark.json";

const RocketDarkAnimation = () => {
  return (
    <div className=" md:mt-[-140px] md:ml-[-40px] absolute z-[-10]">
      <Lottie animationData={animationData} className="w-96 h-96" />
    </div>
  );
};

export default RocketDarkAnimation;
