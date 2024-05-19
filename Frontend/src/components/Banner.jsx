import React from "react";
import img1 from "../images/stack.png";

// Banner Component
function Banner() {
  return (
    <>
      <div className="max-w-screen-2xl md:px-20 px-4 flex flex-col md:flex-row ">
        <div className="w-full md:w-1/2 md:order-1 mt-14 md:mt-32 order-2">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, Welcome Here To Learn Something{" "}
              <p className="text-pink-500">New Everyday!!</p>{" "}
            </h1>
            <div className="md:w-full">
              {/* Changed here: Removed the wrapping div */}
              <p className="text-xl md:w-full">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                aspernatur officia accusamus quos nemo saepe minima placeat
                nesciunt quisquam. Distinctio eaque, molestiae culpa sapiente hic
                adipisci quidem asperiores recusandae repellendus.
              </p>
            </div>
            
            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>

          <button className="btn btn-active btn-secondary mt-6">
            Secondary
          </button>
        </div>
        <div className="w-full md:w-1/2 order-1">
          <img
            src={img1}
            className="w-full md:w-80 lg:w-auto md:max-w-lg lg:max-w-xl object-contain md:ml-auto md:mr-0 md:mt-5"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
