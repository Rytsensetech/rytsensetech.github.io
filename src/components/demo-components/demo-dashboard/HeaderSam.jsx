import React, { useState } from "react";


import { useNavigate } from "react-router-dom";
import MobileHeader from "../../home-components/mobile-header/MobileHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGift,
  faKeyboard,
  faSackDollar,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const HeaderSam = () => {
  const navigate = useNavigate();
  const [langOpen, setLangOpen] = useState(false);
  const [mobOpen, setMobOpen] = useState(false);
  const toggleLangClass = () => {
    setLangOpen(!langOpen);
  };
  const toggleMobileHeader = () => {
    setMobOpen(!mobOpen);
  };
  const [isBoxVisible, setIsBoxVisible] = useState(false);

  const toggleBoxVisibility = () => {
    setIsBoxVisible(!isBoxVisible);
  };
  return (
    <div class="bg-gray-900  p-1">
      <div class="flex flex-row ">
        <div class="flex items-center ">
          <a
            class="ml-3"
            onClick={() => {
              navigate("/");
            }}
          >
            <img src="/images/logo/logo-new.png" width="60" height="45" />
          </a>
          <div
            class="header__info info font-bold text-lg hover:cursor-pointer text-white "
            onClick={() => {
              navigate("/");
            }}
          >
            Dooption
          </div>
          <div class="box-border ml-8 h-10 w-16 border-1 Preview border-gray-800 rounded-sm">
            <FontAwesomeIcon
              icon={faStar}
              style={{ width: "20px", height: "20px" }}
              className="mt-2 cursor-pointer text-white ml-2.5"
            />
          </div>
        </div>
        <div class="flex justify-end  w-screen ">
          <div class="box-border h-10 w-40 border-1 Preview border-yellow-400 rounded-lg mr-2">
            <div className="flex flex-row items-center ml-3.5">
              <FontAwesomeIcon icon={faGift} className="mt-1 text-amber-200" />
              <div className="flex-row">
                <div className="ml-2.5 mt-1   text-xs font-thin text-amber-300">
                  GET 50% BONUS
                </div>
                <div className="ml-2.5  text-amber-300 text-xs font-thin ">
                  Open real account
                </div>
              </div>
            </div>
          </div>
          <div class="box-border h-10 w-36 border-1 Preview border-gray-800 rounded-lg  mr-2">
            <div
              className="flex justify-center mt-2 text-white"
              onClick={toggleBoxVisibility}
            >
              $ 49999.8
            </div>
          </div>
          <div class="box-border h-10 w-36 border-1 Preview border-lime-900 rounded-lg  mr-2">
            <div className="flex flex-row items-center ml-5">
              <FontAwesomeIcon
                icon={faSackDollar}
                className="mt-2.5 text-white"
              />
              <div className="ml-2 mt-2 font-semibold text-white">Top-Up</div>
            </div>
          </div>
          <div class="flex  ">
            <div class="">
              <div class="w-10 h-10 rounded-full overflow-hidden border-3 border-dotted border-gray-500 mr-4">
                <img
                  src="/images/dashboard/no_avatar.png"
                  alt="English"
                  style={{
                    width: "40px",
                    height: "40px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSam;
