import React from "react";
import { FC } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Github from "../images/github.svg";

const NavBar: FC = (props) => {
  const logo = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
      }
    }
  `);

  const pathname = window.location.pathname
    .split("/")
    .filter((link) => link !== "")[0];

  return (
    <nav className="w-full shadow-sm shadow-black">
      <div className="max-w-[1200px] m-auto w-full flex justify-between items-center">
        <div className="w-[280px]">
          <Link to="/">
            <GatsbyImage
              image={logo.file.childImageSharp.gatsbyImageData}
              alt=""
            />
          </Link>
        </div>

        <div
          className={`flex items-center justify-between ${
            pathname === "doc" ? "grow" : "w-1/2"
          }`}
        >
          {pathname === "doc" && (
            <input
              className="outline-none bg-transparent border border-gray-400 px-2"
              placeholder="Search ctrl+k"
            />
          )}
          {pathname !== "doc" && (
            <>
              <Link to="/doc">Documentation</Link>
              <Link to="/showcase">showcase</Link>
              <Link to="/sponsor">sponsor</Link>
            </>
          )}

          <a href="https://github.com/tuix-design" target="_blank">
            <Github className="w-[24px]" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
