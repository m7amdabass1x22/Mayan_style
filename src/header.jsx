import React from "react";
import Nav from "./Nav";
import logo from "./assets/ChatGPT Image Feb 21, 2026, 02_32_14 AM.png";

export default function Header() {
  return (
    <>
      <div className="w-full h-15 bg-black p-5 flex justify-center">
        <div className="container flex items-center justify-between">
<img src={logo} className="w-20" alt="" />          <Nav/>
        </div>
      </div>
    </>
  );
}
