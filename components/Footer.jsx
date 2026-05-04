import { FaYoutube, FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#080815] text-white py-16 px-6 md:px-12 relative overflow-hidden border-t border-white/5">
      
      {/* 🌊 হালকা নিওন গ্লো (স্মুথ লুকের জন্য) */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] -z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

          {/* লোগো ও আপনার দেওয়া বর্ণনা */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6 tracking-tighter">
               Skill<span className="text-blue-500">Sphere_</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              A modern online learning platform to upgrade your skills in development,
              design, marketing and more.
            </p>
          </div>

          {/* আপনার দেওয়া কন্টাক্ট ইনফো */}
          <div>
            <h3 className="font-bold mb-6 text-white uppercase text-xs tracking-[0.2em]">Contact</h3>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li className="hover:text-blue-400 transition-colors">Email: <br /> sumaiyakookie307@gmail.com</li>
              <li className="hover:text-blue-400 transition-colors">Phone: <br /> +880 1826459605</li>
            </ul>
          </div>

          {/* কোম্পানি লিঙ্কস */}
          <div>
            <h3 className="font-bold mb-6 text-white uppercase text-xs tracking-[0.2em]">Company</h3>
            <ul className="space-y-3 text-gray-500 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors">About</li>
              <li className="hover:text-white cursor-pointer transition-colors">Courses</li>
              <li className="hover:text-white cursor-pointer transition-colors">Instructors</li>
            </ul>
          </div>

          {/* সোশ্যাল লিঙ্কস (স্মুথ হোভার ইফেক্ট) */}
          <div>
            <h3 className="font-bold mb-6 text-white uppercase text-xs tracking-[0.2em]">Social Links</h3>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-blue-600 hover:scale-110 transition-all duration-300">
                <FaFacebookF size={18} />
              </div>
              <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-red-600 hover:scale-110 transition-all duration-300">
                <FaYoutube size={18} />
              </div>
              <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-black hover:scale-110 transition-all duration-300">
                <FaXTwitter size={18} />
              </div>
              <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-gradient-to-tr from-yellow-500 via-red-500 to-purple-500 hover:scale-110 transition-all duration-300">
                <FaInstagram size={18} />
              </div>
            </div>
          </div>
        </div>

        {/* নিচের অংশ */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-gray-600 uppercase tracking-widest">
          <p>© 2026 SkillSphere. All rights reserved.</p>
          <div className="flex gap-8">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms & Conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
