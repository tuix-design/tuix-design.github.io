import { FC } from "react";
import DocLayout from "../../containers/DocLayout";
import React from "react";
import ApiTable from "../../containers/ApiTable";

const divider: FC = () => {
  return (
    <DocLayout title="divider">
      <ApiTable />
    </DocLayout>
  );
};

export default divider;
