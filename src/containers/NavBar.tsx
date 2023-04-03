import React from "react";
import { FC } from "react";
import { graphql, Link, PageProps, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Github from "../images/github.svg";

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
  return (
    <nav className="h-[50px] w-screen flex items-center">
      <div className="w-full flex justify-between items-center px-5">
        <GatsbyImage image={logo.file.childImageSharp.gatsbyImageData} alt="" />
        <div className="flex items-center justify-between w-1/2">
          <Link to="">Documentation</Link>
          <Link to="">showcase</Link>
          <Link to="">sponsor</Link>
          <a href="https://github.com/tuix-design" target="_blank">
            <Github className="w-[24px]" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
