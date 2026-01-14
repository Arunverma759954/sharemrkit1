export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-green-400">ShareMrKit</h3>
          <p className="text-gray-400 mt-3 text-sm">
            Smart stock market learning platform for traders and investors.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>About Us</li>
            <li>Services</li>
            <li>Blogs</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Disclaimer */}
        <div>
          <h4 className="font-semibold mb-3">Disclaimer</h4>
          <p className="text-gray-400 text-sm">
            Stock market investments are subject to market risks. Please read
            all scheme related documents carefully.
          </p>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm py-4 border-t border-gray-800">
        © {new Date().getFullYear()} ShareMrKit. All rights reserved.
      </div>
    </footer>
  );
}
