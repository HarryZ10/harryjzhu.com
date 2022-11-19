import { React, useState, useEffect } from "react";
import { Container, Text, Span } from "./NotionAlertStyles";
import ProgressBar from "./ProgressBar";
import { motion, AnimatePresence } from "framer-motion";

let interval = undefined;

const NotionAlert = ({ isVisible }) => {
  const [running, setRunning] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (running) {
      interval = setInterval(() => {
        setProgress((prev) => prev + 1);
      }, 50);
    } else {
      clearInterval(interval);
    }
  }, [running]);

  useEffect(() => {
    if (progress === 100) {
      setRunning(false);
      clearInterval(interval);
    }
  }, [progress]);

  // upon page load, start the progress bar
  useEffect(() => {
    setRunning(true);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
            exit="hidden"
            animate="visible"
          >
            <ProgressBar progress={progress}>
              <Container>
                <Text>
                  <p>
                    <Span>🚨 Work In Progress: </Span>Project specifications
                  </p>
                </Text>
              </Container>
            </ProgressBar>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NotionAlert;
