import Lottie from "lottie-react";
import animationData from "../../../public/laptop.json";

const Animation = () => {
  return (
    <div className="mt-[-150px] ml-[550px] absolute z-[-10]">
      <Lottie animationData={animationData} className="w-96 h-80" />
    </div>
  );
};

export default Animation;
