import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function Contact() {
  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    industry: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    product: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      industry: "",
      product: "",
    },
    validationSchema: SignupSchema,
    validateOnMount: true,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className="my-36">
      <div className="flex justify-center">
        <div className="w-[95%] md:w-[90%] xl:w-[1140px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:gap-32 lg:gap-10 gap-x-20">
            <div className="flex justify-center items-center">
              <div className="text-start">
                <p className="text-red-500 font-medium">GET QUOTE</p>
                <h1 className="text-[#223150] font-bold text-[32px] pb-5">Submit the form for quote</h1>
                <p className="pb-4 text-[#5e6576]">
                  Aliquam et enim vel sem pulvinar suscipit sit amet quis lorem.
                  Sed risus ipsum, egestas sed odio in, pulvinar euismod ipsum.
                  Sed ut enim non nunc fermentum dictum et sit amet erat.
                  Maecenas
                </p>
                <li className="pb-2 text-[#5e6576]">
                  Vel maximus nunc aliquam ut. Donec semper, magna a pulvinar
                </li>
                <li className="pb-2 text-[#5e6576]">
                  Suscipit sit amet quis lorem. Sed risus ipsum, egestas mare
                </li>
                <li className="pb-2 text-[#5e6576]">Sem pulvinar suscipit sit amet quis lorem. Sed risus</li>
              </div>
            </div>
            <form onSubmit={formik.handleSubmit}>
              <input
                className="border-[1px] rounded-lg border-gray-400 w-full mb-6 py-3 px-7 placeholder:text-gray-600 text outline-none"
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              <input
                className="border-[1px] rounded-lg border-gray-400 w-full mb-6 py-3 px-7 placeholder:text-gray-600 text outline-none"
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <input
                className="border-[1px] rounded-lg border-gray-400 w-full mb-6 py-3 px-7 placeholder:text-gray-600 text outline-none"
                id="industry"
                name="industry"
                type="text"
                placeholder="Industry"
                onChange={formik.handleChange}
                value={formik.values.industry}
              />
              <input
                className="border-[1px] rounded-lg border-gray-400 w-full mb-6 py-3 px-7 placeholder:text-gray-600 text outline-none"
                id="product"
                name="product"
                type="text"
                placeholder="Your product"
                onChange={formik.handleChange}
                value={formik.values.product}
              />
              <button
                type="submit"
                className="w-full rounded-full py-3 text-base font-medium hover:bg-transparent bg-[#0092ff] hover:border-[#0092ff] hover:border-[1px] text-white hover:text-[#0092ff]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
