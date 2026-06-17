import React from 'react';
import { BsPerson } from "react-icons/bs";
import { BsCart } from "react-icons/bs";
import { GoSearch } from "react-icons/go";
const Nav_bar = () => {
  return <>
  <div className='bg-[black]'>
    <nav className='scroll ml-30 h-17 w-300 flex bg-[black]'>
        <div className='flex items-center font-bold text-3xl  text-white h-full  w-30 font-[cursive] font-[Dancing Script]'>Feane</div>
        <div className='h-full border-none w-190 flex items-center'>
            <ol className='flex items-center pl-76 gap-10 text-white  font-[Open Sans]'>
                <li className='text-[#FFBE33]'>HOME</li>
                <li className='hover:text-[#FFBE33]'>MENU</li>
                <li className='hover:text-[#FFBE33]'>ABOUT</li>
                <li className='hover:text-[#FFBE33]'>BOOK TABLE</li>
            </ol>
        </div>
        <div className='h-full text-white w-80 flex items-center gap-5 pl-10'>
            <a href="" className='hover:text-[#FFBE33]'><BsPerson /></a>
            <a href="" className='hover:text-[#FFBE33]'><BsCart /></a>
            <a href="" className='hover:text-[#FFBE33]'><GoSearch /></a>
            <a href=""> <button className='h-10 w-35 bg-[#FFBE33] text-white rounded-3xl cursor-pointer hover:bg-[orange]'>Order Online</button></a>
        </div>
    </nav>
  </div>
  </>
};

export default Nav_bar;