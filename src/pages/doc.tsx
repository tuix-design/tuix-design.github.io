import React from "react";
import NavBar from "../containers/NavBar";

type Props = {};

const doc = (props: Props) => {
  return (
    <div className="max-w-[1200px] m-auto">
      <NavBar />
      <div className="w-full h-[calc(100vh-50px)] flex">
        <div className="w-[280px]">side</div>
        <div className="w-3/6">main</div>
        <div className="w-1/6">side</div>
      </div>
    </div>
  );
};

export default doc;
