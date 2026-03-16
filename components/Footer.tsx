import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-300 border-t border-red-600 py-16 mt-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold tracking-tight uppercase">
              <span className="text-green-600">N</span>
              <span className="text-red-600">ature Guru Creations</span>
            </h2>
          </div>
          <p className="text-slate-800 max-w-sm text-justify">
            Nature Guru Creations is a filmmaking studio focused on creating
            original films and series for global audiences, while also
            delivering world-class VFX & CG execution for international
            productions through a robust, engineering-driven pipeline.
          </p>
          <div className="flex gap-5">
            <a href="#" className="hover:scale-105">
              <Instagram />
            </a>
            <a href="#" className="hover:scale-105">
              <Twitter />
            </a>
            <a href="#" className="hover:scale-105">
              <Youtube />
            </a>
            <a href="#" className="hover:scale-105">
              <Linkedin />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-red-600">
            Company
          </h4>
          <ul className="space-y-4 text-sm text-gray-800">
            <li>
              <a className="hover:text-gold transition-colors" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="hover:text-gold transition-colors" href="#">
                Originals
              </a>
            </li>
            <li>
              <a className="hover:text-gold transition-colors" href="#">
                Showreel
              </a>
            </li>
            <li>
              <a className="hover:text-gold transition-colors" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-red-600">
            Services
          </h4>
          <ul className="space-y-4 text-sm text-gray-700">
            <li>
              <a className="hover:text-gold transition-colors" href="#">
                VFX Production
              </a>
            </li>
            <li>
              <a className="hover:text-gold transition-colors" href="#">
                Film Production
              </a>
            </li>
            <li>
              <a className="hover:text-gold transition-colors" href="#">
                Post Production
              </a>
            </li>
            <li>
              <a className="hover:text-gold transition-colors" href="#">
                Consultancy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>© 2025 Nature Guru Creations. All rights reserved.</p>
        <div className="flex gap-8">
          <a className="hover:text-white" href="#">
            Privacy Policy
          </a>
          <a className="hover:text-white" href="#">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
