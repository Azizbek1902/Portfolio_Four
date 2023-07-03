import React from "react";
import Img from "../../../../assets/images/details-2-background.jpg";
import Img2 from "../../../../assets/images/details-2.png";

function Features() {
  return (
    <div
      className="bg-cover bg-no-repeat w-full bg-right object-cover bg-[image:var(--image-url)]"
      style={{ "--image-url": `url(${Img})` }}
    >
      <div className="flex justify-center items-center">
        <div className="w-[95%] md:w-[90%] xl:w-[1140px] lg:my-20 my-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 lg:gap-20">
            <div className="flex items-center mt-20 lg:mt-0">
              <div className="text-start xl:w-[400px]">
                <span className="text-[#ef473d] text-base font-semibold">
                  ABOUT US
                </span>
                <h1 className="text-[#223150] text-[32px] font-bold mt-2 mb-9 leading-9">
                  We have ten years experience in marketing
                </h1>
                <p className="text-[#5e6576] text-base">
                  Etiam tempus condimentum congue. In sit amet nisi eget massa
                  condimentum lobortis eget ac eros. In hac habitasse platea
                  dictumst. Aenean molestie mauris eget sapien sagittis, a
                  bibendum magna tincidunt
                </p>
                <button className=" mt-5 py-2 px-9 text-[#ef473d] bg-transparent rounded-full hover:text-white border-[1px] border-[#ef473d] hover:bg-[#ef473d] text-lg">
                  Details
                </button>
              </div>
            </div>
            <div>
              <img src={Img2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
