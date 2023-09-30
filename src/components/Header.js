/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Header = () => {
  return <header className='py-8'>
    <div className='container mx-auto'>
      <div className='flex justify-between items-center'>
        <a href='#' className='w-[16rem] h-[3.2rem] ml-[-3rem] mt-[-1rem] font-primary tracking-widest text-3xl  ' >
          ANIKET
        </a>
        <button className='btn btn-sm'>Work with me</button>
      </div>
    </div>
  </header>;
};

export default Header;
