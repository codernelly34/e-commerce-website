import Navbar from "@/components/Navbar.jsx";
import ProductFooter from "@/components/ProductFooter.jsx";
import SummaryModal from "@/components/SummaryModal";

export default function PagesLayout({ children }) {
  return (
    <div>
      <Navbar />
      <SummaryModal />
      {children}
      <ProductFooter />
    </div>
  );
}
