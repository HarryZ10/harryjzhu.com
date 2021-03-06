import React from "react";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import NotionAlert from "../components/NotionAlert/NotionAlert";
import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
      <NotionAlert />
    </Container>
  );
};
