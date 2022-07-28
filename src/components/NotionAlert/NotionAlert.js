import Link from "next/link";
import { Button } from "@mui/material";
import React from "react";
import { Container, Text } from "./NotionAlertStyles";
import { motion } from "framer-motion";

// export default NotionAlert;

const NotionAlert = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      <Container>
        <Button
          variant="contained"
          href="https://iam.harryjzhu.com"
          target="_blank"
          style={{ fontSize: "1.5rem", margin: "0 auto" }}
        >
          Check out my Notion page!
        </Button>
      </Container>
    </motion.div>
  );
};

export default NotionAlert;
