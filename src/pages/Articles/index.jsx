import React from "react";
import img from "../../assets/images/article-details-large.jpg";
import img2 from "../../assets/images/article-details-small.jpg";
import { useNavigate } from "react-router-dom";

function Articles() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="bg-[#fcfafb] flex justify-center">
        <div className="text-start w-[900px]  pt-28 pb-24">
          <h1 className="text-[43px] text-[#272556] font-semibold">
            Article Details
          </h1>
        </div>
      </div>
      <div className="justify-center flex mt-20">
        <div className="w-[93%] md:w-[90%] lg:w-[85%] xl:w-[1140px]">
          <img src={img} className="width-full" alt="" />
          <div className="text-start lg:px-24 lg:pt-20 px-0 pt-0">
            <p className="text-[#565578] text-base py-2">
              Consulted he eagerness unfeeling deficient existence of. Calling
              nothing end fertile for venture way boy. Esteem spirit temper too
              say adieus who direct esteem. It esteems luckily mr or picture
              placing drawing no. Apartments frequently or motionless on
              reasonable projecting expression. Last sentence of words thus
              better.
            </p>
            <p className="text-[#565578] text-base py-2">
              Ye on properly handsome returned throwing am no whatever. In
              without wishing he of picture no exposed talking minutes.
              Curiosity continual belonging offending so explained it exquisite.
              Do remember to followed yourself material mr recurred carriage.
              Way mrs end gave fat skin brown yesterday tall walk fact bed.
            </p>
            <h1 className="text-[#272556] text-[32px] pt-6 font-semibold">
              Advantages of working with this package
            </h1>
            <p className="text-[#565578] text-base py-2">
              High drew west we no or at john. About or given on witty event. Or
              sociable up material bachelor bringing landlord confined. Busy so
              many in hung easy find well up. So of exquisite my an explained
              remainder. Dashwood denoting securing be on perceive my laughing
              so. Ye on properly handsome returned throwing am no whatever.
            </p>
            <p className="text-[#565578] text-base py-2">
              Sociable on as carriage my position weddings raillery consider.
              Peculiar trifling absolute and wandered vicinity property yet. The
              and collecting motionless difficulty son. His hearing staying ten
              colonel met. Word drew six easy four dear cold deny. Fulfilled
              direction use continual set him propriety continued. Saw met
              applauded favourite deficient.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 mt-12 gap-0 lg:gap-5 xl:gap-20">
            <div className="flex items-start gap-2">
              <p className="text-white text-xl rounded-full px-3 py-1 bg-[#0092ff]">
                1
              </p>
              <div>
                <h1 className="text-[#272556] pb-4 leading-5 text-xl font-semibold">
                  High Quality Service
                </h1>
                <p className="text-[#565578] text-base">
                  Features include an eye catching morphtext in the header,
                  details lightbox for more details information
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <p className="text-white text-xl rounded-full px-3 py-1 bg-[#0092ff]">
                1
              </p>
              <div>
                <h1 className="text-[#272556] pb-4 leading-5 text-xl font-semibold">
                  High Quality Service
                </h1>
                <p className="text-[#565578] text-base">
                  Features include an eye catching morphtext in the header,
                  details lightbox for more details information
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <p className="text-white text-xl rounded-full px-3 py-1 bg-[#0092ff]">
                1
              </p>
              <div>
                <h1 className="text-[#272556] pb-4 leading-5 text-xl font-semibold">
                  High Quality Service
                </h1>
                <p className="text-[#565578] text-base">
                  Features include an eye catching morphtext in the header,
                  details lightbox for more details information
                </p>
              </div>
            </div>
          </div>
          <div className="text-start lg:px-24 lg:pt-20 px-0 pt-0">
            <p className="text-[#565578] text-base py-2">
              Consulted he eagerness unfeeling deficient existence of. Calling
              nothing end fertile for venture way boy. Esteem spirit temper too
              say adieus who direct esteem. It esteems luckily mr or picture
              placing drawing no. Apartments frequently or motionless on
              reasonable projecting expression. Last sentence of words thus
              better.
            </p>
            <h1 className="text-[#272556] mb-6 text-[32px] pt-6 font-semibold">
              New elements added to the package
            </h1>
            <img src={img2} alt="" />
            <p className="text-[#565578] text-base py-2 mt-10">
              Ye on properly handsome returned throwing am no whatever. In
              without wishing he of picture no exposed talking minutes.
              Curiosity continual belonging offending so explained it exquisite.
              Do remember to followed yourself material mr recurred carriage.
              Way mrs end gave fat skin brown yesterday tall walk fact bed.
            </p>
            <p className="text-[#565578] text-base py-2">
              High drew west we no or at john. About or given on witty event. Or
              sociable up material bachelor bringing landlord confined. Busy so
              many in hung easy find well up. So of exquisite my an explained
              remainder. Dashwood denoting securing be on perceive my laughing
              so. Ye on properly handsome returned throwing am no whatever.
            </p>
            <div className="p-7 bg-[#f9f8f8]">
              <h1 className="text-[#272556] text-[32px] font-semibold">
                Visitors love a beautiful and efficient website
              </h1>
              <p className="text-[#565578] text-base py-2">
                Bringing so sociable felicity supplied mr. September suspicion
                far him two acuteness perfectly. Covered as an examine so
                regular of. Ye astonished friendship remarkably no. Window
                admire matter praise you bed whence. Delivered ye sportsmen
                zealously arranging frankness estimable as. Nay any article
                enabled musical shyness yet sixteen yet blushes. Entire ously
                arranging frankne its the did figure wonder off.
              </p>
            </div>
            <p className="text-[#565578] text-base py-2 pt-6">
              Ye on properly handsome returned throwing am no whatever. In
              without wishing he of picture no exposed talking minutes.
              Curiosity continual belonging offending so explained it exquisite.
              Do remember to followed yourself material mr recurred carriage.
              Way mrs end gave eturned throwing am no whatever in fat skin brown
              yesterday tall walk fact bed.
            </p>
            <p className="text-[#565578] text-base py-1 pt-6 flex gap-2">
              <li className="font-semibold">Card slider</li> for testimonials,
              statistics numbers for important values image slider for logos
            </p>
            <p className="text-[#565578] text-base py-1 flex gap-2">
              <li className="font-semibold">Dropdown navigation </li> and useful
              extra pages for article details, terms conditions and privacy
              policy
            </p>
            <p className="text-[#565578] text-base py-1 flex gap-2">
              <li className="font-semibold">Clean light design</li> mixing
              purple, orange and gray hues with one color backgrounds to
              maximize
            </p>
            <p className="text-[#565578] text-base py-1 flex gap-2">
              <li className="font-semibold">Together with</li> touches of call
              to action green, the overall landing page design will showcase
              your app
            </p>
            <p className="text-[#565578] text-base py-1 flex gap-2">
              <li className="font-semibold">This template </li> is built with
              HTML, CSS and Bootstrap to ensure the highest flexibility for all
              users
            </p>
            <button
              onClick={() => {
                navigate("/");
              }}
              className="text-white hover:text-[#0092ff] bg-[#0092ff] hover:bg-transparent rounded-3xl py-3 px-9 hover:border-[1px] hover:border-[#0092ff] mb-20 font-semibold text-base mt-9"
            >
              Get quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Articles;
