import React, { useRef, useState } from "react";
import { FC } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Github from "../images/github.svg";
import Search from "../components/Search";
import { Icon, Div, Animate } from "tuix-design";

const NavBar: FC = () => {
  const logo = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `);

  const pathname =
    typeof window !== "undefined" &&
    window.location.pathname.split("/").filter((link) => link !== "")[0];

  const drawerController = useRef<any>(null);
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <nav className="w-full shadow-md shadow-black bg-[#01041b] !sticky top-0 z-50">
      <div className=" max-w-[1200px] m-auto px-2 w-full flex justify-between items-center md:py-3">
        <div className="w-[280px]">
          <Link to="/">
            <GatsbyImage
              image={logo.file.childImageSharp.gatsbyImageData}
              alt=""
            />
          </Link>
        </div>

        <div
          className={`flex items-center justify-between md:justify-end ${
            pathname === "doc" ? "grow" : "w-1/2"
          }`}
        >
          {pathname === "doc" && <Search />}
          {pathname !== "doc" && (
            <>
              <div className="md:hidden w-full flex justify-evenly">
                <Link to="/doc">Documentation</Link>
                <a href="https://tojonir.github.io" target="_blank">
                  Author
                </a>
              </div>
              <div ref={drawerController} className="lg:hidden">
                <Icon name={isShow ? "Close" : "Menu"} color="#fff" size={32} />
              </div>
            </>
          )}

          <a
            className="md:hidden ml-10"
            href="https://github.com/tuix-design"
            target="_blank"
          >
            <Github className="w-[24px]" />
          </a>
        </div>
      </div>
      {/* drawer on mobile */}
      <div className="absolute top-[100%] ">
        <Animate
          ref={(node) => {
            const draw = drawerController.current;
            if (node && draw) {
              draw.onclick = () => {
                if (isShow) {
                  node.reverse();
                  setTimeout(() => setIsShow(false), 200);
                } else {
                  node.play();
                  setIsShow(true);
                }
              };
            }
          }}
          animate={["translate:-100%", "translate:0"]}
          option={{ duration: 300 }}
        >
          <Div
            className={`${
              isShow ? "flex" : "hidden"
            } flex-col bg-black h-screen`}
          >
            <Link className="p-4" to="/doc">
              Documentation
            </Link>
            <a className="p-4" href="https://tojonir.github.io">
              Author
            </a>
            <a className="p-4" href="https://github.com/tuix-design">
              Repository
            </a>
          </Div>
        </Animate>
      </div>
    </nav>
  );
};

export default NavBar;
