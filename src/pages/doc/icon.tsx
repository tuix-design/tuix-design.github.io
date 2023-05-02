import React, { FC, useState } from "react";
import { Code, Icon, Input, Space, Tab } from "tuix-design";
import ApiTable from "../../containers/ApiTable";
import DocLayout from "../../containers/DocLayout";
import IconItem from "../../containers/IconItem";
import { apiIcon, Icons } from "../../utils/constant";

interface IconProps {}

const icon: FC<IconProps> = () => {
  const [allIcons, setAllIcons] = useState<string[]>(Icons);
  return (
    <DocLayout
      title="Icon"
      next="style"
      prev="button"
      tag={["setup", "usage", "api"]}
    >
      <Tab
        header={["Usage", "Icons"]}
        style={{ padding: 10, cursor: "pointer" }}
        activeStyle={{ color: "#5D00FF", borderBottom: "2px solid #5D00FF" }}
      >
        {/* tab usage */}
        <div>
          <p id="setup" className="my-2 font-medium">
            Setup
          </p>
          <p className="my-3 text-sm text-gray-200">
            In order to use icon, import Icon component
          </p>
          <Code
            mode="dark"
            language="javascript"
          >{`import {Icon} from "tuix-design"`}</Code>
          <Space h={40} />
          <p id="usage" className="my-2 font-medium">
            Usage
          </p>
          <p className="my-3 text-sm text-gray-200">
            Ready to implement the icons,
          </p>
          <p className="mt-3 text-sm text-gray-200">
            you can have you disired size
          </p>
          <div className="flex items-end">
            <Icon name="Home" color="#fff" />
            <Icon name="Home" color="#fff" size={32} />
            <Icon name="Home" color="#fff" size={40} />
          </div>
          <Code mode="dark" language="javascript">{`<Icon name="Home"/>
<Icon name="Home" color="#fff" size={32} />
<Icon name="Home" color="#fff" size={40} />`}</Code>
          <p className="mt-3 text-sm text-gray-200">
            rotation is helpfull in some cases
          </p>
          <div className="flex items-end">
            <Icon name="Chevron" color="#fff" size={32} />
            <Icon name="Chevron" color="#fff" size={32} rotate={90} />
            <Icon name="Chevron" color="#fff" size={32} rotate={180} />
          </div>
          <Code
            mode="dark"
            language="javascript"
          >{`<Icon name="Chevron" color="#fff" size={32} />
<Icon name="Chevron" color="#fff" size={32} rotate={90} />
<Icon name="Chevron" color="#fff" size={32} rotate={180} />`}</Code>
          <p className="mt-3 text-sm text-gray-200">customizable color</p>
          <div className="flex items-end">
            <Icon name="Home" color="#fff" />
            <Icon name="Home" color="rgb(49,129,187)" size={32} />
            <Icon name="Home" color="purple" size={40} />
          </div>
          <Code mode="dark" language="javascript">{`<Icon name="Home"/>
<Icon name="Home" color="rgb(49,129,187)" size={32} />
<Icon name="Home" color="purple" size={40} />`}</Code>
          <Space h={40} />
          <ApiTable id="api" data={apiIcon} />
        </div>
        {/* tab icons */}
        <div>
          <div className="border-b w-full p-4 flex items-center">
            <Icon name="Search" color="#f2f2f2" />
            <Input
              placeholder="Search icon"
              bordered
              onChange={(value) => {
                setAllIcons([
                  ...Icons.filter((icn) => icn.toLowerCase().includes(value)),
                ]);
              }}
              onEmpty={() => setAllIcons(Icons)}
            />
          </div>
          <div id="icons" className="w-full flex flex-wrap gap-5 p-5">
            {allIcons.map((icn: any, i) => (
              <IconItem key={i} name={icn} />
            ))}
          </div>
        </div>
      </Tab>
    </DocLayout>
  );
};

export default icon;
