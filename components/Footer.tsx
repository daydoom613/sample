export default function Footer() {
  return (
    <footer className="bg-background-dark border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2 space-y-6">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold tracking-tight uppercase">
              Nature Guru <span className="text-red-600">Creations</span>
            </h2>
          </div>
          <p className="text-slate-500 max-w-sm">
            Redefining cinematic wildlife filmmaking through the seamless blend
            of on-location expertise and cutting-edge visual effects.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6 uppercase tracking-widest text-xs text-red-600">
            Company
          </h4>
          <ul className="space-y-4 text-sm text-gray-700">
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
