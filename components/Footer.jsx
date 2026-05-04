
import { FaYoutube, FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6"

const Footer = () => {
  return (
    <footer className="bg-[#1A3A32] text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">

          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">SkillSphere</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              A modern online learning platform to upgrade your skills in development,
              design, marketing and more.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Email: sumaiyakookie307@gmail.com</li>
              <li>Phone: +880 1826459605</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Courses</li>
              <li className="hover:text-white cursor-pointer">Instructors</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4 text-white">Social Links</h3>
            <div className="flex items-center gap-3">

              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0B1120] cursor-pointer">
                <FaFacebookF />
              </div>

              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0B1120] cursor-pointer">
                <FaYoutube />
              </div>

              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0B1120] cursor-pointer">
                <FaXTwitter />
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#0B1120] cursor-pointer hover:bg-gray-200 transition-colors">
            <FaInstagram />
            </div>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© 2026 SkillSphere. All rights reserved.</p>

          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
