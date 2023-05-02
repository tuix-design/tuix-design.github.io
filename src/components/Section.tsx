import { ReactNode } from "@mdx-js/react/lib";
import React, { useRef } from "react";
import { FC } from "react";
import { Code } from "tuix-design";

interface SectionProps {
  id?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  code?: string;
}

const Section: FC<SectionProps> = ({
  id,
  title,
  description,
  children,
  code,
}) => {
  return (
    <div className="py-4">
      <p id={id} className="">
        {title}
      </p>
      {description && <p>{description}</p>}
      {children && <div className="py-2">{children}</div>}
      <Code mode="dark" language="javascript">{`${code}`}</Code>
    </div>
  );
};

export default Section;
