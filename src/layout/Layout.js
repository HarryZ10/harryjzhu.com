import React from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import NotionAlert from "../components/NotionAlert/NotionAlert";
import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <NotionAlert />
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
