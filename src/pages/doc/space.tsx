import { FC } from "react";
import DocLayout from "../../containers/DocLayout";
import React from "react";
import ApiTable from "../../containers/ApiTable";

const space: FC = () => {
  return (
    <DocLayout title="space">
      <ApiTable />
    </DocLayout>
  );
};

export default space;
