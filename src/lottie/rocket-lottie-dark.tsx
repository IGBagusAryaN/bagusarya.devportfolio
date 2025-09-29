import Lottie from "lottie-react";
import animationData from "../../public/assets/json/rocket-dark.json";

const RocketDarkAnimation = () => {
  return (
    <div className=" md:mt-[-140px] md:ml-[-40px] absolute z-[-10]">
      <Lottie animationData={animationData} className="w-[348px] h-[348px]" />
    </div>
  );
};

export default RocketDarkAnimation;
