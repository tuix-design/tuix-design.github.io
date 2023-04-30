import { FC } from "react";
import DocLayout from "../../containers/DocLayout";
import React from "react";
import { Code } from "tuix-design";
import ApiTable from "../../containers/ApiTable";
import { apiButton } from "../../utils/constant";

interface buttonProps {}

const button: FC = (props) => {
  return (
    <DocLayout
      title="button"
      tag={["basic", "icon button", "size", "api"]}
      next="icon"
      prev="installation"
    >
      <p id="basic" className="py-5">
        Basic usage
      </p>
      <Code
        mode="dark"
        language="javascript"
      >{`import {Button} from "tuix-design"`}</Code>

      <ApiTable data={apiButton} />
    </DocLayout>
  );
};

export default button;
