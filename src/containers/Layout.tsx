import React, { FC, ReactNode } from "react";
import NavBar from "./NavBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="">
      <NavBar />
      {/* <div className="max-w-[1200px] m-auto h-[calc(100vh-50px)] px-5">
        {children}
      </div> */}
    </main>
  );
};

export default Layout;
