import React, { FC } from "react";

interface NextPrevProps {
  left?: boolean;
  title: string;
}

const NextPrev: FC<NextPrevProps> = ({ left = false, title }) => {
  return (
    <div
      className={`border  flex flex-col ${
        !left && "text-right"
      } main-radius min-w-[150px] px-2 py-1 cursor-pointer hover:text-purple hover:border-purple`}
    >
      <span className="text-[0.9rem]">{title}</span>
      <span className="text-[0.7rem]">{left ? "prev" : "next"}</span>
    </div>
  );
};

export default NextPrev;
