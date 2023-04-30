import { FC } from "react";
import DocLayout from "../../containers/DocLayout";
import React from "react";
import { Code } from "tuix-design";

interface buttonProps {}

const button: FC = (props) => {
  return (
    <DocLayout title="button" tag={["basic", "icon button", "size", "api"]}>
      <p className="py-5">Basic usage</p>
      <Code
        mode="dark"
        language="javascript"
      >{`import {Button} from "tuix-design"`}</Code>
    </DocLayout>
  );
};

export default button;
