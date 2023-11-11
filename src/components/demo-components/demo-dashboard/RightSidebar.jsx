import React, { useState } from "react";

const RightSidebar = ({ value }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      {value === "trade" && (
        <div class="col-start-11 col-end-13 ">
          <div class="w-full">
            <div class="bg-gray-900 text-center p-2 rounded-lg">
              <button class="tab-button">Trades</button>
            </div>
            <div class="flex justify-center items-center ">
              <div class="   text-center p-2 font-semibold bg-gray-700 w-50 rounded-md">
                <button class="tab-button text-white  border-r-2 text-sm ">
                  Open
                </button>
              </div>
              <div class="  bg-gray-800 text-center p-2 font-semibold hover:bg-gray-700 w-50 rounded-md">
                {" "}
                <button class="tab-button text-white text-sm ">Close</button>
              </div>
            </div>
            <div className="ml-14 text-sm"> No Placed trades</div>
          </div>
        </div>
      )}
      {value === "signal" && (
        <div class="col-start-11 col-end-13 ">
          <div class="w-full">
            <div class="bg-gray-900 text-center p-2 rounded-lg">
              <button class="tab-button">Signals</button>
            </div>
            <div class="flex justify-center items-center ">
              <div class="  bg-gray-800 text-center p-2 font-semibold hover:bg-cyan-950 w-50 ">
                <button class="tab-button text-white  border-r-2 text-sm">
                  Updates
                </button>
              </div>
              <div class="  bg-gray-800  text-center p-2 font-semibold hover:bg-cyan-950 w-50">
                {" "}
                <button class="tab-button text-white text-sm">All</button>
              </div>
            </div>
            <div className="flex flex-row ">
              <div className="flex-col">
                <div className="text-sm">AUD/CHF</div>
                <div className="text-sm">$10</div>
                <div className="text-xs text-gray-500">copied 0 times</div>
              </div>
              <div className=" flex-co ml-10 w-5">
                <div>||</div>
                <div>||</div>
              </div>
              <div className="">
                <div>33.44</div>
                <div className=" bg-green-600 border border-gray-500 rounded-lg  text-center hover:bg-green-900 w-20 h-5">
                  <button className=" text-xs flex justify-center text-white">
                    Copy Signal
                  </button>
                </div>
                <div className="text-xs text-gray-500 ">21 mins ago</div>
              </div>
            </div>
          </div>
        </div>
      )}
      {value === "social" && (
        <div class="col-start-11 col-end-13 ">
          <div class="w-full">
            <div class="bg-gray-900 text-center p-2 rounded-lg">
              <button class="tab-button">Social Trading</button>
            </div>
            <div class="bg-gray-800 text-center p-2 relative text-xs">
              <span
                class="tab-button cursor-pointer text-sm"
                onClick={toggleDropdown}
              >
                Top Ranked Trades
              </span>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-44 border-blue-700 border-2 ml-16 bg-gray-800 p-3 text-start rounded-lg">
                  <div className="tab-button text-white mb-2">
                    Top ranked traders for 24h
                  </div>
                  <div className="tab-button text-white mb-2">
                    Top ranked trades
                  </div>
                  <div className="tab-button text-white mb-2">
                    Top 100 trades
                  </div>
                  <div className="tab-button text-white mb-2">Search</div>
                  <div className="tab-button text-white mb-2">
                    List of copied traders
                  </div>
                </div>
              )}
            </div>
            <div class="flex justify-center items-center ">
              <div class="  bg-gray-700 text-center p-2 font-semibold hover:bg-cyan-950 w-50 rounded-md">
                <button class="tab-button text-white  border-r-2 text-sm">
                  Updates
                </button>
              </div>
              <div class="  bg-gray-700  text-center p-2 font-semibold hover:bg-cyan-950 w-50 rounded-md">
                {" "}
                <button class="tab-button text-white text-sm">All</button>
              </div>
            </div>
            <div class="bg-gray-800 text-center p-1">
              <span class="tab-button text-xs ">Demo Trading</span>
            </div>
            <div class="bg-gray-700 text-start pt-1">
              <ul role="list" class="divide-y divide-slate-200 p-1">
                <li class="flex first:pt-0 last:pb-0 mt-2">
                  <img
                    class="h-10 w-10 rounded-full "
                    src="/images/dashboard/man.png"
                    // style={{ width: "35px", height: "35px" }}
                    alt=""
                  />
                  <div class="flex flex-row ">
                    <div class="ml-2 flex flex-col">
                      <span class="text-sm font-medium text-white-900 ">
                        Sid
                      </span>
                      <span class="text-sm text-slate-500 truncate">
                        USD/AUD
                      </span>
                    </div>
                    <div class="  flex  flex-col ">
                      <span class="text-xs text-green-500 truncate ml-14">
                        +$920
                      </span>
                      <span class="text-xs text-gray-500 truncate ml-6">
                        29 minutes ago
                      </span>
                    </div>
                  </div>
                </li>
                {/*  */}
                <li class="flex first:pt-0 last:pb-0 mt-2">
                  <img
                    class="h-10 w-10 rounded-full "
                    src="/images/dashboard/man.png"
                    // style={{ width: "35px", height: "35px" }}
                    alt=""
                  />
                  <div class="flex flex-row">
                    <div class="ml-2 flex flex-col ">
                      <span class="text-sm font-medium text-white-900">
                        Sid
                      </span>
                      <span class="text-sm text-slate-500 truncate">
                        USD/AUD
                      </span>
                    </div>
                    <div class="  flex  flex-col  ">
                      <span class="text-xs text-green-500 truncate ml-14">
                        +$920
                      </span>
                      <span class="text-xs text-gray-500 truncate ml-6">
                        29 minutes ago
                      </span>
                    </div>
                  </div>
                </li>
                {/*  */}
                <li class="flex first:pt-0 last:pb-0 mt-2">
                  <img
                    class="h-10 w-10 rounded-full "
                    src="/images/dashboard/man.png"
                    // style={{ width: "35px", height: "35px" }}
                    alt=""
                  />
                  <div class="flex flex-row">
                    <div class="ml-2 flex flex-col ">
                      <span class="text-sm font-medium text-white-900">
                        Sid
                      </span>
                      <span class="text-sm text-slate-500 truncate">
                        USD/AUD
                      </span>
                    </div>
                    <div class="  flex  flex-col  ">
                      <span class="text-xs text-green-500 truncate ml-14">
                        +$920
                      </span>
                      <span class="text-xs text-gray-500 truncate ml-6">
                        29 minutes ago
                      </span>
                    </div>
                  </div>
                </li>
                {/*  */}
                <li class="flex first:pt-0 last:pb-0 mt-2">
                  <img
                    class="h-10 w-10 rounded-full "
                    src="/images/dashboard/man.png"
                    // style={{ width: "35px", height: "35px" }}
                    alt=""
                  />
                  <div class="flex flex-row">
                    <div class="ml-2 flex flex-col ">
                      <span class="text-sm font-medium text-white-900">
                        Sid
                      </span>
                      <span class="text-sm text-slate-500 truncate">
                        USD/AUD
                      </span>
                    </div>
                    <div class="  flex  flex-col  ">
                      <span class="text-xs text-green-500 truncate ml-14">
                        +$920
                      </span>
                      <span class="text-xs text-gray-500 truncate ml-6">
                        29 minutes ago
                      </span>
                    </div>
                  </div>
                </li>
                {/*  */}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RightSidebar;
