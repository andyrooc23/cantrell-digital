export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-xl font-bold text-white">
            Cantrell Digital
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
            <a href="#work" className="text-gray-400 hover:text-white transition-colors">Work</a>
            <a href="#process" className="text-gray-400 hover:text-white transition-colors">Process</a>
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="text-center text-sm text-gray-400">
            © {currentYear} Cantrell Digital • cantrelldigital.dev
          </div>
        </div>
      </div>
    </footer>
  );
}
