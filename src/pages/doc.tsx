import React from "react";
import Layout from "../containers/Layout";

type Props = {};

const doc = (props: Props) => {
  return (
    <Layout>
      <div className="w-[280px]">side</div>
      <div className="w-3/6">main</div>
      <div className="w-1/6">side</div>
    </Layout>
  );
};

export default doc;
