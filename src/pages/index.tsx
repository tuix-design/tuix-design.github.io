import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import Sign from "../images/sign.svg";
import Github from "../images/github.svg";
import Layout from "../containers/Layout";
const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <div className="w-full h-[calc(100vh-100px)] flex flex-col justify-center items-center">
        <div className="w-[50px]">
          <Sign />
        </div>
        <h1 className="text-[3em] text-center font-bold leading-tight">
          tuix design
        </h1>
        <h2 className="text-[2em] font-semibold">
          code less, <span className="text-purple">build fast</span>
        </h2>
        <p className="text-[#A8B4EF] md:text-center my-5">
          front end kit, ready to use and customizable component.
        </p>
        <div className="flex justify-evenly  w-1/2 sm:w-full">
          <Link to="/doc/" className="bg-purple py-1 px-3">
            get started
          </Link>
          <a href="https://github.com/tuix-design" target="_blank">
            <div className="flex items-center bg-orange py-1 px-3">
              <Github className="w-[20px] h-[30px] mr-2" />
              <span>github</span>
            </div>
          </a>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home</title>;
