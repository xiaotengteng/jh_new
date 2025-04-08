import { Link } from 'react-router-dom'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container-padding py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">JH KUMU EDTECH PVT LTD</h3>
            <p className="text-gray-300 mb-4">
              Helping Indian students improve their English language skills with professional
              courses and personalized support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-white transition-colors">
                  Courses
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiPhone className="text-primary mt-1 mr-2" />
                <span>
                  <a href="tel:8521569961" className="hover:text-primary transition-colors">
                    8521569961
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <FiMail className="text-primary mt-1 mr-2" />
                <span>
                  <a
                    href="mailto:jumbalzonecbsa@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    jumbalzonecbsa@gmail.com
                  </a>
                </span>
              </li>
              <li className="flex items-start">
                <FiMapPin className="text-primary mt-1 mr-2" />
                <span className="text-gray-300">
                  House no.61, Elligara, Siringsia, Jharkhand
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-900 py-4">
        <div className="container-padding text-center text-gray-400 text-sm">
          © {currentYear} JH KUMU EDTECH PVT LTD. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
