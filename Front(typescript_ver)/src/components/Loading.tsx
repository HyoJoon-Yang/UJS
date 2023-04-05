import React from "react";

export default function Loading() {
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        height: "100%",
        top: "0",
        left: "0",
        background: "white",
        zIndex: "999",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden"
      }}
    >
      <h3 style={{ textAlign: "center" }}>Loading...</h3>
      <img src="img/spinner.gif" alt="loading..." width="60px" />
    </div>
  );
}

