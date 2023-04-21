import React, { FC, useState } from "react";
import { Input } from "tuix-design";
import DocLayout from "../../containers/DocLayout";
import IconItem from "../../containers/IconItem";
import { Icons } from "../../utils/constant";

interface IconProps {}

const icon: FC<IconProps> = () => {
  const [allIcons, setAllIcons] = useState<string[]>(Icons);
  return (
    <DocLayout title="Icon" next="layout" prev="button">
      <div className="border-b w-full p-4">
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
      <div className="w-full flex flex-wrap gap-5 p-5">
        {allIcons.map((icn: any, i) => (
          <IconItem key={i} name={icn} />
        ))}
      </div>
    </DocLayout>
  );
};

export default icon;
