import Navbar from "@/components/Navbar.jsx";
import SummaryModal from "@/components/SummaryModal";
import { ShoppingProvider } from "@/context/ShoppingContext.jsx";

export default function PagesLayout({ children }) {
  return (
    <div>
      <ShoppingProvider>
        <Navbar />
        <SummaryModal />
        {children}
      </ShoppingProvider>
    </div>
  );
}
