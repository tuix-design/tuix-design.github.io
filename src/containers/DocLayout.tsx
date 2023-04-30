import { FC, ReactNode, useState } from "react";
import React from "react";
import Layout from "./Layout";
import { Link, navigate } from "gatsby";
import { doclink, sideMenu } from "../utils/constant";
import NextPrev from "../components/NextPrev";
import { Col, Row, Space } from "tuix-design";

interface DocLayoutProps {
  children: ReactNode;
  title?: string;
  next?: string;
  prev?: string;
  tag?: string[];
}
const DocLayout: FC<DocLayoutProps> = ({
  children,
  title,
  next,
  prev,
  tag,
}) => {
  const [hash, setHash] = useState<string>();
  return (
    <Layout>
      {/* navigation on mobile */}
      <div className="flex w-full py-5 lg:hidden">
        <select
          className="bg-transparent outline-none border w-full p-2"
          onChange={(e) => {
            navigate(`/doc/${e.target.value.toLowerCase()}`);
          }}
          defaultValue={window.location.pathname.replace(/\/doc\/|\//g, "")}
        >
          {doclink.map((doc, i) => (
            <option key={i} className="bg-black">
              {doc}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full h-full flex mt-5">
        {/* navigation desktop */}
        <div className="w-[200px] p-1 md:hidden">
          {Object.keys(sideMenu).map((title, i) => (
            <>
              <p className="my-3 capitalize text-gray-500">{title}</p>
              {sideMenu[title].map((doc: string, i: number) => (
                <Link
                  key={i}
                  activeClassName="bg-gray-900 border-l-2 border-l-purple"
                  to={`/doc/${doc.toLowerCase()}`}
                  className="px-3 py-2 block w-full hover:bg-gray-900 main-radius"
                >
                  {doc}
                </Link>
              ))}
            </>
          ))}
        </div>
        <div className="w-full h-full px-5 md:px-2">
          <div>
            <span className="text-[2rem] font-medium">{title}</span>
          </div>
          <Row gap={5}>
            {/* main content */}
            <Col span={24}>
              <div className="w-full p-3 md:p-0">
                {children}
                <Space h={50} />
                <Row justify="space-between">
                  <Col span={10}>
                    <>{prev && <NextPrev title={prev} left />}</>
                  </Col>
                  <Col span={10}>
                    <>{next && <NextPrev title={next} />}</>
                  </Col>
                </Row>
              </div>
            </Col>
            <>
              {/* tag navigation */}
              {
                <div className="md:hidden">
                  <Col span={5}>
                    <>
                      {tag?.map((t, i) => (
                        <span
                          key={i}
                          className={`cursor-pointer pl-3 py-1 ${
                            hash ===
                              `${t.toLowerCase().replaceAll(" ", "-")}` &&
                            "text-purple"
                          }`}
                          onClick={(e) => {
                            const id = t.toLowerCase().replaceAll(" ", "-");
                            setHash(id);
                            e.preventDefault();
                            document
                              .getElementById(id)
                              ?.scrollIntoView({ behavior: "smooth" });
                            window.history.pushState(
                              {},
                              "",
                              `${window.location.pathname}#${id}`
                            );
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </>
                  </Col>
                </div>
              }
            </>
          </Row>
        </div>
      </div>
    </Layout>
  );
};

export default DocLayout;
