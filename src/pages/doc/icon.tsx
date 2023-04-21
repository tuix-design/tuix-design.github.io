import React, { FC } from "react";
import DocLayout from "../../containers/DocLayout";
import IconItem from "../../containers/IconItem";
import { Icons } from "../../utils/constant";

interface IconProps {}

const icon: FC<IconProps> = () => {
  return (
    <DocLayout title="Icon">
      <div className="w-full flex flex-wrap gap-5">
        {Icons.map((icn: any) => (
          <IconItem name={icn} />
        ))}
      </div>
    </DocLayout>
  );
};

export default icon;
