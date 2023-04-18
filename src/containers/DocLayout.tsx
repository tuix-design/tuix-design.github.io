import { FC, ReactNode } from "react";
import React from "react";
import Layout from "./Layout";
import { Link } from "gatsby";
import { doclink } from "../utils/constant";

interface DocLayoutProps {
  children: ReactNode;
}
const DocLayout: FC<DocLayoutProps> = ({ children }) => {
  return (
    <Layout>
      <div className="w-full h-full flex mt-5">
        <div className="w-[200px] p-1">
          {doclink.map((doc) => (
            <Link
              activeClassName="bg-gray-900 text-purple"
              to={`/doc/${doc}`}
              className="px-3 py-2 block w-full hover:bg-gray-900"
            >
              {doc}
            </Link>
          ))}
        </div>
        <div className="grow p-5">{children}</div>
      </div>
    </Layout>
  );
};

export default DocLayout;
