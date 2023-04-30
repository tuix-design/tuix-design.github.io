import { FC } from "react";
import DocLayout from "../../containers/DocLayout";
import React from "react";
import { Code, Tab } from "tuix-design";
import ApiTable from "../../containers/ApiTable";
import { apiTab } from "../../utils/constant";

const tab: FC = () => {
  return (
    <DocLayout title="Tab" tag={["usage", "api"]} prev="tooltip">
      <p id="usage">
        Tab use each child as tab content
        <br />
        provide tab title into header props as array of string
        <br /> header length and child have to be the same
      </p>
      <div className="py-4">
        <Tab
          header={["head 1", "head 2", "head 3"]}
          activeStyle={{ backgroundColor: "gray" }}
        >
          <div>content 1</div>
          <div>content 2</div>
          <div>content 3</div>
        </Tab>
      </div>
      <Code mode="dark">{`<Tab
header={["head 1", "head 2", "head 3"]}
activeStyle={{ backgroundColor: "gray" }}
>
<div>content 1</div>
<div>content 2</div>
<div>content 3</div>
</Tab>`}</Code>
      <ApiTable id="api" data={apiTab} />
    </DocLayout>
  );
};

export default tab;
