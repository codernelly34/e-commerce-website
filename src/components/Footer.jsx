import styles from "@/styles/Footer.module.css";
import Link from "next/link.js";
import { Phone, Mail, MapPin, Clock, MessageCircleMore } from "lucide-react";

export default function Footer() {
  return (
    <footer className={`${styles.footer} antialiased text-base lg:text-lg`}>
      <div className={styles.container}>
        {/* Brand Section */}
        <div className={styles.box}>
          <h2 className={styles.logo}>
            <Link href="/">237 Electro Tech</Link>
          </h2>
          <ul>
            <li>
              <MapPin size={20} className="inline" /> Buea, Cameroon
            </li>
            <li>
              <Clock size={20} className="inline" /> Mon - Sat (8am - 6pm)
            </li>
          </ul>
        </div>

        {/* Services */}
        <div className={styles.box}>
          <h3>Services</h3>
          <ul>
            <li>Solar Installation </li>
            <li>Electrical Installation </li>
            <li>House Wiring </li>
            <li>Maintenance / Fault Finding</li>
            <li>Supply of Equipment</li>
          </ul>
        </div>

        {/* Contact */}
        <div className={styles.box}>
          <h3>Contact</h3>
          <ul>
            <li>
              <Link href="tel:+237679510125">
                <Phone size={20} className="inline" /> +237 679510125
              </Link>
            </li>
            <li>
              <Link href="mailto:237electrotech@gmail.com" target="_blank">
                <Mail size={20} className="inline" /> 237electrotech@gmail.com
              </Link>
            </li>
            <Link
              className={styles.whatsapp}
              href="https://wa.me/237679510125"
              target="_blank"
            >
              Chat on WhatsApp <MessageCircleMore className="inline" />
            </Link>
          </ul>
        </div>

        {/* Quick Links */}
        <div className={styles.box}>
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottom}>
        <p>
          © {new Date().getFullYear()} 237 Electro Tech. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
