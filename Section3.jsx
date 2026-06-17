import React from 'react';

const Section3 = () => {
  return <>
    <section className='h-190 bg-[#222831] flex gap-9 items-center justify-center'>
        <aside className="ml-15 h-150 w-115 bg-[url('/public/about-imgpices.png')] bg-contain bg-no-repeat "></aside>
        <aside className='mt-80 ml-8 h-150 w-150 text-white'>
          <h1 className='text-5xl font-[cursive]'>We Are Feane</h1>
          <p className='mt-5'>There are many variations of passages of Lorem Ipsum available, but the <br />
          majority have suffered alteration in some form, by injected humour, or <br />
          randomised words which don't look even slightly believable. If you are <br />
          going to use a passage of Lorem Ipsum, you need to be sure there isn't <br />
          anything embarrassing hidden in the middle of text. All</p>
          <button className='mt-5  h-10 w-40 bg-[#FFBE33] text-white rounded-3xl cursor-pointer hover:bg-[orange]'>Read More</button>
        </aside>
    </section>
  </>
};

export default Section3;