import React from "react";

const Widget = () => {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        position: "fixed",
        width: 150,
        height: 50,
        left: 50,
        bottom: 50,
        boxShadow: "0px 0px 5px #ececec",
        borderRadius: 15,
        cursor: "pointer",
      }}
    >
      Widget
    </div>
  );
};

export default Widget;
