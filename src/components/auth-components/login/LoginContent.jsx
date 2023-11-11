import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginContent = () => {
  const [emailValidation, setEmailValidation] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(false);
  const [emptyValidation, setEmptyValidation] = useState(false);
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Validation checks
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!email || !password) {
      console.log("Please fill in all fields.");
      setEmptyValidation(true);
      return;
    } else {
      setEmptyValidation(false);
    }

    if (!emailPattern.test(email)) {
      console.log("Invalid email format.");
      setEmailValidation(true);
      return;
    } else {
      setEmailValidation(false);
    }
    if (!passwordPattern.test(password)) {
      console.log(
        "Password should contain at least 6 characters with one uppercase and one lowercase letter."
      );
      setPasswordValidation(true);
      return;
    } else {
      setPasswordValidation(false);
    }
  };
  return (
    <div>
      <div>
        {" "}
        <div className="flex justify-center mt-10 ">
          <div className="box-border h-full w-3/6 p-4 border-2  bg-gradient-to-r  rounded-lg bg-slate-50 ">
            <div className="flex justify-center">
              <img
                src="/images/logo/logo-no-background.png"
                width="160"
                height="30"
              />
            </div>
            <div className="flex justify-center mt-2 text-black text-xl font-bold ">
              <span className="cursor-pointer">Login</span>
            </div>
            <div className="flex justify-center mt-1 text-inherit hover:text-cyan-900 ">
              <span
                className="cursor-pointer"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Not yet registered? Registration
              </span>
            </div>

            <form onSubmit={handleLogin} className="mt-4 px-36 py">
              <label class="block mt-3">
                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Email
                </span>
                <input
                  type="text"
                  name="email"
                  ref={emailRef}
                  class="mt-1 px-3 py-2 bg-white border text-black shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Enter your Email"
                />
              </label>

              <label class="block mt-3">
                <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                  Password
                </span>

                <input
                  type="text"
                  name="email"
                  ref={passwordRef}
                  class="mt-1 px-3 py-2 bg-white border shadow-sm text-black border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                  placeholder="Enter your Passwprd"
                />
              </label>

              <div className="">
                {emptyValidation && (
                  <label
                    for="promo"
                    className="mt-2 text-lg text-red-600 font-semibold ml-12"
                  >
                    Please complete all required fields.
                  </label>
                )}
                {passwordValidation && (
                  <label
                    for="promo"
                    className="mt-2 text-lg text-red-600 font-semibold ml-12"
                  >
                    Please enter a valid password.
                  </label>
                )}
                {emailValidation && (
                  <label
                    for="promo"
                    className="mt-2 text-lg text-red-600 font-semibold ml-12"
                  >
                    Please enter a valid email address.
                  </label>
                )}
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 ml-24 w-48 px-5 mb-2 py-2 text-sm text-white uppercase mt-4 border-gray-800 rounded-md"
              >
                Log In
              </button>
            </form>
            <div className="flex flex-col ml-60">
              <label for="promo" className="mt-2 text-xs ml-14 ">
                or LogIn with
              </label>
              <div className="flex flex-row">
                <button
                  type="submit"
                  className="bg-blue-600 w-20 h-8 hover:bg-red-600 text-white text-xs mt-4 border-gray-800 rounded-md"
                >
                  Google
                </button>

                <button
                  type="submit"
                  className="bg-blue-600  w-20 ml-8 hover:bg-red-600 text-xs text-white uppercase mt-4 border-gray-800 rounded-md"
                >
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginContent;
