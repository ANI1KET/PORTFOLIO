import React from "react";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <span className="w-[16rem] h-[3.2rem] ml-[-3rem] mt-[-1rem] font-primary tracking-widest text-3xl  ">
            ANIKET
          </span>
          <button className="btn btn-sm">
            <a
              href="https://github.com/ANI1KET"
              target="_blank"
              rel="noreferrer"
              alt=""
            >
              Work with me
            </a>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
