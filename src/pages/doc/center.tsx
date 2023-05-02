import { FC } from "react";
import DocLayout from "../../containers/DocLayout";
import React from "react";
import ApiTable from "../../containers/ApiTable";

const center: FC = () => {
  return (
    <DocLayout title="center">
      <ApiTable />
    </DocLayout>
  );
};

export default center;
