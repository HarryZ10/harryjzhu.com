import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import { P5ComponentWrapper } from "./P5SkeletalCircleStyles";

const Sketch = p5 => {
  let angle;

  p5.setup = () => {
    let canvasH = 230;
    let canvasW = 400;
    p5.rectMode(p5.CENTER);
    p5.createCanvas(canvasW, canvasH, "transparent");
    angle = p5.PI / 4;
    p5.stroke(190, 190, 190);
  }

  p5.draw = () => {
    p5.clear();
    p5.translate(p5.width - 260, p5.height);
    branch(100, 2.4);
    angle = p5.map(p5.cos(p5.frameCount * 0.02199), -2, 2, p5.PI / 2, p5.PI / 16);
  }

  function branch(len, size) {
    p5.strokeWeight(size); // Set the stroke weight based on the branch size
    p5.line(0, 0, 0, -len);
    p5.translate(0, -len);
    if (len > 4) {
      p5.push();
      p5.rotate(angle);
      branch(len * 0.582, size); // Recursively call branch with a smaller size
      p5.pop();
      p5.push();
      p5.rotate(-angle);
      branch(len * 0.582, size)
      p5.pop();
    }
  }
};


const SkeletalCircle = () => (
  <P5ComponentWrapper id="circle-p5">
    <ReactP5Wrapper sketch={Sketch} />
  </P5ComponentWrapper>
);

export default SkeletalCircle;
