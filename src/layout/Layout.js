import React from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Cursor from "../components/Cursor/Cursor";
import NotionAlert from "../components/NotionAlert/NotionAlert";
import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
  const [isVisible, setIsVisible] = React.useState(true);
  
  const [isWideEnough, setIsWideEnough] = React.useState(false); // Default to false

  React.useEffect(() => {
    setIsWideEnough(window.innerWidth >= 758);

    const handleResize = () => {
      setIsWideEnough(window.innerWidth >= 758);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);


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
      {isWideEnough && <Cursor />}
      <NotionAlert isVisible={isVisible} />
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  );
};
