import React, { FC } from "react";
import DocLayout from "../../containers/DocLayout";
import { Code, Tab } from "tuix-design";

const Installation: FC = () => {
  const tag = ["stable version", "specific version", "build from source"];
  return (
    <DocLayout title="installation" next="button" tag={tag}>
      <p id="stable-version" className="my-5">
        tuix-design can be intalled via node packaga manager <br />
        Install the last version
      </p>
      <Tab header={["yarn", "npm"]} activeStyle={{ color: "#5D00FF" }}>
        <Code language="bash" mode="dark">{`yarn add tuix-design`}</Code>
        <Code language="bash" mode="dark">{`npm install tuix-design`}</Code>
      </Tab>

      <p id="spacific-version" className="my-5">
        Install spacific version version
      </p>
      <Tab header={["yarn", "npm"]} activeStyle={{ color: "#5D00FF" }}>
        <Code language="bash" mode="dark">{`yarn add tuix-design@0.0.1`}</Code>
        <Code
          language="bash"
          mode="dark"
        >{`npm install tuix-design@0.0.1`}</Code>
      </Tab>

      <p id="build-from-source" className="my-5">
        Build from source
      </p>
      <Tab header={["https", "ssh"]} activeStyle={{ color: "#5D00FF" }}>
        <Code
          language="bash"
          mode="dark"
        >{`git clone https://github.com/tuix-design/component.git`}</Code>
        <Code
          language="bash"
          mode="dark"
        >{`git clone git@github.com:tuix-design/component.git`}</Code>
      </Tab>
      <p className="my-5">Now, installations are done. ready to move!</p>
    </DocLayout>
  );
};

export default Installation;
