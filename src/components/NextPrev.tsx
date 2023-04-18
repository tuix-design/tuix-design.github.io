import React, { FC } from "react";

interface NextPrevProps {
  left?: boolean;
  title: string;
}

const NextPrev: FC<NextPrevProps> = ({ left = false, title }) => {
  return (
    <div
      className={`border border-gray-400 flex flex-col ${
        !left && "text-right"
      } main-radius min-w-[100px] px-2 py-1 cursor-pointer text-gray-400`}
    >
      <span className="text-[0.9rem]">{title}</span>
      <span className="text-[0.7rem]">{left ? "prev" : "next"}</span>
    </div>
  );
};

export default NextPrev;
