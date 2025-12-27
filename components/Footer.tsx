export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Residential College K10</h3>
            <p className="text-gray-400 text-sm">
              Universiti Putra Malaysia
              <br />
              A supportive and vibrant living-learning community
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p className="text-gray-400 text-sm">
              Email: residence.k10@upm.edu.my
              <br />
              Phone: +60 3-xxxx xxxx
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="flex flex-col gap-2 text-sm">
              <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
              <a href="/rules" className="text-gray-400 hover:text-white transition-colors">
                Rules
              </a>
              <a href="/facilities" className="text-gray-400 hover:text-white transition-colors">
                Facilities
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Residential College K10 UPM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
