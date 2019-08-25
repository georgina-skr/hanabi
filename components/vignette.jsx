import React from "react";

export default function Vignette(props) {
  const { type, value, onClick, selected } = props;
  const style = {
    ...(selected && { transform: "scale(1.2)" })
  };

  return (
    <div
      className={[
        "outline-main-dark ba pointer flex items-center justify-center mr2 br-100 h2 w2 grow fw2",
        type === "color"
          ? `bg-${value} b--${value}`
          : "bg-main-dark b-gray-light",
        selected ? "bw2" : ""
      ].join(" ")}
      style={style}
      onClick={e => onClick({ type, value })}
    >
      {type === "number" && value}
    </div>
  );
}
