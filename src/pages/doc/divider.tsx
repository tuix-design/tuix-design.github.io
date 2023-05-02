import { FC } from "react";
import DocLayout from "../../containers/DocLayout";
import React from "react";
import ApiTable from "../../containers/ApiTable";
import { apiDivider } from "../../utils/constant";
import { Code, Divider } from "tuix-design";

const divider: FC = () => {
  return (
    <DocLayout
      title="divider"
      prev="space"
      next="tooltip"
      tag={["usage", "example", "api"]}
    >
      <p id="basic" className="py-5">
        Basic usage
      </p>
      <Code
        mode="dark"
        language="javascript"
      >{`import {Divider} from "tuix-design"`}</Code>
      <div className="py-5">
        <Divider>I am a divider</Divider>
        <Code
          mode="dark"
          language="javascript"
        >{`<Divider>I am a divider</Divider>`}</Code>
      </div>
      <p id="example" className="py-3">
        Example
      </p>
      <div className="py-5">
        <Divider textPos="left">left</Divider>
        <Code
          mode="dark"
          language="javascript"
        >{`<Divider textPos="left">I am a divider</Divider>`}</Code>
      </div>
      <div className="py-5">
        <Divider textPos="right">right</Divider>
        <Code
          mode="dark"
          language="javascript"
        >{`<Divider textPos="right">I am a divider</Divider>`}</Code>
      </div>
      <div className="py-5">
        <Divider color="blue" space={10} size={5}></Divider>
        <Code
          mode="dark"
          language="javascript"
        >{`<Divider color="blue" space={10} size={5}></Divider>`}</Code>
      </div>
      <ApiTable id="api" data={apiDivider} />
    </DocLayout>
  );
};

export default divider;
