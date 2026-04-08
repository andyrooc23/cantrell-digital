export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-white font-bold text-xl mb-4 md:mb-0">
            Cantrell Digital
          </div>

          <nav className="flex space-x-6 mb-4 md:mb-0">
            <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
            <a href="#work" className="text-gray-400 hover:text-white transition-colors">Work</a>
            <a href="#process" className="text-gray-400 hover:text-white transition-colors">Process</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="text-gray-400 text-sm">
            © 2024 Cantrell Digital • cantrelldigital.dev
          </div>
        </div>
      </div>
    </footer>
  );
}