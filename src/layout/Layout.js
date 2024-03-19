import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Cursor from "../components/Cursor/Cursor";
import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Cursor />
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </Container>
  );
};
