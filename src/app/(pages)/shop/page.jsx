import { Suspense } from "react";
import Shop from "./shop";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading shop...</div>}>
      <Shop />
    </Suspense>
  );
}
