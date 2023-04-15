import React from "react";
import Layout from "../containers/Layout";

type Props = {};

const doc = (props: Props) => {
  return (
    <Layout>
      <div className="w-full h-full flex">
        <div className="w-[280px] p-2">side</div>
        <div className="grow">main</div>
        <div className="w-[100px]">side</div>
      </div>
    </Layout>
  );
};

export default doc;
