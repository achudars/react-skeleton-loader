import "./skeleton.css";
import React from "react";

const Skeleton = ({
  width = "150px",
  height = "100%",
  widthRandomness = 0.25,
  heightRandomness = 0,
  borderRadius = "8px",
  color = "#EFF1F6",
  count = 1,
  animated = true,
}) => {
  const w = parseFloat(width);
  const h = parseFloat(height);
  const wm = width.toString().replace(/\d+/g, "");
  const hm = height.toString().replace(/\d+/g, "");

  const elements = [];

  for (let i = 0; i < count; i++) {
    const width = `${w - Math.random() * w * widthRandomness}${wm}`;
    const height = `${h - Math.random() * h * heightRandomness}${hm}`;
    elements.push(
      <span
        className={`react-skeleton-load ${animated ? "animated" : ""}`}
        key={i}
        style={{
          width,
          height,
          borderRadius,
          backgroundColor: color,
        }}
      >
        &zwnj;
      </span>
    );
    if (i !== count - 1) {
      elements.push(<br key={`br-${i}`} />);
    }
  }

  return <span>{elements}</span>;
};

export default Skeleton;
