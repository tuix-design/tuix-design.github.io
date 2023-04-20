import { navigate } from "gatsby";
import React from "react";
import DocLayout from "../../containers/DocLayout";

type Props = {};

const Index = (props: Props) => {
  navigate("/doc/overview");
  return (
    <DocLayout title="Overview" next="installation">
      doc
    </DocLayout>
  );
};

export default Index;
