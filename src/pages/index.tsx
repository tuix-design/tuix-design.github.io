import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import NavBar from "../containers/NavBar";
const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <NavBar />
      <div className="w-full h-screen flex justify-center items-center">
        <div>
          <h1>Front-end kit for React app</h1>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home</title>;
