import React from 'react';
const Section1 = () => {
  return <>
    <section className="h-210  bg-[url('/public/image.png')] bg-cover">
        {/* <img  className='h-full w-full' src={Burger} alt=""/> */}
        <div className='h-200 border-1'>
            <div className='h-145 border-transparent text-white mt-65'>
                <aside className='h-90 border-transparent mt-20'>
                    <div className='h-60 w-150 ml-40 mt-10 border-transparent '>
                        <h1 className='mt-2 font-bold text-5xl  text-white font-[cursive] font-["Dancing Script"]'>Fast Food Restaurant</h1>
                        <p className='text-sm mt-7'>Doloremque, itaque aperiam facilis rerum, commodi,temporibus sapiente ad <br />mollitia laborum quam quisquam esse
                            error unde. Tempora ex doloremque, labore, <br />sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
                        </p>
                        <a href=""><button className='mt-8 h-12 w-40 bg-[#FFBE33] text-white rounded-3xl cursor-pointer hover:bg-[orange]'>Order Now</button></a>
                    </div>
                </aside>
                 <div className='h-10 w-20 ml-40 border-transparent flex items-center gap-1'> 
                        <aside className='h-4 w-4  bg-[#FFBE33] rounded-full'></aside>
                        <aside className='h-3 w-3 border-2 bg-[white] rounded-full'></aside>
                        <aside className='h-3 w-3 border-2 bg-[white] rounded-full'></aside>
                </div>
            </div>
        </div>
    </section>
  </>
};

export default Section1;