import React from "react";
import Header from "../../components/views/home/Header";
import Service from "../../components/views/home/Services";
import Details from "../../components/views/home/Details";
import Features from "../../components/views/home/Features";
import Accordion from "../../components/views/home/Accordion";
import Customer from "../../components/views/home/Customer";
import Carousel from "../../components/views/home/Carousel";
import img from "../../assets/images/invitation-background.jpg";
import Contact from "../../components/views/home/Contact";

function Home() {
  return (
    <div>
      <Header />
      <Service />
      <Details />
      <Features />
      <Accordion />
      <Customer />
      <div className="bg-[#fcfafb]">
        <h1 className="text-center text-[#223150] text-2xl font-bold pt-14 pb-4">
          Trusted by over <span className="text-[#0092ff]">5000</span> customers
          worldwide
        </h1>
        <Carousel />
        <div className="flex justify-center mt-32">
          <div className="w-[95%] md:w-[90%] xl:w-[1140px]">
            <div
              className="bg-cover bg-no-repeat rounded-3xl py-32 w-full bg-[image:var(--image-url)]"
              style={{ "--image-url": `url(${img})` }}
            >
              <div className="text-center text-white">
                <h1 className="text-4xl font-bold">
                  Find the right influencer for your product
                </h1>
                <div className="flex justify-center">
                  <p className="text-lg pt-8 xl:w-[500px] w-[90%] md:w-[80%]">
                    Eu convallis arcu ultrices in. Mauris ornare libero et
                    pharetra hendrerit. Curabitur elementum lectus quis vioc
                    tellus
                  </p>
                </div>
                <button className="hover:bg-transparent bg-[#16c66d] hover:border-white hover:border-[1px] rounded-full py-4 mt-12 px-12 text-base font-semibold ">
                  Get free quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}

export default Home;
