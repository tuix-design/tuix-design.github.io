import { ReactNode } from "@mdx-js/react/lib";
import React from "react";
import { FC } from "react";
import { Code } from "tuix-design";

interface SectionProps {
  id?: string;
  title: string;
  children: ReactNode;
  preview?: boolean;
}

const Section: FC<SectionProps> = ({ id, title, children, preview }) => {
  console.log(children);
  return (
    <>
      <p id={id} className="py-5">
        {title}
      </p>
      {preview && <div>{children}</div>}
      <Code mode="dark" language="javascript">{`${""}`}</Code>
    </>
  );
};

export default Section;
