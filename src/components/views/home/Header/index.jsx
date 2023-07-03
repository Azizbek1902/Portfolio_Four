import React from "react";
import img from "../../../../assets/images/header-background.jpg";
import img2 from "../../../../assets/images/header-image.png";

function Header() {
  return (
    <div>
      <div
        className="flex justify-center w-full pt-[90px] bg-no-repeat h-[88vh] bg-[image:var(--image-url)]"
        style={{ "--image-url": `url(${img})` }}
      >
        <div className="w-[95%] md:w-[90%] xl:w-[1140px]">
          <div className="grid lg:mt-10 grid-cols-1 lg:grid-cols-2 gap-x-4 lg:gap-7">
            <div className="flex items-center lg:w-[450px]">
              <div className="lg:text-start text-center ">
                <h1 className="text-[52px] font-bold text-[#223150] leading-[60px]">
                  Find influencers for your products
                </h1>
                <p className="text-lg text-[#5e6576] font-normal pt-5 lg:pt-14">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  dignissim, neque ut ultrices sollicitudin
                </p>
                <button className="py-3 font-semibold mt-10 text-white bg-[#0092ff] hover:text-[#0092ff] hover:bg-white px-9 rounded-full border-[1px] border-[#0092ff]">
                  Offered services
                </button>
              </div>
            </div>
            <div>
              <img src={img2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
