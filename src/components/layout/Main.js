import { CContainer } from "@coreui/react";
import React from "react";
import Content from "./Content";
import Header from "./Header";
import Sidebar from "./Sidebar";

function Main() {
  return (
    <>
      <Header />
      <CContainer>
        <Sidebar />
        <Content />
      </CContainer>
    </>
  );
}

export default Main;
