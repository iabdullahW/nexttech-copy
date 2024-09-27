// "use client"
// import  { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from "next/image"
// import logo from "./../public/logo.svg"
// import { FaAngleDown } from "react-icons/fa";
// import { BsArrowDownRight } from "react-icons/bs";
// import "./Navbar.css"
// import { IoIosArrowForward } from "react-icons/io";

// import secondlogo from "./../public/secondlogo.svg"

// const Navbar = () => {

//   const [showSecondNavbar, setShowSecondNavbar] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 20) {
//         setShowSecondNavbar(true);
//       } else {
//         setShowSecondNavbar(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);
  
//   return (
//     <>
//     <div className="h-[35%] bg-[#020842] text-white w-[100%]">
//         <div className="py-7 w-[98%] mx-auto flex justify-between items-center  ">
//             <div>
//             <Image src={logo} alt="loading"/>
//            </div>
//            <div>
//                  <ul className="flex justify-around gap-x-7">
//                  <li className="flex items-center p-2 text-sm font-semibold gap-x-2 max-sm:hidden">Home</li>
//                     <li className="flex items-center p-2 px-4 font-semibold border border-gray-700 gap-x-2 rounded-3xl max-sm:hidden">
//                     <div class="dropdown">
//     <button class="dropbtn flex items-center gap-x-2">Services <FaAngleDown />
  
//     </button>
//     <div class="dropdown-content">
//     <a class="dropbtn flex  justify-around items-center"><p>Services</p> <IoIosArrowForward />
   
//     </a>
//       <Link href="/digitalmarketing" className="border-b ">Digital Marketing</Link>
      
//     </div>
//   </div>
//                     </li>
//                     <li className="flex items-center p-2 px-4 font-semibold border border-gray-700 gap-x-2 rounded-3xl max-sm:hidden">
//                     <div class="dropdown">
//     <button class="dropbtn flex items-center gap-x-2">Portfolio <FaAngleDown /> 

//     </button>
//     <div class="dropdown-content">
//       <a href="#" className="border-b ">Link 1</a>
//       <a href="#" className="border-b ">Link 2</a>
//       <a href="#" className="border-b ">Link 3</a>
//     </div>
//   </div>
//                     </li>
                    
            
//                     <li className="flex items-center p-2 text-sm font-semibold gap-x-2 max-sm:hidden">Blog </li>
//                     <li className="flex items-center p-2 text-sm font-semibold gap-x-2 max-sm:hidden">Contact </li>
//                  </ul>
//            </div>
//                 <div>
//                     <button className="bg-[#0042eb] px-5 rounded-3xl py-3 flex items-center gap-x-2 max-md:hidden max-sm:block"> GET STARTED <BsArrowDownRight className="max-sm:hidden"/></button>
//                 </div>
//         </div>
//         </div>
        
//         {showSecondNavbar && (
//           <div className="h-[35%] bg-white text-[#020842] w-[100%] sticky top-0 z-50">
//         <div className="py-7 w-[98%] mx-auto flex justify-between items-center  ">
//             <div>
//             <Image src={secondlogo} alt="loading"/>
//            </div>
//            <div>
//                  <ul className="flex justify-around gap-x-7">
//                  <li className="flex items-center p-2 text-sm font-semibold gap-x-2 max-sm:hidden">Home</li>
//                     <li className="flex items-center p-2 px-4 font-semibold border border-gray-700 gap-x-2 rounded-3xl max-sm:hidden">
//                     <div class="dropdown">
//     <button class="dropbtn flex items-center gap-x-2 text-black">Services <FaAngleDown />
    
//     </button>
//     <div class="dropdown-content">
//       <a href="#" className="border-b ">Link 1</a>
//       <a href="#" className="border-b ">Link 2</a>
//       <a href="#" className="border-b ">Link 3</a>
//     </div>
//   </div>
//                     </li>
//                     <li className="flex items-center p-2 px-4 font-semibold border border-gray-700 gap-x-2 rounded-3xl max-sm:hidden">
//                     <div class="dropdown">
//     <button class="dropbtn flex items-center gap-x-2 text-black">Portfolio <FaAngleDown /> 
   
