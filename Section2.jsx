import React from 'react';
import { BsCart } from "react-icons/bs";
const Section2 = () => {
  return <>
    <section className="  h-145">
        <div className='flex justify-center items-center gap-10 mt-25'>
            <aside className=' h-53 w-140 bg-[#222831] rounded-xl flex  gap-10'>
                <div className='h-full w-35 pl-5'><aside className="h-45 w-45 border-5 border-[#FFBE33] rounded-full mt-3 bg-[url('/public/o1.jpg')] bg-cover"></aside></div>
                <div className='h-40 text-white mt-10 pl-8'>
                    <h1 className='font-[cursive] text-2xl'>Tasty Thursdays</h1>
                    <h1 className='flex mb-2 font-[cursive] text-6xl'>20%<h3 className='flex items-end justify-start text-base'>off</h3></h1>
                    <button className='h-10 w-40 bg-[#FFBE33] text-white rounded-3xl cursor-pointer hover:bg-[orange] flex items-center justify-center gap-2'>Order Now<BsCart /></button>
                </div>
                <div></div>
            </aside>
            <aside className=' h-53 w-140 bg-[#222831] rounded-xl flex  gap-10'>
                <div className='h-full w-35 pl-5'><aside className="h-45 w-45 border-5 border-[#FFBE33] rounded-full mt-3 bg-[url('/public/o2.jpg')] bg-cover hover:skew-1"></aside></div>
                <div className='h-40 text-white mt-10 pl-8'>
                    <h1 className='font-[cursive] text-2xl'>Pizza Days</h1>
                    <h1 className='flex mb-2 font-[cursive] text-6xl'>15%<h3 className='flex items-end justify-start text-base'>off</h3></h1>
                    <button className='h-10 w-40 bg-[#FFBE33] text-white rounded-3xl cursor-pointer hover:bg-[orange] flex items-center justify-center gap-2'>Order Now<BsCart /></button>
                </div>
                <div></div>
            </aside>
        </div><br /><br /><br /><br />
         <p className='text-4xl font-[cursive] text-center'>Our Menu</p><br /><br />
         <div className='color-[#0c0c0c] text-base text-center flex justify-center'>
            <div className='flex justify-between w-100 items-center'>
            <a href=""><button className='h-10 w-17 bg-[#222831] text-white rounded-4xl'>All</button></a>
            <a href="">Burger</a>
            <a href="">Pizza</a>
            <a href="">Pasta</a>
            <a href="">Fries</a>
            </div>
         </div>
    </section>
  </>
};

export default Section2;