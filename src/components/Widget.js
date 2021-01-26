import React, { useState } from "react";

import VerifyIcon from "./VerifyIcon";

const Widget = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        position: "fixed",
        left: 25,
        bottom: 35,
        boxShadow: "0px 0px 5px #ececec",
        borderRadius: 7.5,
        border: "2px solid #ececec",
        cursor: "pointer",
        overflow: "hidden",
        fontFamily: "sans-serif",
        padding: "0.3rem",
        transition: "transform 1.2s ease, opacity .6s ease",
        transform: `translateY(${clicked ? 250 : 0}px)`,
        opacity: clicked ? 0 : 1,
      }}
      onClick={() => setClicked(true)}
    >
      <div
        style={{
          display: "block",
          width: 65,
          height: 65,
          borderRadius: 7.5,
          backgroundImage:
            "url(https://cdn.imageengine.io/images/pine-watt-3_Xwxya43hE-unsplash.jpg?imgeng=w_auto,340)",
          backgroundSize: "cover",
        }}
      />
      <div
        style={{
          margin: ".25rem 1rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <strong style={{ color: "#222f3e" }}>David from United Stades</strong>
        <small style={{ color: "#576574", fontWeight: 100, opacity: 0.75 }}>
          Recently purchased something
        </small>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginTop: ".5rem",
          }}
        >
          <VerifyIcon />
          <small
            style={{ marginLeft: ".25rem", color: "#576574", fontSize: 10 }}
          >
            Verified by
          </small>
          <strong
            style={{ color: "#0abde3", fontSize: 10, marginLeft: ".25rem" }}
          >
            SolidProof
          </strong>
        </div>
      </div>
    </div>
  );
};

export default Widget;
