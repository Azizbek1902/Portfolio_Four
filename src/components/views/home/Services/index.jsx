import { BiRightArrowAlt } from "react-icons/bi";
import React from "react";
import { FaRegComments } from "react-icons/fa";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaRegClipboard } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Service() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-center bg-[#fcfafb]">
        <div className="w-[95%] md:w-[90%] xl:w-[1140px] py-20 lg:mt-0 mt-96">
          <h1 className="text-[#223150] text-[32px] mb-14 font-bold">
            Explore our services
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 mb-20 lg:gap-10 md:gap-y-20 gap-y-24 xl:gap-32">
            <div className="text-start">
              <div className=" mb-10">
                <div className="flex justify-center bg-[#ddedfb] rounded-xl w-[76px] h-[76px] items-center">
                  <FaHeadphonesAlt color="#0092ff" size={42} />
                </div>
              </div>
              <h1 className="text-2xl font-semibold pb-5">Customer Lists</h1>
              <p className="text-[#565578] font-normal text-base leading-6">
                Et blandit nisl libero at arcu. Donec ac lectus sed tellus
                mollis viverra. Nullam pharetra ante at nunc elementum
              </p>
              <button onClick={() => {navigate("/article")}} className="flex gap-2 mt-6 font-medium items-center">
                Learn more <BiRightArrowAlt />
              </button>
            </div>

            <div className="text-start">
              <div className=" mb-10">
                <div className="flex justify-center bg-[#fbe4e4] rounded-xl w-[76px] h-[76px] items-center">
                  <FaRegClipboard color="#ef473d" size={42} />
                </div>
              </div>
              <h1 className="text-2xl font-semibold pb-5">Sales Tracking</h1>
              <p className="text-[#565578] font-normal text-base leading-6">
                Vulputate nibh feugiat. Morbi pellent diam nec libero lacinia,
                sed ultrices velit scelerisque. Nunc placerat justo sem
              </p>
              <button onClick={() => {navigate("/article")}} className="flex gap-2 mt-6 font-medium items-center">
                Learn more <BiRightArrowAlt />
              </button>
            </div>

            <div className="text-start">
              <div className=" mb-10">
                <div className="flex justify-center bg-[#e0f4ea] rounded-xl w-[76px] h-[76px] items-center">
                  <FaRegComments color="#16c66d" size={42} />
                </div>
              </div>
              <h1 className="text-2xl font-semibold pb-5">Reporting Tool</h1>
              <p className="text-[#565578] font-normal text-base leading-6">
                Ety suscipit metus sollicitudin euqu isq imperdiet nibh nec
                magna tincidunt, nec pala vehicula neque sodales verum
              </p>
              <button onClick={() => {navigate("/article")}} className="flex gap-2 mt-6 font-medium items-center">
                Learn more <BiRightArrowAlt />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
