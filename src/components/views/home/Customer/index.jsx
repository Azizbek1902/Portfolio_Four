import React from "react";
import img1 from "../../../../assets/images/quotes.svg";

function Customer() {
  const data = [
    {
      id: 1,
      img: img1,
      title: "Roe Smith",
      color: "linear-gradient(to right, #ef3d91, #0092ff)",
    },
    {
      id: 2,
      img: img1,
      title: "Sam Bloom",
      color: "linear-gradient(to right, #0092ff, #637eff)",
    },
    {
      id: 3,
      img: img1,
      title: "Bill McKenzie",
      color: "linear-gradient(to right, #637eff, #16c66d)",
    },
    {
      id: 4,
      img: img1,
      title: "Vanya Dropper",
      color: "linear-gradient(to right, #ef3d91, #0092ff)",
    },
    {
      id: 5,
      img: img1,
      title: "Lefty Brown",
      color: "linear-gradient(to right, #0092ff, #637eff)",
    },
    {
      id: 6,
      img: img1,
      title: "Susane Blake",
      color: "linear-gradient(to right, #637eff, #16c66d)",
    },
  ];
  return (
    <div>
      <div className="flex justify-center bg-[#fcfafb] py-20">
        <div className="w-[95%] md:w-[905] xl:w-[1140px]">
          <h1 className="text-center text-4xl font-bold">
            Customer testimonials
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-5">
            {data.map((item) => (
              <div
                key={item.id}
                className="shadow-xl mt-16 rounded-lg bg-white border-[1px] border-[rgba(0,0,0,.125)]"
              >
                <div className="text-center mx-8">
                  <div className="flex justify-center">
                    <img
                      className="xl:w-1/6 w-[8%]  relative bottom-3"
                      src={item.img}
                      alt=""
                    />
                  </div>
                  <p className="text-[#5e6576] text-base pt-4">
                    Suspendisse vitae enim arcu. Aliqu convallis risus a felis
                    blandit, at mollis nisi bibendum aliquam noto ricos
                  </p>
                  <h1 className="text-[#223150] text-xl pt-5 font-bold pb-3">{item.title}</h1>
                  <p className="text-[#5e6576] text-base pb-14">General Manager, Presentop</p>
                </div>
                <div
                  style={{ background: item.color }}
                  className="rounded-b-lg h-2 w-full"
                ></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer;
