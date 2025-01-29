import React from "react";
import Logo from "../../assets/bg/logo.png";
import { Menu, X } from "lucide-react"; 
import { useState } from 'react';
import ResponsiveMenu from "./ResponsiveMenu";


const Navbar = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className="bg-amber-950 px-4 md:px-0 fixed z-50 w-full top-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-2">
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10" /> 
          <h1 className="text-2xl text-white font-pacifico">Ceylon Brew</h1>
        </div>
        {/* Navigation */}
        <nav className="md:flex hidden items-center gap-7">
          <ul className="flex gap-7 items-center text-[15px] font-semibold text-white">
            <a href="/"><li className="cursor-pointer">Home</li></a>
            <a href="#menu"><li className="cursor-pointer">Menu</li></a>
            <a href="#about"><li className="cursor-pointer">About</li></a>
            <a href="#testimonial"><li className="cursor-pointer">Testimonial</li></a>
          </ul>
          <a href="#contact"><button className="bg-amber-900 text-white hover:bg-amber-800 px-3 py-1 rounded-md">Contact</button></a>
        </nav>
        {
          open ? <X onClick={() => setOpen(false)} className="text-white w-7 h-7 md:hidden cursor-pointer"/> : <Menu onClick={() => setOpen(true)} className="text-white w-7 h-7 md:hidden cursor-pointer" />
        }
      </div>
      <ResponsiveMenu open={open} setOpen={setOpen} />
    </div>
  );
};

export default Navbar;
