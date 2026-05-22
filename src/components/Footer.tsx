import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-graphite pt-20 pb-10 px-6 border-t border-light-grey/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <h3 className="font-display font-bold text-2xl mb-6">
            MELLOW <span className="text-performance-red">AUTOWORKS</span>
          </h3>
          <p className="text-light-grey leading-relaxed mb-8 max-w-xs">
            Trusted local automotive repairs and diagnostics for everyday South African drivers. We pride ourselves on integrity, affordability, and fast service.
          </p>
          <div className="flex gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-light-grey/30 flex items-center justify-center rounded-none hover:bg-performance-red hover:border-performance-red transition-all"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-light-grey/30 flex items-center justify-center rounded-none hover:bg-performance-red hover:border-performance-red transition-all"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 border border-light-grey/30 flex items-center justify-center text-sm font-bold rounded-none hover:bg-performance-red hover:border-performance-red transition-all"
            >
              TikTok
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg uppercase tracking-widest mb-6">Quick Links</h4>
          <ul className="space-y-4 font-medium text-light-grey">
            <li><Link to="/" className="hover:text-performance-red transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-performance-red transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-performance-red transition-colors">Our Services</Link></li>
            <li><Link to="/book" className="hover:text-performance-red transition-colors">Book Service</Link></li>
            <li><Link to="/quote" className="hover:text-performance-red transition-colors">Get A Quote</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg uppercase tracking-widest mb-6">Our Services</h4>
          <ul className="space-y-4 font-medium text-light-grey">
            <li>Engine Diagnostics</li>
            <li>Brake Repairs</li>
            <li>Tyres & Alignment</li>
            <li>Suspension</li>
            <li>Panel Beating</li>
            <li>General Service</li>
          </ul>
        </div>

        <div>
          <h4 className="font-display font-bold text-lg uppercase tracking-widest mb-6">Contact Info</h4>
          <ul className="space-y-4 font-medium text-light-grey">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-performance-red shrink-0" />
              <span>123 Performance Road, Industrial Area, Cape Town, 8001</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={20} className="text-performance-red shrink-0" />
              <a href="tel:+27123456789" className="hover:text-performance-red transition-colors">+27 12 345 6789</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={20} className="text-performance-red shrink-0" />
              <a href="mailto:info@mellowautoworks.co.za" className="hover:text-performance-red transition-colors">info@mellowautoworks.co.za</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-light-grey/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-light-grey/60 font-medium font-sans">
        <p>© {currentYear} Mellow AutoWorks (PTY) LTD. All Rights Reserved.</p>
        <div className="flex gap-8">
          <Link to="/privacy" className="hover:text-performance-red transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-performance-red transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
