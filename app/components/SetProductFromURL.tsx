"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function SetProductFromURL() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const productName = searchParams.get("productname");

    if (productName) {
      const input = document.getElementById("product") as HTMLInputElement | null;
      if (input) {
        input.value = productName;
      }
    }
  }, [searchParams]);

  return null;
}
