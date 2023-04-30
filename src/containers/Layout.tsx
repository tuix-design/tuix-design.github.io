import React, { FC, ReactNode } from "react";
import NavBar from "./NavBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="overflow-x-hidden">
      <NavBar />
      <div className="max-w-[1200px] m-auto px-5">{children}</div>
    </main>
  );
};

export default Layout;
