import { Link } from "gatsby";
import React, { FC } from "react";

interface NextPrevProps {
  left?: boolean;
  title: string;
}

const NextPrev: FC<NextPrevProps> = ({ left = false, title }) => {
  return (
    <Link
      to={`/doc/${title}`}
      className={`border w-full  flex flex-col ${
        !left && "text-right"
      } main-radius px-2 py-1 cursor-pointer hover:text-purple hover:border-purple`}
    >
      <span className="text-[1.1rem]">{title}</span>
      <span className="text-[0.9rem]">{left ? "prev" : "next"}</span>
    </Link>
  );
};

export default NextPrev;
