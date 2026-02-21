import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function () {
  return (
    <>
      <div className= "text-amber-50  flex gap-5">
        <NavLink to="/"> home</NavLink>
        <NavLink to="/About us">About us</NavLink>
        <NavLink to="/contact">contact</NavLink>
        
      </div>
    </>
  );
}
