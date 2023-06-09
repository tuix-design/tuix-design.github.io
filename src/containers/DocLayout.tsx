import { FC, ReactNode, useState } from "react";
import React from "react";
import Layout from "./Layout";
import { Link, navigate } from "gatsby";
import { sideMenu } from "../utils/constant";
import NextPrev from "../components/NextPrev";
import { Flex, Space } from "tuix-design";

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
  const browser = typeof window !== "undefined";
  return (
    <Layout>
      {/* navigation on mobile */}
      <div className="flex w-full py-5 lg:hidden">
        <select
          className="bg-transparent outline-none border w-full p-2"
          onChange={(e) => {
            navigate(`/doc/${e.target.value.toLowerCase()}`);
          }}
          defaultValue={
            browser ? window.location.pathname.replace(/\/doc\/|\//g, "") : ""
          }
        >
          {Object.values(sideMenu).map((menu) =>
            menu.map((doc, i) => (
              <option key={i} className="bg-black">
                {doc}
              </option>
            ))
          )}
        </select>
      </div>

      <div className="w-full !h-[calc(100vh-100px)] flex mt-5">
        {/* navigation desktop */}
        <div className="w-[200px] overflow-y-auto p-1 md:hidden">
          {Object.keys(sideMenu).map((title, i) => (
            <div key={i}>
              <p key={i} className="my-3 capitalize text-gray-500">
                {title}
              </p>
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
            </div>
          ))}
        </div>
        <div className="w-full h-full overflow-y-auto overflow-x-hidden px-5 md:px-2">
          <div>
            <span className="text-[2rem] font-medium">{title}</span>
          </div>
          <Flex gap={5}>
            {/* main content */}
            <Flex w={20} grow>
              <div className="w-full p-3 md:p-0">
                {children}
                <Space h={50} />
                <Flex justify="between">
                  <Flex w={10}>
                    <>{prev && <NextPrev title={prev} left />}</>
                  </Flex>
                  <Flex w={10}>
                    <>{next && <NextPrev title={next} />}</>
                  </Flex>
                </Flex>
                <Space h={50} />
              </div>
            </Flex>
            <>
              {/* tag navigation */}
              {
                <div className="md:hidden flex flex-col w-fit sticky top-0 h-fit">
                  {tag?.map((t, i) => (
                    <span
                      key={i}
                      className={`cursor-pointer min-w-[150px] pl-3 py-1 ${
                        hash === `${t.toLowerCase().replaceAll(" ", "-")}` &&
                        "text-purple"
                      } hover:underline`}
                      onClick={(e) => {
                        const id = t.toLowerCase().replaceAll(" ", "-");
                        setHash(id);
                        e.preventDefault();
                        if (browser) {
                          document
                            .getElementById(id)
                            ?.scrollIntoView({ behavior: "smooth" });
                          window.history.pushState(
                            {},
                            "",
                            `${window.location.pathname}#${id}`
                          );
                        }
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              }
            </>
          </Flex>
        </div>
      </div>
    </Layout>
  );
};

export default DocLayout;
