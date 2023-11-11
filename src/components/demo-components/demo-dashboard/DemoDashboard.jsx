import React, { useState } from "react";
import Chart from "./Chart";
import HeaderSam from "./HeaderSam";
import RightSidebar from "./RightSidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDownShortWide,
  faArrowTrendUp,
  faArrowUpRightDots,
  faBullseye,
  faCartShopping,
  faChartLine,
  faCircleQuestion,
  faClock,
  faClockRotateLeft,
  faComment,
  faDollarSign,
  faGem,
  faHourglass,
  faKeyboard,
  faMaximize,
  faRightToBracket,
  faSignal,
  faTrophy,
  faUser,
  faUserPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import Charts from "./Charts";

const DemoDashboard = () => {
  const [activeColumn, setActiveColumn] = useState("trade");

  const toggleColumn = (columnName) => {
    if (activeColumn === columnName) {
      setActiveColumn(null); // Toggle off the active column
    } else {
      setActiveColumn(columnName); // Toggle on a new active column
    }
  };
  const toggleFullScreen = () => {
    const element = document.documentElement;

    if (!document.fullscreenElement) {
      // If fullscreen mode is not active, go into fullscreen
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    } else {
      // If fullscreen mode is active, exit fullscreen
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  };
  return (
    <div className="bg-gray-800 ">
      <div className="bg-gray-800  font-quicksand  text-gray-300">
        <div className="flex  flex-col h-screen bg-gray-800 ">
          <HeaderSam />
          <div className="flex flex-row  bg-gray-800">
            <div class="flex-col mt-1  ">
              <div className="p-1 rounded  hover:bg-gray-900 text-center cursor-pointer ">
                <div className="">
                  <FontAwesomeIcon
                    icon={faChartLine}
                    style={{ width: "20px", height: "20px" }}
                    className=""
                  />
                  <div class="  text-xs">Trading</div>
                </div>
              </div>
              <div className="p-1 rounded  text-center cursor-pointer  hover:bg-gray-900">
                <div className="cursor-pointer hover:rounded-md">
                  <FontAwesomeIcon
                    icon={faDollarSign}
                    style={{ width: "20px", height: "20px" }}
                    className=""
                  />
                  <div class="p-1 font-thin text-xs">Finance</div>
                </div>
              </div>
              <div className="p-1 hover:bg-gray-900 rounded  text-center cursor-pointer">
                <div className="cursor-pointer hover:bg-gray-900 hover:rounded-md">
                  <FontAwesomeIcon
                    icon={faUser}
                    style={{ width: "20px", height: "20px" }}
                    className=""
                  />
                  <div class="why-list__title font-thin text-xs ">Profile</div>
                </div>
              </div>
              <div className="p-1 hover:bg-gray-900 rounded  text-center cursor-pointer">
                <div className="cursor-pointer hover:bg-gray-900 hover:rounded-md">
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    style={{ width: "20px", height: "20px" }}
                    className=""
                  />
                  <div class="why-list__title font-thin text-xs ">Market</div>
                </div>
              </div>
              <div className="p-1 hover:bg-gray-900 rounded  text-center cursor-pointer">
                <div className="cursor-pointer hover:bg-gray-900 hover:rounded-md">
                  <FontAwesomeIcon
                    icon={faGem}
                    style={{ width: "20px", height: "20px" }}
                    className=""
                  />
                  <div class="why-list__title font-thin text-xs ">
                    Achievements
                  </div>
                </div>
              </div>
              <div className="p-1 hover:bg-gray-900 rounded  text-center cursor-pointer">
                <div className="cursor-pointer hover:bg-gray-900 hover:rounded-md">
                  <FontAwesomeIcon
                    icon={faComment}
                    style={{ width: "20px", height: "20px" }}
                    className=""
                  />
                  <div class="why-list__title font-thin text-xs">Chat</div>
                </div>
              </div>

              <div className="p-1 hover:bg-gray-900 rounded text-center cursor-pointer">
                <div className="cursor-pointer hover:bg-gray-900 hover:rounded-md">
                  <FontAwesomeIcon
                    icon={faCircleQuestion}
                    style={{ width: "20px", height: "20px" }}
                    className=""
                  />
                  <div class="why-list__title font-thin text-xs">Help</div>
                </div>
              </div>
              <div className="flex flex-col just ">
                <div className="p-1 hover:bg-gray-900 rounded text-center cursor-pointer justify-end">
                  <div className="cursor-pointer hover:bg-gray-900 hover:rounded-md ">
                    <FontAwesomeIcon
                      icon={faUserPlus}
                      style={{ width: "20px", height: "20px" }}
                      className=""
                    />
                    <div class="why-list__title font-thin text-xs ">Login</div>
                  </div>
                </div>
                <div className="p-1 hover:bg-gray-900 rounded text-center cursor-pointer justify-end">
                  <div className="cursor-pointer  hover:bg-gray-900 hover:rounded-md">
                    <FontAwesomeIcon
                      icon={faRightToBracket}
                      style={{ width: "20px", height: "20px" }}
                      className=" "
                    />
                    <div class="why-list__title font-thin text-xs ">SignUp</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="grid flex-grow grid-cols-12  gap-1 mt-1 ">
              <div
                class={`col-start-1    ${
                  activeColumn === "trade" ||
                  activeColumn === "signal" ||
                  activeColumn === "social"
                    ? "col-end-10"
                    : "col-end-12"
                }`}
              >
                <Charts />
              </div>

              <div class="...">
                <div className="flex-col ">
                  <div className="border border-gray-500 rounded p-2  text-center cursor-pointer">
                    <p>Timer: 00:00:00</p>
                    <FontAwesomeIcon icon={faClock} className=" text-white" />
                  </div>
                  <div className="border border-gray-500 rounded p-2 mt-2 text-center cursor-pointer">
                    <p>
                      <div>Amount:</div>{" "}
                      <div className="font-semibold">$10</div>
                    </p>
                    <div className="flex flex-row">
                      <button class="box-border h-5 w-8 border text-sm hover:bg-gray-900">
                        -
                      </button>
                      <button class="box-border h-5 w-8  border text-sm hover:bg-gray-900">
                        $
                      </button>
                      <button class="box-border h-5 w-8 border text-sm hover:bg-gray-900">
                        +
                      </button>
                    </div>
                  </div>
                  <div className="border-dotted border border-gray-500 rounded p-2 mt-2 text-center ">
                    <div className="h-25">
                      <p className="mb-1 text-gray-500 text-sm">Payout</p>
                      <p className="text-green-500 text-sm mb-1">+84</p>
                      <p className="text-green-500 text-sm mb-1">$64</p>
                      <p className="text-gray-500 text-sm mb-1">Profit</p>
                      <p className="text-gray-500 text-sm mb-1">$80</p>
                    </div>
                  </div>
                  <div className=" bg-green-600 border border-gray-500 rounded p-2 mt-2 text-center hover:bg-green-900 ">
                    <div className="flex flex-row">
                      <div className="w-30 h-30">
                        <img
                          src="/images/dashboard/high.png"
                          alt="Icon 2"
                          class="lazy"
                          loading="lazy"
                        />
                      </div>
                      <div className="ml-1 text-xs mt-2">
                        {" "}
                        <button className="text-green-950 font-bold ">
                          HIGHER
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className=" bg-red-600 border border-gray-500 rounded p-2 mt-2 text-center hover:bg-red-900">
                    <div className="flex flex-row">
                      <div className="w-30 h-30">
                        <img
                          src="/images/dashboard/low.png"
                          alt="Icon 2"
                          class="lazy"
                          loading="lazy"
                        />
                      </div>
                      <div className="ml-1 text-xs mt-2">
                        <button className=" text-green-950 font-bold  ">
                          LOWER
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <RightSidebar value={activeColumn} />
            </div>

            <div class="flex-col bottom-0 right-0 mt-1 ">
              <div className="rounded p-1 hover:bg-gray-900 text-center cursor-pointer">
                <div
                  onClick={() => {
                    toggleColumn("trade");
                  }}
                  className="cursor-pointer  hover:rounded-md"
                >
                  <FontAwesomeIcon
                    icon={faClockRotateLeft}
                    style={{ width: "20px", height: "20px" }}
                    className="  cursor-pointer"
                  />
                  <div class="why-list__title  text-xs   ">Trades</div>
                </div>
              </div>
              <div className=" rounded p-1 text-center cursor-pointer  hover:bg-gray-900">
                <div
                  onClick={() => {
                    toggleColumn("signal");
                  }}
                  className="cursor-pointer  hover:rounded-md"
                >
                  <FontAwesomeIcon
                    icon={faSignal}
                    style={{ width: "20px", height: "20px" }}
                    className=" mt-1 cursor-pointer   "
                  />
                  <div class="why-list__title text-xs   ">Signals</div>
                </div>
              </div>
              <div className="p-1 hover:bg-gray-900 rounded  text-center cursor-pointer">
                <div
                  onClick={() => {
                    toggleColumn("social");
                  }}
                  className="cursor-pointer hover:bg-gray-900 hover:rounded-md"
                >
                  <FontAwesomeIcon
                    icon={faUsers}
                    style={{ width: "20px", height: "20px" }}
                    className=" mt-1 cursor-pointer"
                  />
                  <div class="why-list__title  text-xs   ">Social Trading</div>
                </div>
              </div>
              <div className="p-1 hover:bg-gray-900 rounded  text-center cursor-pointer">
                <div className="cursor-pointer hover:bg-gray-900 hover:rounded-md">
                  <FontAwesomeIcon
                    icon={faBullseye}
                    style={{ width: "20px", height: "20px" }}
                    className=" cursor-pointer   "
                  />
                  <div class="why-list__title  text-xs   ">Express Trades</div>
                </div>
              </div>
              <div className="p-1 hover:bg-gray-900 rounded  text-center cursor-pointer">
                <div className="cursor-pointer hover:bg-gray-900 hover:rounded-md">
                  <FontAwesomeIcon
                    icon={faTrophy}
                    style={{ width: "20px", height: "20px" }}
                    className=" cursor-pointer"
                  />
                  <div class="why-list__title  text-xs   ">Tournaments</div>
                </div>
              </div>
              <div className="p-1 hover:bg-gray-900 rounded  text-center cursor-pointer">
                <div className="cursor-pointer hover:bg-gray-900 hover:rounded-md">
                  <FontAwesomeIcon
                    icon={faHourglass}
                    style={{ width: "20px", height: "20px" }}
                    className=" cursor-pointer   "
                  />
                  <div class="why-list__title  text-xs   ">Pending Trades</div>
                </div>
              </div>
              <div className="p-1 hover:bg-gray-900 rounded text-center cursor-pointer ">
                <div className="flex-col justify-end">
                  <div
                    className="cursor-pointer hover:bg-gray-900 hover:rounded-md "
                    onClick={toggleFullScreen}
                  >
                    <FontAwesomeIcon
                      icon={faMaximize}
                      style={{ width: "20px", height: "20px" }}
                      className=" cursor-pointer"
                    />
                    <p class="why-list__title  text-xs   ">Full Screen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoDashboard;
