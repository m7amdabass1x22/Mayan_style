import React from "react";
import Header from "./header";
import { Factory } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import logo from "./assets/ChatGPT Image Feb 21, 2026, 02_32_14 AM.png";
import { IoCallOutline } from "react-icons/io5";

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <div>
        <Header />
      </div>
      <div className=" w-full h-dvh  flex justify-center lg:h-[590px]">
        <div className="container flex justify-center flex-col items-center">
          <div className="w-[100%]  h-full bg-gray-950   drop-shadow-black flex justify-center items-center flex-col lg:w-[50%] lg:rounded-3xl">
            <img className=" w-40" src={logo} alt="" />
<h1 className="text-yellow-300 font-bold text-[20px]"> ...مصنع ميان استيل يرحب بكم</h1>
            <div className="w-full h-full flex justify-center items-center flex-col gap-5 ">
              <a
                href="https://chat.whatsapp.com/Es3mi6Lq3oS694fRnCgSpv?fbclid=IwdGRjcAQFvIpleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAwzNTA2ODU1MzE3MjgAAR7JvIjOazIVIWiqb5dm8TGN4und4k3J0KgjMJMFims5CAXvvfKWhEoXaWjiig_aem_s7U8gY3m2CZDaQ8vRvgO4Q"
                target="_blank"
                className="text-gray-950 w-[70%] h-[50px] rounded-3xl flex items-center justify-center bg-amber-50  gap-5 hover:bg-green-600  hover:text-white lg:w-[55%]"
              >
                <FaWhatsapp className="text-[40px]  " />
                <h1 className="  font-bold hover:text">whats app group</h1>
              </a>
              <a
                href="https://www.facebook.com/share/19ruKoL5Zp/"
                target="_blank"
                className="text-gray-950 w-[70%] h-[50px] rounded-3xl flex items-center justify-center bg-amber-50 gap-5 hover:bg-blue-900 hover:text-white lg:w-[55%]"
              >
                <FaFacebook className="text-[40px]" />
                <h1 className="  font-bold">whats app group</h1>
              </a>
              <a
                href="https://t.me/az_1572011?fbclid=IwdGRjcAQFvE1leHRuA2FlbQIxMQBzcnRjBmFwcF9pZAwzNTA2ODU1MzE3MjgAAR49iyQ6NT7r8WK6S9PL-yFsktbEI1hCphJ2wvgTr9ejyCrFZ-tsBUbeUqwyUg_aem_hLBHRFa0xJ0hWcE9f_lQ-g"
                target="_blank"
                className="text-gray-950 w-[70%] h-[50px] rounded-3xl flex items-center justify-center bg-amber-50 gap-5 hover:bg-cyan-300  hover:text-white lg:w-[55%]"
              >
                <BsTelegram className="text-[40px] " />
                <h1 className="  font-bold">whats app group</h1>
              </a>
              <a
                href="01000915291"
                target="_blank"
                className="text-gray-950 w-[70%] h-[50px] rounded-3xl flex items-center justify-center bg-amber-50  gap-5 hover:bg-gray-500  hover:text-white lg:w-[55%]"
              >
                <IoCallOutline className="text-[40px]  " />
                <h1 className="  font-bold hover:text">01000915291</h1>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
