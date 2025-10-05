import React from "react";
import { RotateLoader } from "react-spinners";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-420px)]">
      <RotateLoader></RotateLoader>
    </div>
  );
};

export default LoadingSpinner;
