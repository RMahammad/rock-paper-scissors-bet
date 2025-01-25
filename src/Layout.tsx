import React from "react";
import Header from "./components/shared/header/Header";

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <div>
      <div>
        <Header />
      </div>

      <div>{children}</div>
    </div>
  );
};

export default Layout;
