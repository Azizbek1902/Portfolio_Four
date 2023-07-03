import React, { useState } from "react";

function Login() {
  const [registerForm, setRegisterForm] = useState(true);
  return (
    <div>
      <div className="bg-[#fff2dc]">
        <div className="text-center py-20">
          <h1 className="text-5xl font-semibold">
            {registerForm ? "Log In" : "Sign Up"}
          </h1>
        </div>
      </div>
      <div className="flex justify-center my-20">
        {registerForm ? (
          <div className="text-start w-[95%] md:w-[85%] xl:w-[546px]">
            <p className="text-base pb-8 flex gap-2 text-[#565578]">
              You don't have a password? Then please
              <u
                className="text-[#6168ff]"
                onClick={() => {
                  setRegisterForm(false);
                }}
              >
                Sign Up
              </u>
            </p>
            <input
              type="text"
              placeholder="Email address"
              className="p-4 rounded-md text-base placeholder:text-[#565578] border-[1px] w-full border-[#ced4da] text-[#212529] mb-8"
            />
            <input
              type="text"
              placeholder="Password"
              className="p-4 rounded-md text-base placeholder:text-[#565578] border-[1px] w-full border-[#ced4da] text-[#212529] mb-8"
            />
            <div className="flex gap-2 mb-8 items-center">
              <input type="checkbox" class="w-4 h-4 checked:bg-blue-500 ..." />
              <p>
                I agree with the site's stated <u>Privacy Policy</u> and{" "}
                <u>Terms & Conditions</u>
              </p>
            </div>
            <button className="text-white hover:bg-white bg-[#f25c05] hover:text-[#f25c05] hover:border-[1px] hover:border-[#f25c05] font-semibold text-base py-3 rounded-3xl w-full">
              Log In
            </button>
          </div>
        ) : (
          <div className="text-start w-[95%] md:w-[85%] xl:w-[546px]">
            <p className="text-base pb-8 text-[#565578]">
              Fill out the form below to sign up for the service. Already signed
              up? Then just
              <u
                className="text-[#6168ff] pl-3"
                onClick={() => {
                  setRegisterForm(true);
                }}
              >
                Log In
              </u>
            </p>
            <input
              type="text"
              placeholder="Email address"
              className="p-4 rounded-md text-base placeholder:text-[#565578] border-[1px] w-full border-[#ced4da] text-[#212529] mb-8"
            />
            <input
              type="text"
              placeholder="Your name"
              className="p-4 rounded-md text-base placeholder:text-[#565578] border-[1px] w-full border-[#ced4da] text-[#212529] mb-8"
            />
            <input
              type="text"
              placeholder="Password"
              className="p-4 rounded-md text-base placeholder:text-[#565578] border-[1px] w-full border-[#ced4da] text-[#212529] mb-8"
            />
            <div className="flex gap-2 mb-8 items-center">
              <input type="checkbox" class="w-4 h-4 checked:bg-blue-500 ..." />
              <p>
                I agree with the site's stated <u>Privacy Policy</u> and{" "}
                <u>Terms & Conditions</u>
              </p>
            </div>
            <button className="text-white hover:bg-white bg-[#f25c05] hover:text-[#f25c05] hover:border-[1px] hover:border-[#f25c05] font-semibold text-base py-3 rounded-3xl w-full">
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Login;
