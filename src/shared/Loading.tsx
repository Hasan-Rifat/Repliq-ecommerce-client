import React from "react";

type LoadingProps = {};

const Loading: React.FC<LoadingProps> = () => {
  return (
    <div className="max-w-[1200px] mx-auto flex px-5 py-24">
      <div className="mx-auto w-[80vw] h-[20vh] flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400 mx-auto"></div>
      </div>
    </div>
  );
};
export default Loading;
