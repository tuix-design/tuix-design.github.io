import { FC, ReactNode } from "react";
import React from "react";
import Layout from "./Layout";
import { Link } from "gatsby";
import { doclink } from "../utils/constant";
import NextPrev from "../components/NextPrev";

interface DocLayoutProps {
  children: ReactNode;
  title?: string;
  next?: string;
  prev?: string;
}
const DocLayout: FC<DocLayoutProps> = ({ children, title, next, prev }) => {
  return (
    <Layout>
      <div className="w-full h-full flex mt-5">
        <div className="w-[200px] p-1">
          {doclink.map((doc, i) => (
            <Link
              key={i}
              activeClassName="bg-gray-900 text-purple"
              to={`/doc/${doc.toLowerCase()}`}
              className="px-3 py-2 block w-full hover:bg-gray-900"
            >
              {doc}
            </Link>
          ))}
        </div>
        <div className="grow w-full h-full px-5">
          <div>
            <span className="text-[2rem] font-medium">{title}</span>
          </div>
          <div className="overflow-y-scroll h-[calc(100%-100px)] p-2">
            <div className="w-full">
              {children}
              <div className="flex justify-between">
                {prev && <NextPrev title={prev} left />}
                {next && <NextPrev title={next} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DocLayout;
