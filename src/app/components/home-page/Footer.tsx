import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="text-white py-8" id="footer">
      <div className="container mx-auto px-4 p-10">
        <div className="flex flex-wrap justify-between">
          {/* About Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 sm:mb-0 tracking-wide">
            <h3 className="text-xl font-semibold mb-4 ml-5 ">About Us</h3>
            <p className="text-sm ml-10 text-gray-300 ml-5">I offer personalized coaching and expert advice to help you achieve your health goals.</p>
          </div>
          {/* Navigation Links */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 sm:mb-0 ml-5">
            <h3 className="text-xl font-semibold mb-4 tracking-wide">Quick Links</h3>
            <ul>
              <li><Link href="/landing" className="text-sm text-gray-300 hover:underline">Home</Link></li>
              <li><Link href="/pt-schedule" className="text-sm text-gray-300 hover:underline ">PT-Schedule</Link></li>
              <li><Link href="/locations" className="text-sm text-gray-300 hover:underline ">Locations</Link></li>
              <li><Link href="/about" className="text-sm text-gray-300 hover:underline ">About</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-300 hover:underline ">Contact</Link></li>
            </ul>
          </div>
          {/* Contact Info */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 sm:mb-0 ml-5">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-sm text-gray-300 tracking-wide">Email: info@martafoglinopt.com</p>
            <p className="text-sm text-gray-300 tracking-wide">Location: Eindhoven, The Netherlands</p>
          </div>
          {/* Social Media Links */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 sm:mb-0 ml-10 mt-10">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <div className="footer_section_social_links_container">
                <a href="/api/social-links/whatsapp" target="_blank" rel="noopener noreferrer" className="social-link" > <i className="fa fa-whatsapp"></i> </a>
                <span className="line">|</span>
                <a href="https://www.linkedin.com/in/marta-foglino-02aa24214/" target="_blank" className="social-link"><i className="fa fa-linkedin"></i></a>
                <span className="line">|</span>
                <a href="https://www.instagram.com/martafoglino77/reels/" target="_blank" className="social-link"><i className="fa fa-instagram"></i></a>
                <span className="line">|</span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-8 text-center">
          <h3 className="text-lg font-semibold mb-4">Subscribe to our Newsletter</h3>
          <form className="flex justify-center items-center">
            <input
              type="email"
              className="w-full sm:w-1/3 p-2 rounded-l-lg focus:outline-none text-black"
              placeholder="Enter your email"
            />
            <button
              // type="submit"
              className="bg-blue-500 p-2 rounded-r-lg text-white hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm">
          © 2024 Powered by Wynoot. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
