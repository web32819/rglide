"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function ClientWrapper({ children }) {
  const pathname = usePathname();

  return (
    <>
      {children}

      {/* Show footer on all pages except home */}
      {pathname !== "/" && <Footer />}
    </>
  );
}
