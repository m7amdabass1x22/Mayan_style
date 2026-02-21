import React from "react";
import Nav from "./Nav";

export default function Header() {
  return (
    <>
      <div className="w-full h-15 bg-black p-5 flex justify-center">
        <div className="container flex items-center justify-between">
          <h1 className=" text-amber-50 font-bold text-[20px]">logo</h1>
          <Nav/>
        </div>
      </div>
    </>
  );
}
