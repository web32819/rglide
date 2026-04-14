'use client';

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Loader() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname(); // track current route

  useEffect(() => {
    // Show loader on route change
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false); // hide after 4.5s
    }, 4500);

    return () => clearTimeout(timer);
  }, [pathname]); // runs every time pathname changes

  if (!isVisible) return null;

  return (
    <div id="loader" style={loaderStyle}>
      <div className="loader-wrap" style={wrapStyle}>
        <img src="/images/logo.svg" className="img-responsive" alt="Logo" style={imgStyle} />
        <div className="loader-spinner" style={spinnerStyle}></div>
      </div>
    </div>
  );
}

const loaderStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 9999,
};

const wrapStyle: React.CSSProperties = { textAlign: "center" };
const imgStyle: React.CSSProperties = { width: "120px", marginBottom: "20px" };
const spinnerStyle: React.CSSProperties = {
  width: "40px",
  height: "40px",
  border: "4px solid #dd9a38",
  borderTopColor: "transparent",
  borderRadius: "50%",
  animation: "spin 1s linear infinite",
};

// Add spinner keyframes
if (typeof window !== "undefined") {
  const styleEl = document.createElement("style");
  styleEl.innerHTML = `
    @keyframes spin { to { transform: rotate(360deg); } }
  `;
  document.head.appendChild(styleEl);
}
