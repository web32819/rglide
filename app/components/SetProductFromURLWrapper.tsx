import { Suspense } from "react";
import SetProductFromURL from "./SetProductFromURL";

export default function SetProductFromURLWrapper() {
  return (
    <Suspense fallback={null}>
      <SetProductFromURL />
    </Suspense>
  );
}