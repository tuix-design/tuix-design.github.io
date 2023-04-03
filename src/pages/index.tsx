import * as React from "react";
import { HeadFC, Link, PageProps } from "gatsby";
import NavBar from "../containers/NavBar";
import Sign from "../images/sign.svg";
import Github from "../images/github.svg";
const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <NavBar />
      <div className="w-full h-[calc(100vh-50px)] flex justify-center items-center">
        <div className="flex flex-col items-center">
          <div className="w-[50px]">
            <Sign />
          </div>
          <h1 className="text-[60px] text-center font-bold leading-tight">
            tuix design
          </h1>
          <h2 className="text-[50px] font-semibold">
            code less, <span className="text-purple">build fast</span>
          </h2>
          <p className="text-[#A8B4EF] my-5">
            front end kit, ready to use and customizable component.
          </p>
          <div className="flex justify-evenly w-full">
            <Link to="" className="bg-purple py-1 px-3">
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
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home</title>;
