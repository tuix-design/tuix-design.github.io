import { FC, ReactNode, useState } from "react";
import React from "react";
import Layout from "./Layout";
import { Link, navigate } from "gatsby";
import { doclink } from "../utils/constant";
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
        <div className="w-[200px] p-1 md:hidden">
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
        <div className="grow w-full h-full px-5 md:w-screen md:overflow-x-auto">
          <div>
            <span className="text-[2rem] font-medium">{title}</span>
          </div>
          <Row gap={5}>
            <Col flex="100%">
              <div className="overflow-y-scroll h-[calc(100vh-150px)] md:h-[calc(100vh-230px)] p-3">
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
              {tag && window.innerWidth > 960 && (
                <Col span={5}>
                  <>
                    {tag?.map((t, i) => (
                      <span
                        key={i}
                        className={`cursor-pointer pl-3 py-1 ${
                          hash === `${t.toLowerCase().replaceAll(" ", "-")}` &&
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
              )}
            </>
          </Row>
        </div>
      </div>
    </Layout>
  );
};

export default DocLayout;
