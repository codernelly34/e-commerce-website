import styles from "@/styles/ProductFooter.module.css";
import Link from "next/link.js";
import {
  Truck,
  ShieldCheck,
  Info,
  MessageCircleMore,
  BatteryCharging,
  BatteryFull,
  Cable,
  Settings,
  Phone,
  FileText,
} from "lucide-react";

export default function ProductFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Trust + Brand */}
        <div className={styles.box}>
          <h2>
            <Link href="/">237 Electro Tech</Link>
          </h2>
          <p>Solar & Electrical Equipment Supplier in Cameroon 🇨🇲</p>

          <p className={styles.small}>
            Quality products for homes, shops, and industries.
          </p>
        </div>

        {/* Shopping Support */}
        <div className={styles.box}>
          <h3>Shopping Support</h3>
          <ul>
            <li>
              <Truck size={20} className="inline" /> Delivery & Installation
            </li>
            <li>
              <Info size={20} className="inline" /> Product Setup Help
            </li>
            <li>
              <ShieldCheck size={20} className="inline" /> Warranty Available
            </li>
            <li>
              <MessageCircleMore size={20} className="inline" /> Ask Before You
              Buy
            </li>
          </ul>
        </div>

        {/* Contact Fast */}
        <div className={styles.box}>
          <h3>Quick Help</h3>
          <Link href="tel:+237679510125">
            <Phone size={20} className="inline" /> +237 679510125
          </Link>

          <Link
            className={styles.whatsapp}
            href="https://wa.me/237679510125"
            target="_blank"
          >
            Chat on WhatsApp <MessageCircleMore className="inline" />
          </Link>

          <Link href="/quote" className={styles.quote}>
            Request Price List <FileText className="inline" />
          </Link>
        </div>

        {/* Product Links */}
        <div className={styles.box}>
          <h3>Products</h3>
          <ul>
            <li>
              Solar Panels
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-solar-panel-icon lucide-solar-panel inline ml-2"
              >
                <path d="M11 2h2" />
                <path d="m14.28 14-4.56 8" />
                <path d="m21 22-1.558-4H4.558" />
                <path d="M3 10v2" />
                <path d="M6.245 15.04A2 2 0 0 1 8 14h12a1 1 0 0 1 .864 1.505l-3.11 5.457A2 2 0 0 1 16 22H4a1 1 0 0 1-.863-1.506z" />
                <path d="M7 2a4 4 0 0 1-4 4" />
                <path d="m8.66 7.66 1.41 1.41" />
              </svg>
            </li>
            <li>
              Inverters <BatteryCharging size={20} className="inline" />
            </li>
            <li>
              Batteries <BatteryFull size={20} className="inline" />
            </li>
            <li>
              Wires & Cables <Cable size={20} className="inline" />
            </li>
            <li>
              Accessories <Settings size={20} className="inline" />
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Trust Bar */}
      <div className={styles.bottom}>
        <p>Secure orders • Fast response • Installation support 🇨🇲</p>
        <p>© {new Date().getFullYear()} 237 Electro Tech</p>
      </div>
    </footer>
  );
}
