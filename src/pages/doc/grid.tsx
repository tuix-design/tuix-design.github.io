import { FC } from "react";
import DocLayout from "../../containers/DocLayout";
import ApiTable from "../../containers/ApiTable";
import React from "react";
import { apiGrid, apiGridItem } from "../../utils/constant";

const grid: FC = () => {
  return (
    <DocLayout title="grid" prev="animation" next="flex">
      <ApiTable title="Grid props" data={apiGrid} />
      <ApiTable title="Grid Item props" data={apiGridItem} />
    </DocLayout>
  );
};

export default grid;
