import { FaTools } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { FaTv } from "react-icons/fa";
import React from "react";
import img from "../../../../assets/images/features-background.jpg";
import img2 from "../../../../assets/images/features-dashboard.png";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Accordions() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div>
      <div
        className="bg-cover bg-no-repeat py-20 w-full bg-[image:var(--image-url)]"
        style={{ "--image-url": `url(${img})` }}
      >
        <div className="text-center text-white">
          <h1 className="text-[32px] font-bold pb-7">
            Online service features
          </h1>
          <div className="flex justify-center">
            <p className="text-base w-[90%] lg:w-[700px] pb-8">
              Suspendisse vitae enim arcu. Aliquam convallis risus a felis
              blandit, at mollis nisi bibendum. Aliquam nec purus at ex blandit
              posuere nec a odio. Proin lacinia dolor justo
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="w-[95%] md:w-[90%] xl:w-[1140px]">
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20">
              <div>
                <Fragment>
                  <Accordion className="w-full" open={open === 1}>
                    <AccordionHeader
                      className="border-0 text-white flex justify-start gap-5 hover:text-white  focus:text-white"
                      onClick={() => handleOpen(1)}
                    >
                      <div className="bg-[#14be9f] p-2 rounded-md">
                        <FaTv size={27} />
                      </div>
                      Analyse the product and design plan
                    </AccordionHeader>
                    <AccordionBody className="border-0 text-white pl-16">
                      Mauris ornare libero et pharetra hendrerit. Cura elementum
                      lectus quis tellus pretium, vitae lobortis dui sagittis
                      aliquam et enim vel semon anticus
                    </AccordionBody>
                  </Accordion>
                  <Accordion className="w-full" open={open === 2}>
                    <AccordionHeader
                      className="border-0 text-white flex justify-start gap-5 hover:text-white  focus:text-white"
                      onClick={() => handleOpen(2)}
                    >
                      <div className="bg-[#1d79fb] p-2 rounded-md">
                        <FaMicrophone size={27} />
                      </div>
                      Find the market opportunities
                    </AccordionHeader>
                    <AccordionBody className="border-0 text-white pl-16">
                      Mauris ornare libero et pharetra hendrerit. Cura elementum
                      lectus quis tellus pretium, vitae lobortis dui sagittis
                      aliquam et enim vel semon anticus
                    </AccordionBody>
                  </Accordion>
                  <Accordion className="w-full" open={open === 3}>
                    <AccordionHeader
                      className="border-0 text-white flex justify-start gap-5 hover:text-white  focus:text-white"
                      onClick={() => handleOpen(3)}
                    >
                      <div className="bg-[#dc63ff] p-2 rounded-md">
                        <FaVideo size={27} />
                      </div>
                      Prepare the product launch campaign
                    </AccordionHeader>
                    <AccordionBody className="border-0 text-white pl-16">
                      Mauris ornare libero et pharetra hendrerit. Cura elementum
                      lectus quis tellus pretium, vitae lobortis dui sagittis
                      aliquam et enim vel semon anticus
                    </AccordionBody>
                  </Accordion>
                  <Accordion className="w-full" open={open === 4}>
                    <AccordionHeader
                      className="border-0 text-white flex justify-start gap-5 hover:text-white  focus:text-white"
                      onClick={() => handleOpen(4)}
                    >
                      <div className="bg-[#ff6c02] p-2 rounded-md">
                        <FaTools size={27} />
                      </div>
                      Evaluate the campaign and adjust
                    </AccordionHeader>
                    <AccordionBody className="border-0 text-white pl-16">
                      Mauris ornare libero et pharetra hendrerit. Cura elementum
                      lectus quis tellus pretium, vitae lobortis dui sagittis
                      aliquam et enim vel semon anticus
                    </AccordionBody>
                  </Accordion>
                </Fragment>
              </div>
              <div>
                <img src={img2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordions;
