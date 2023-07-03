import React from "react";
import img from '../../../../assets/images/details-1.png'

function Details() {
  return (
    <div>
      <div className="bg-[#fcfafb] flex justify-center">
        <div className="w-[95%] md:w-[90%] xl:w-[1140px] lg:my-20 my-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 lg:gap-28">
            <div>
              <img src={img} alt="" />
            </div>
            <div className="flex items-center">
              <div className="text-start">
                <span className="text-[#ef473d] text-base font-semibold">WHAT WE DO</span>
                <h1 className="text-[#223150] text-[32px] font-bold mt-2 mb-9 leading-9">The right influencer can boost your conversion</h1>
                <p className="text-[#5e6576] text-base">
                  Etiam tempus condimentum congue. In sit amet nisi eget massa
                  condimentum lobortis eget ac eros. In hac habitasse platea
                  dictumst. Aenean molestie mauris eget sapien sagittis, a
                  bibendum magna tincidunt Get quote
                </p>
                <button className=" mt-5 py-3 px-9 text-white bg-[#0092ff] rounded-full hover:text-[#0092ff] hover:border-[#0092ff] hover:bg-white text-lg">
                  Get quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
