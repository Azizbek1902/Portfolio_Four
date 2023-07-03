import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import React from "react";
import Img from "../../assets/images/decoration-circles.png";

function Footer() {
  return (
    <div>
      <div className="bg-[#fcfafb] ">
        <div
          className=" bg-no-repeat bg-left h-[60vh] w-full bg-[image:var(--image-url)]"
          style={{ "--image-url": `url(${Img})` }}
        >
          <div className="flex justify-center pt-32">
            <div className="text-center lg:w-[730px]">
              <h1 className="text-2xl text-[#223150] font-bold ">
                If you want to find out which are the right influencers for your
                product marketing campaigns then follow us
              </h1>
              <div className="flex justify-center gap-4 mt-8">
                <div className="rounded-full footerIcon p-3 bg-white hover:bg-[#0092ff] ">
                  <FaFacebookF className="text-[#0092ff] fICon text-2xl" />
                </div>
                <div className="rounded-full footerIcon p-3 bg-white hover:bg-[#0092ff] ">
                  <AiOutlineTwitter className="text-[#0092ff] fICon text-2xl" />
                </div>
                <div className="rounded-full footerIcon p-3 bg-white hover:bg-[#0092ff] ">
                  <FaPinterestP className="text-[#0092ff] fICon text-2xl" />
                </div>
                <div className="rounded-full footerIcon p-3 bg-white hover:bg-[#0092ff] ">
                  <AiOutlineInstagram className="text-[#0092ff] fICon text-2xl" />
                </div>
                <div className="rounded-full footerIcon p-3 bg-white hover:bg-[#0092ff] ">
                  <AiFillYoutube className="text-[#0092ff] fICon text-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="flex justify-center">
          <div className="w-[93%] md:w-[90%] xl:w-[1140px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 my-7">
              <div className="grid grid-cols-1 lg:grid-cols-3 md:gap-3">
                <h1 className="text-[#5e6576] text-sm flex lg:justify-start justify-center">Article Details</h1>
                <h1 className="text-[#5e6576] text-sm flex lg:justify-start justify-center">Terms & Conditions</h1>
                <h1 className="text-[#5e6576] text-sm flex lg:justify-start justify-center lg:pb-0 pb-2">Privacy Policy</h1>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 gap-2">
                <h1 className="text-[#5e6576] text-sm flex lg:justify-end justify-center">
                  Copyright © Your name
                </h1>
                <h1 className="text-[#5e6576] text-sm flex lg:justify-end justify-center">
                  Distributed by Themewagon
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