//     </button>
//     <div class="dropdown-content">
//       <a href="#" className="border-b ">Link 1</a>
//       <a href="#" className="border-b ">Link 2</a>
//       <a href="#" className="border-b ">Link 3</a>
//     </div>
//   </div>
//                     </li>
                    
             
//                     <li className="flex items-center p-2 text-sm font-semibold gap-x-2 max-sm:hidden">Blog </li>
//                     <li className="flex items-center p-2 text-sm font-semibold gap-x-2 max-sm:hidden">Contact </li>
//                  </ul>
//            </div>
//                 <div>
//                     <button className="bg-[#0042eb] px-5 rounded-3xl py-3 flex items-center gap-x-2 max-md:hidden max-sm:block text-white"> GET STARTED <BsArrowDownRight className="max-sm:hidden"/></button>
//                 </div>
//         </div>
//         </div>
//       )}
        
        
//     </>
//   )
// }

// export default Navbar


"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from "next/image"
import logo from "./../public/logo.svg"
import secondlogo from "./../public/secondlogo.svg"
import { FaAngleDown } from "react-icons/fa";
import { BsArrowDownRight } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";
import "./Navbar.css"

const Navbar = () => {
  const [showSecondNavbar, setShowSecondNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setShowSecondNavbar(true);
      } else {
        setShowSecondNavbar(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="h-[35%] bg-[#020842] text-white w-[100%]">
        <div className="py-7 w-[98%] mx-auto flex justify-between items-center">
          <div>
          <Link href="/">

            <Image src={logo} alt="Logo" />
          </Link>
          </div>
          <div>
            <ul className="flex justify-around gap-x-7">
            <Link href="/">
            <li  className="flex items-center p-2 text-sm font-semibold gap-x-2 max-sm:hidden">Home</li>
            </Link>
            

              <li className="flex items-center p-2 px-4 font-semibold border border-gray-700 gap-x-2 rounded-3xl max-sm:hidden dropdown">
                <button className="flex items-center dropbtn gap-x-2">Services <FaAngleDown /></button>
                <div className="dropdown-content">
                  <div className="dropdown-submenu">
                    <a className="submenu-title">Digital Marketing <IoIosArrowForward /></a>
                    <div className="dropdown-content-submenu">
                      <Link href="/mobileappdevelopment" className="block border-b">Mobile App Development</Link>
                      <Link href="/softwaredevelopment" className="block border-b">Software Development</Link>
                      <Link href="/socialmediamarketing" className="block border-b">Social Media Marketing</Link>
                      <Link href="/graphicdesign" className="block border-b">Graphic Design</Link>
                      {/* <Link href="/risk-assessment" className="block border-b">Risk Assessment & Troubleshooting</Link>
                      <Link href="/network-infrastructure" className="block border-b">Network Infrastructure</Link> */}
                    </div>
                  </div>
                  <div className="dropdown-submenu">
                    <a className="submenu-title">It Solutions <IoIosArrowForward /></a>
                    <div className="dropdown-content-submenu">
                      <Link href="/networkinfrastructure" className="block border-b">Network Infrastructure Service</Link>
                      <Link href="/riskassessment" className="block border-b">RISK ASSESSMENT</Link>
                      <Link href="/securitysurveillance" className="block border-b">SECURITY SURVEILLANCE</Link>
                      <Link href="/signingsla" className="block border-b">Signing SLA</Link>
                      {/* <Link href="/risk-assessment" className="block border-b">Risk Assessment & Troubleshooting</Link>
                      <Link href="/network-infrastructure" className="block border-b">Network Infrastructure</Link> */}
                    </div>
                  </div>
                  {/* <a className="submenu-title"> It Solutions <IoIosArrowForward /></a> */}
                </div>
              </li>
              <Link href="/blogs">

              <li className="flex items-center p-2 text-sm font-semibold gap-x-2 max-sm:hidden">Blog</li>
              </Link>
              <Link href="/contact">

              <li className="flex items-center p-2 text-sm font-semibold gap-x-2 max-sm:hidden">Contact</li>
              </Link>
              <Link href="/about">

              <li className="flex items-center p-2 text-sm font-semibold gap-x-2 max-sm:hidden">About</li>
              </Link>
            </ul>
          </div>
          <div>
            <button className="bg-[#0042eb] px-5 rounded-3xl py-3 flex items-center gap-x-2 text-white">GET STARTED <BsArrowDownRight /></button>
          </div>
        </div>
      </div>

      {showSecondNavbar && (
        <div className="h-[35%] bg-white text-[#020842] w-[100%] sticky top-0 z-50 shadow-lg">
          <div className="py-7 w-[98%] mx-auto flex justify-between items-center">
            <div>
              <Image src={secondlogo} alt="Second Logo" />
            </div>
            <div>
              <ul className="flex justify-around gap-x-7">
                <li className="flex items-center p-2 text-sm font-semibold gap-x-2 max-sm:hidden">Home</li>
                <li className="flex items-center p-2 px-4 font-semibold border border-gray-700 gap-x-2 rounded-3xl max-sm:hidden dropdown">
                  <button className="flex items-center text-black dropbtn gap-x-2">Services <FaAngleDown /></button>
                  <div className="dropdown-content">
                  <div className="dropdown-submenu">
                    <a className="submenu-title">Digital Marketing <IoIosArrowForward /></a>
                    <div className="dropdown-content-submenu">
                      <Link href="/mobileappdevelopment" className="block border-b">Mobile App Development</Link>
                      <Link href="/softwaredevelopment" className="block border-b">Software Development</Link>
                      <Link href="/socialmediamarketing" className="block border-b">Social Media Marketing</Link>
                      <Link href="/graphicdesign" className="block border-b">Graphic Design</Link>
                      {/* <Link href="/risk-assessment" className="block border-b">Risk Assessment & Troubleshooting</Link>
                      <Link href="/network-infrastructure" className="block border-b">Network Infrastructure</Link> */}
                    </div>
                  </div>
                  <div className="dropdown-submenu">
                    <a className="submenu-title">It Solutions <IoIosArrowForward /></a>
                    <div className="dropdown-content-submenu">
                      <Link href="/networkinfrastructure" className="block border-b">Network Infrastructure Service</Link>
                      <Link href="/riskassessment" className="block border-b">RISK ASSESSMENT</Link>
                      <Link href="/securitysurveillance" className="block border-b">SECURITY SURVEILLANCE</Link>
                      <Link href="/signingsla" className="block border-b">Signing SLA</Link>
                      {/* <Link href="/risk-assessment" className="block border-b">Risk Assessment & Troubleshooting</Link>
                      <Link href="/network-infrastructure" className="block border-b">Network Infrastructure</Link> */}
                    </div>
                  </div>
                  {/* <a className="submenu-title"> It Solutions <IoIosArrowForward /></a> */}
                </div>
                  {/* <div className="dropdown-content">
                    <div className="dropdown-submenu">
                      <a className="submenu-title">IT Solutions <IoIosArrowForward /></a>
                      <div className="dropdown-content-submenu">
                        <Link href="/general-it-solution" className="border-b">General IT Solution</Link>
                        <Link href="/hardware-it-infrastructure" className="border-b">Hardware Solution For IT Infrastructure</Link>
                        <Link href="/signing-slas" className="border-b">Signing SLAs</Link>
                        <Link href="/security-surveillance" className="border-b">Security Surveillance</Link>
                        <Link href="/risk-assessment" className="border-b">Risk Assessment & Troubleshooting</Link>
                        <Link href="/network-infrastructure" className="border-b">Network Infrastructure</Link>
                      </div>
                    </div>
                    <Link href="/digitalmarketing" className="border-b">Digital Marketing</Link>
                  </div> */}
                </li>
                <li className="flex items-center p-2 text-sm font-semibold gap-x-2 max-sm:hidden">Blog</li>
                <li className="flex items-center p-2 text-sm font-semibold gap-x-2 max-sm:hidden">Contact</li>
              </ul>
            </div>
            <div>
              <button className="bg-[#0042eb] px-5 rounded-3xl py-3 flex items-center gap-x-2 text-white">GET STARTED <BsArrowDownRight /></button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
