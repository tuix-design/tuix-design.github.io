import React, { FC, ReactNode } from "react";
import NavBar from "./NavBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="max-w-[1200px] m-auto p-5">
      <NavBar />
      <div className="w-full h-[calc(100vh-50px)]">{children}</div>
    </main>
  );
};

export default Layout;
