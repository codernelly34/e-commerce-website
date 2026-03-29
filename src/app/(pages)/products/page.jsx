import { Suspense } from "react";
import Products from "./_products/products.jsx";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading shop...</div>}>
      <Products />
    </Suspense>
  );
}
