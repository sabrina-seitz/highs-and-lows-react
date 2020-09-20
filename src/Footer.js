import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <a
        className="link-footer"
        href="https://github.com/sabrina-seitz/highs-and-lows-react"
        target="_blank"
        rel="noopener noreferrer"
      >
        Open-source code
      </a>{" "}
      by{" "}
      <a
        className="link-footer"
        href="https://www.linkedin.com/in/sabrina-seitz/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Sabrina Seitz
      </a>
    </div>
  );
}
