import React from "react";

const Footer = () => {
  return (
    <footer className="py-10 text-white bg-gradient-to-r from-indigo-900 to-sky-900">
      <div className="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-4 max-sm:flex max-sm:flex-wrap">
        {/* Company Section */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">Company</h4>
          <ul>
            <li>About</li>
            <li>Our achievements</li>
            <li>Our partners</li>
            <li>Our locations</li>
            <li>Careers</li>
            <li>Contacts</li>
          </ul>
        </div>

        {/* Expertise Section */}
        <div>
          <h4 className="mb-4 text-lg font-semibold">Expertise</h4>
          <ul>
            <li>Cloud solutions</li>
            <li>Data warehouse</li>
            <li>Data management</li>
            <li>BI services</li>
            <li>Big data</li>
            <li>Data science</li>
          </ul>
        </div>

        {/* Industries Section */}
        <div className="max-sm:hidden">
          <h4 className="mb-4 text-lg font-semibold">Industries</h4>
          <ul>
            <li>Insurance</li>
            <li>Banking</li>
            <li>Fintech</li>
            <li>Logistics</li>
            <li>Retail</li>
            <li>Healthcare</li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div >
          <h4 className="mb-4 text-lg font-semibold">Newsletter</h4>
          <p className="mb-4">
            Sign up to Techco weekly newsletter to get the latest updates.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 text-black rounded-l-md"
            />
            <button className="px-6 py-2 bg-blue-700 rounded-r-md">
              SEND
            </button>
          </form>
          <div className="flex mt-6 space-x-4">
            <a href="#" className="text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-white">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="container pt-6 mx-auto mt-8 text-center border-t border-gray-700">
        <p>Copyright © 2024 Techco, All rights reserved.</p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
          <span>•</span>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
