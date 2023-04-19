import { FC, ReactNode } from "react";
import React from "react";
import Layout from "./Layout";
import { Link } from "gatsby";
import { doclink } from "../utils/constant";
import NextPrev from "../components/NextPrev";
import { Col, Row } from "tuix-design";

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
          <Row gap={5}>
            <Col flex="100%">
              <div className="overflow-y-scroll h-[calc(100vh-150px)] p-3">
                {children}
                <Row justify="space-between">
                  <Col span={8}>
                    <>{prev && <NextPrev title={prev} left />}</>
                  </Col>
                  <Col span={8}>
                    <>{next && <NextPrev title={next} />}</>
                  </Col>
                </Row>
              </div>
            </Col>
            <>
              {tag && (
                <Col span={5}>
                  <>
                    {tag?.map((t, i) => (
                      <Link
                        key={i}
                        to={`#${t.toLowerCase().replaceAll(" ", "-")}`}
                        className={`pl-3 py-1 ${
                          window.location.hash ===
                            `#${t.toLowerCase().replaceAll(" ", "-")}` &&
                          "text-purple"
                        }`}
                      >
                        {t}
                      </Link>
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
