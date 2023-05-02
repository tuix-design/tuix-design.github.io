import { navigate } from "gatsby";
import React from "react";
import DocLayout from "../../containers/DocLayout";

const Index = () => {
  typeof window !== "undefined" && navigate("/doc/installation");
  return (
    <DocLayout title="Overview" next="installation">
      doc
    </DocLayout>
  );
};

export default Index;
