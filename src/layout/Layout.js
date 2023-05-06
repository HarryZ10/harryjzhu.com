import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Cursor from "../components/Cursor/Cursor";
import NotionAlert from "../components/NotionAlert/NotionAlert";
import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
  const [isVisible, setIsVisible] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <Container>
      <Cursor />
      <NotionAlert isVisible={isVisible} />
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
