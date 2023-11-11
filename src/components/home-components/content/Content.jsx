import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./content.css";

import Sliding from "../sliding-comp/Sliding";
import Counter from "../counter/Counter";
import ImgaeAnimation from "./ImgaeAnimation";
const Content = () => {
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const items = [
    {
      src: "/images/cards/card-2.png",
      alt: "First slide",
      title: "ACHIEVEMENTS",
    },
    {
      src: "/images/cards/card-3.png",
      alt: "Second slide",
      title: "PAYMENT METHODS",
    },
    {
      src: "/images/cards/card-4.png",
      alt: "Third slide",
      title: "GREAT COMMUNITY",
    },
    {
      src: "/images/cards/card-6.png",
      alt: "First slide",
      title: "WHY PEOPLE CHOOSE US",
    },
    {
      src: "/images/cards/card-1.png",
      alt: "Second slide",
      title: "TECHNICAL ANALYSIS TOOL",
    },
    {
      src: "/images/cards/card-5.png",
      alt: "Third slide",
      title: "TRADING ASSETS",
    },
  ];
  const totalItems = items.length;
  return (
    <div>
      <section class="section main-slider">
        <div class="container main-slider__container">
          <div className="flex flex-col">
            <img
              src="/images/bg/circle.png"
              style={{ width: "15px", height: "15px" }}
              className="z-20 animate-ping w-6 absolute right-80  bottom-64"
            />

            <img
              src="/images/bg/circle.png"
              style={{ width: "15px", height: "15px" }}
              className="z-20 animate-ping w-6 absolute right-40 top-96"
            />
            <img
              src="/images/bg/circle.png"
              style={{ width: "15px", height: "15px" }}
              className="z-20 animate-ping w-6 absolute right-80 top-72"
            />
            <img
              src="/images/bg/circle.png"
              style={{ width: "15px", height: "15px" }}
              className="z-20 animate-ping w-6 absolute left-56 top-56"
            />
          </div>

          <div class="content main-slider__content">
            <div class="main-slider__in">
              <h1 class="main-slider__title">
                Because you <br /> are the best
                <br /> you deserve the best
              </h1>
              <div class="main-slider__desc">
                <p class="main-slider__desc_bold">
                  Join the largest gathering and online trading platform
                </p>
                <p>
                  With access to trading in more than 100 global trading assets
                  in just one platform.
                </p>
              </div>
              <div class="main-slider__btn-container">
                <a href="/" class="btn btn_blue-gradient main-slider__btn">
                  Start in one click
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section section_light conditions" id="conditions">
        <div class="section_light_second_bg">
          <div class="container">
            <div class="content">
              <div class="conditions__in">
                <h2>Place your trades on best conditions</h2>
                <ul class="conditions__list">
                  <li class="conditions__item">
                    <p class="conditions__num">
                      <Counter n={5} s={"$*"} />
                    </p>
                    <span class="conditions__subtitle">
                      Minimum investment amount
                    </span>
                  </li>
                  <li class="conditions__item">
                    <p class="conditions__num">
                      <Counter n={1} s={"$"} />
                    </p>
                    <span class="conditions__subtitle">
                      Minimum trade amount
                    </span>
                  </li>
                  <li class="conditions__item">
                    <p class="conditions__num">
                      <Counter n={50000} s={"$"} />
                    </p>
                    <span class="conditions__subtitle">
                      Virtual money on your Demo account
                    </span>
                  </li>
                  <li class="conditions__item">
                    <p class="conditions__num">
                      <Counter n={50} s={"+"} />
                    </p>
                    <span class="conditions__subtitle">Payment methods</span>
                  </li>
                  <li class="conditions__item conditions__item_nomargin">
                    <p class="conditions__num">$0</p>
                    <span class="conditions__subtitle">
                      No commission on deposit and withdrawal
                    </span>
                  </li>
                  <li class="conditions__item conditions__item_nomargin">
                    <p class="conditions__num">
                      <span>
                        {" "}
                        <Counter n={500} s={"+"} />
                      </span>
                    </p>
                    <span class="conditions__subtitle">Assets for trading</span>
                  </li>
                </ul>
                <div class="monitor rotate  delay-300 ">
                  <ImgaeAnimation />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section section_light why-we">
        <div class="container">
          <div class="content why-we__in">
            <h2>
              <span>Why</span> choose us?
            </h2>
            <ul class="why-list">
              <div class="flex flex-col">
                <div class="flex flexrow">
                  <li class="why-list__">
                    <a
                      class="why-list__link why-list__link--flexible-trading"
                      href="/"
                    >
                      <img
                        src="/images/contents/flex-trader.png"
                        alt="Icon 1"
                        class="lazy"
                        loading="lazy"
                        style={{ width: "40px", height: "40px" }}
                      />
                      <p class="why-list__title">Flexible Trading</p>
                      <p class="why-list__sub-title">
                        Latest trends: quick and digital trading, express
                        trades, Forex MT5, pending orders, trades copying.
                        Payouts up to 218%.
                      </p>
                    </a>
                  </li>
                  <li class="why-list__">
                    <a
                      class="why-list__link why-list__link--education"
                      href="https://pocketoption.com/en/cabinet/platform-guide/"
                    >
                      <img
                        src="/images/contents/education.png"
                        alt="Icon 2"
                        class="lazy"
                        loading="lazy"
                        style={{ width: "40px", height: "40px" }}
                      />
                      <p class="why-list__title">Comprehensive Education</p>
                      <p class="why-list__sub-title">
                        Our help section contains tutorials, guides and various
                        trading strategies.
                      </p>
                    </a>
                  </li>
                  <li class="why-list__">
                    <a
                      class="why-list__link why-list__link--diverse-trading-instruments"
                      href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                    >
                      <img
                        src="/images/contents/trade-instr.png"
                        alt="Icon 3"
                        class="lazy"
                        loading="lazy"
                        style={{ width: "40px", height: "40px" }}
                      />
                      <p class="why-list__title">Diverse Trading Instruments</p>
                      <p class="why-list__sub-title">
                        Assets suitable for any trader: currency, commodities,
                        stocks.
                      </p>
                    </a>
                  </li>
                  <li class="why-list__">
                    <a
                      class="why-list__link why-list__link--demo-account"
                      href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                    >
                      <img
                        src="/images/contents/demo.png"
                        alt="Icon 4"
                        class="lazy"
                        loading="lazy"
                        style={{ width: "40px", height: "40px" }}
                      />
                      <p class="why-list__title">Demo Account</p>
                      <p class="why-list__sub-title">
                        Try all platform benefits on the Demo account using
                        virtual money. No investment needed, no risks involved.
                      </p>
                    </a>
                  </li>
                </div>
                <div class="flex flexrow">
                  <li class="why-list__">
                    <a
                      class="why-list__link why-list__link--deposit-withdrawals"
                      href="https://pocketoption.com/en/payment-methods/"
                    >
                      <img
                        src="/images/contents/deposit.png"
                        alt="Icon 5"
                        class="lazy"
                        loading="lazy"
                        style={{ width: "40px", height: "40px" }}
                      />
                      <p class="why-list__title">
                        Easy Deposits and Withdrawals
                      </p>
                      <p class="why-list__sub-title">
                        Use the most convenient payment method for hassle-free
                        deposits and withdrawals.
                      </p>
                    </a>
                  </li>
                  <li class="why-list__">
                    <a
                      class="why-list__link why-list__link--high-customer-loyalty"
                      href="https://pocketoption.com/en/cabinet/high-low/"
                    >
                      <img
                        src="/images/contents/customer-loyalty.png"
                        alt="Icon 6"
                        class="lazy"
                        loading="lazy"
                        style={{ width: "40px", height: "40px" }}
                      />
                      <p class="why-list__title">High Customer Loyalty</p>
                      <p class="why-list__sub-title">
                        Trading tournaments, regular bonuses, gifts, promo codes
                        and contests are available to any trader.
                      </p>
                    </a>
                  </li>
                  <li class="why-list__">
                    <a
                      class="why-list__link why-list__link--trading-advantages"
                      href="https://pocketoption.com/en/cabinet/profile/achievements/market/"
                    >
                      <img
                        src="/images/contents/trading-adv.png"
                        alt="Icon 7"
                        class="lazy"
                        loading="lazy"
                        style={{ width: "40px", height: "40px" }}
                      />
                      <p class="why-list__title">Trading Advantages</p>
                      <p class="why-list__sub-title">
                        Use cashback and other advantages for a more comfortable
                        trading experience with minimal risks.
                      </p>
                    </a>
                  </li>
                  <li class="why-list__">
                    <a
                      class="why-list__link why-list__link--indicators-and-signals"
                      href="https://pocketoption.com/en/cabinet/high-low/#open-chart-settings-indicators-modal"
                    >
                      <img
                        src="/images/contents/indicators.png"
                        alt="Icon 8"
                        class="lazy"
                        loading="lazy"
                        style={{ width: "40px", height: "40px" }}
                      />
                      <p class="why-list__title">Indicators and Signals</p>
                      <p class="why-list__sub-title">
                        Everything you need for a top-tier trading experience
                        including popular indicators and signals.
                      </p>
                    </a>
                  </li>
                </div>
              </div>

              <li class="why-list__item_start-trading start-trading">
                <div class="start-trading__inn">
                  <p class="start-trading__text">Trade in one click </p>
                  <a
                    href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                    class="btn btn_blue-gradient"
                  >
                    Start trading
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="section slider offers">
        <div class="container">
          <div class="content offers__in">
            {/* <div class="slider__arrows">
              <a class="slider__arrow arrow arrow-left">
                <svg
                  width="13"
                  height="22"
                  viewBox="0 0 13 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 1L2 11L12 21"
                    stroke="#96AEC1"
                    stroke-width="2"
                    class="slider-arrow-stroke"
                  />
                </svg>
              </a>
              <a class="slider__arrow arrow arrow-right">
                <svg
                  width="13"
                  height="22"
                  viewBox="0 0 13 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L11 11L1 21"
                    stroke="#0099FA"
                    stroke-width="2"
                    class="slider-arrow-stroke"
                  />
                </svg>
              </a>
            </div> */}

            {/* <div class="offers__corners">
              <img
                src="https://pocketoption.com/themes/2017-09/img/offers-slider/corner-1.png"
                class="offers__corner offers__corner_1"
                alt=""
                loading="lazy"
              />
              <img
                src="https://pocketoption.com/themes/2017-09/img/offers-slider/corner-2.png"
                class="offers__corner offers__corner_2"
                alt=""
                loading="lazy"
              />
              <img
                src="https://pocketoption.com/themes/2017-09/img/offers-slider/corner-3.png"
                class="offers__corner offers__corner_3"
                alt=""
                loading="lazy"
              />
              <img
                src="https://pocketoption.com/themes/2017-09/img/offers-slider/corner-4.png"
                class="offers__corner offers__corner_4"
                alt=""
                loading="lazy"
              />
            </div> */}
            {/* <div class="offers__list">
              <a
                href="https://pocketoption.com/en/payment-methods/"
                class="offers__item offers__item_payment-methods"
              >
                <div class="offers__col">
                  <div class="offers__img-wrap">
                    <picture class="offers__img offers__img_no-shine">
                      <img
                        src="/images/cards/one.webp"
                        alt="Card icon"
                        loading="lazy"
                      />
                    </picture>
                    <picture class="offers__img offers__img_shine">
                      <img
                        src="/images/cards/one.webp"
                        alt="Card icon"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                  <p class="offers__title">Payment methods</p>
                  <div class="btn btn_dark-blue offers__btn">More</div>
                </div>
              </a>
              <a
                href="https://pocketoption.com/en/assets-current/"
                class="offers__item offers__item_trading-assets"
              >
                <div class="offers__col">
                  <div class="offers__img-wrap">
                    <picture class="offers__img offers__img_no-shine">
                      <img
                        src="/images/cards/two.webp"
                        alt="Card icon"
                        loading="lazy"
                      />
                    </picture>
                    <picture class="offers__img offers__img_shine">
                      <img
                        src="/images/cards/two.webp"
                        alt="Card icon"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                  <p class="offers__title">Trading assets</p>
                  <div class="btn btn_dark-blue offers__btn">More</div>
                </div>
              </a>
              <a
                href="https://pocketoption.com/en/cabinet/profile/achievements/"
                target="_blank"
                class="offers__item offers__item_achievements"
              >
                <div class="offers__col">
                  <div class="offers__img-wrap">
                    <picture class="offers__img offers__img_no-shine">
                      <img
                        src="/images/cards/three.webp"
                        alt="Card icon"
                        loading="lazy"
                      />
                    </picture>
                    <picture class="offers__img offers__img_shine">
                      <img
                        src="/images/cards/three.webp"
                        alt="Card icon"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                  <p class="offers__title">Achievements</p>
                  <div class="btn btn_dark-blue offers__btn">More</div>
                </div>
              </a>
              <a
                href="https://pocketoption.com/en/cabinet/applications/"
                target="_blank"
                class="offers__item offers__item_apps"
              >
                <div class="offers__col">
                  <div class="offers__img-wrap">
                    <picture class="offers__img offers__img_no-shine">
                      <img
                        src="/images/cards/four.webp"
                        alt="Card icon"
                        loading="lazy"
                      />
                    </picture>
                    <picture class="offers__img offers__img_shine">
                      <img
                        src="/images/cards/four.webp"
                        alt="Card icon"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                  <p class="offers__title">Apps for any device</p>
                  <div class="btn btn_dark-blue offers__btn">More</div>
                </div>
              </a>
              <a
                href="https://pocketoption.com/en/reviews/"
                target="_blank"
                class="offers__item offers__item_why"
              >
                <div class="offers__col">
                  <div class="offers__img-wrap">
                    <picture class="offers__img offers__img_no-shine">
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/feedback.webp 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/feedback@2x.webp 2x"
                        type="image/webp"
                      />
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/feedback.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/feedback@2x.png 2x"
                        type="image/png"
                      />
                      <img
                        src="https://pocketoption.com/themes/2017-09/img/offers-slider/feedback.png"
                        data-src="https://pocketoption.com/themes/2017-09/img/offers-slider/feedback.png"
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/feedback.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/feedback@2x.png 2x"
                        alt="Feedback icon"
                        loading="lazy"
                      />
                    </picture>
                    <picture class="offers__img offers__img_shine">
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/feedback_s.webp 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/feedback_s@2x.webp 2x"
                        type="image/webp"
                      />
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/feedback_s.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/feedback_s@2x.png 2x"
                        type="image/png"
                      />
                      <img
                        src="https://pocketoption.com/themes/2017-09/img/offers-slider/feedback_s.png"
                        data-src="https://pocketoption.com/themes/2017-09/img/offers-slider/feedback_s.png"
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/feedback_s.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/feedback_s@2x.png 2x"
                        alt="Feedback icon"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                  <p class="offers__title">Why people choose us</p>
                  <div class="btn btn_dark-blue offers__btn">More</div>
                </div>
              </a>
              <a
                href="https://pocketoption.com/en/cabinet/platform-guide/#indicators"
                target="_blank"
                class="offers__item offers__item_tech-analysis"
              >
                <div class="offers__col">
                  <div class="offers__img-wrap">
                    <picture class="offers__img offers__img_no-shine">
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/analytic.webp 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/analytic@2x.webp 2x"
                        type="image/webp"
                      />
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/analytic.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/analytic@2x.png 2x"
                        type="image/png"
                      />
                      <img
                        src="https://pocketoption.com/themes/2017-09/img/offers-slider/analytic.png"
                        data-src="https://pocketoption.com/themes/2017-09/img/offers-slider/analytic.png"
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/analytic.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/analytic@2x.png 2x"
                        alt="Analytic icon"
                        loading="lazy"
                      />
                    </picture>
                    <picture class="offers__img offers__img_shine">
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/analytic_s.webp 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/analytic_s@2x.webp 2x"
                        type="image/webp"
                      />
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/analytic_s.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/analytic_s@2x.png 2x"
                        type="image/png"
                      />
                      <img
                        src="https://pocketoption.com/themes/2017-09/img/offers-slider/analytic_s.png"
                        data-src="https://pocketoption.com/themes/2017-09/img/offers-slider/analytic_s.png"
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/analytic_s.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/analytic_s@2x.png 2x"
                        alt="Analytic icon"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                  <p class="offers__title">Technical Analysis Tools</p>
                  <div class="btn btn_dark-blue offers__btn">More</div>
                </div>
              </a>
              <a
                href="https://pocketoption.com/en/cabinet/platform-guide/#enabling-trading-signals"
                target="_blank"
                class="offers__item offers__item_signals"
              >
                <div class="offers__col">
                  <div class="offers__img-wrap">
                    <picture class="offers__img offers__img_no-shine">
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/signal.webp 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/signal@2x.webp 2x"
                        type="image/webp"
                      />
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/signal.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/signal@2x.png 2x"
                        type="image/png"
                      />
                      <img
                        src="https://pocketoption.com/themes/2017-09/img/offers-slider/signal.png"
                        data-src="https://pocketoption.com/themes/2017-09/img/offers-slider/signal.png"
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/signal.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/signal@2x.png 2x"
                        alt="Signal icon"
                        loading="lazy"
                      />
                    </picture>
                    <picture class="offers__img offers__img_shine">
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/signal_s.webp 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/signal_s@2x.webp 2x"
                        type="image/webp"
                      />
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/signal_s.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/signal_s@2x.png 2x"
                        type="image/png"
                      />
                      <img
                        src="https://pocketoption.com/themes/2017-09/img/offers-slider/signal_s.png"
                        data-src="https://pocketoption.com/themes/2017-09/img/offers-slider/signal_s.png"
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/signal_s.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/signal_s@2x.png 2x"
                        alt="Signal icon"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                  <p class="offers__title">Signals</p>
                  <div class="btn btn_dark-blue offers__btn">More</div>
                </div>
              </a>
              <a
                href="https://pocketoption.com/en/cabinet?openRoom=14906/"
                target="_blank"
                class="offers__item offers__item_community"
              >
                <div class="offers__col">
                  <div class="offers__img-wrap">
                    <picture class="offers__img offers__img_no-shine">
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/comm.webp 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/comm@2x.webp 2x"
                        type="image/webp"
                      />
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/comm.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/comm@2x.png 2x"
                        type="image/png"
                      />
                      <img
                        src="https://pocketoption.com/themes/2017-09/img/offers-slider/comm.png"
                        data-src="https://pocketoption.com/themes/2017-09/img/offers-slider/comm.png"
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/comm.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/comm@2x.png 2x"
                        alt="Community icon"
                        loading="lazy"
                      />
                    </picture>
                    <picture class="offers__img offers__img_shine">
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/comm_s.webp 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/comm_s@2x.webp 2x"
                        type="image/webp"
                      />
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/comm_s.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/comm_s@2x.png 2x"
                        type="image/png"
                      />
                      <img
                        src="https://pocketoption.com/themes/2017-09/img/offers-slider/comm_s.png"
                        data-src="https://pocketoption.com/themes/2017-09/img/offers-slider/comm_s.png"
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/comm_s.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/comm_s@2x.png 2x"
                        alt="Community icon"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                  <p class="offers__title">Great community</p>
                  <div class="btn btn_dark-blue offers__btn">More</div>
                </div>
              </a>
              <a
                href="https://pocketoption.com/en/land/social-trading/"
                target="_blank"
                class="offers__item offers__item_social-trading"
              >
                <div class="offers__col">
                  <div class="offers__img-wrap">
                    <picture class="offers__img offers__img_no-shine">
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/copy.webp 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/copy@2x.webp 2x"
                        type="image/webp"
                      />
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/copy.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/copy@2x.png 2x"
                        type="image/png"
                      />
                      <img
                        src="https://pocketoption.com/themes/2017-09/img/offers-slider/copy.png"
                        data-src="https://pocketoption.com/themes/2017-09/img/offers-slider/copy.png"
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/copy.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/copy@2x.png 2x"
                        alt="Social icon"
                        loading="lazy"
                      />
                    </picture>
                    <picture class="offers__img offers__img_shine">
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/copy_s.webp 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/copy_s@2x.webp 2x"
                        type="image/webp"
                      />
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/copy_s.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/copy_s@2x.png 2x"
                        type="image/png"
                      />
                      <img
                        src="https://pocketoption.com/themes/2017-09/img/offers-slider/copy_s.png"
                        data-src="https://pocketoption.com/themes/2017-09/img/offers-slider/copy_s.png"
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/copy_s.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/copy_s@2x.png 2x"
                        alt="Social icon"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                  <p class="offers__title">Social trading</p>
                  <div class="btn btn_dark-blue offers__btn">More</div>
                </div>
              </a>
              <a
                href="https://pocketoption.com/en/affiliate-program/"
                class="offers__item offers__item_affiliate-programs"
              >
                <div class="offers__col">
                  <div class="offers__img-wrap">
                    <picture class="offers__img offers__img_no-shine">
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/case.webp 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/case@2x.webp 2x"
                        type="image/webp"
                      />
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/case.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/case@2x.png 2x"
                        type="image/png"
                      />
                      <img
                        src="https://pocketoption.com/themes/2017-09/img/offers-slider/case.png"
                        data-src="https://pocketoption.com/themes/2017-09/img/offers-slider/case.png"
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/case.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/case@2x.png 2x"
                        alt="Case icon"
                        loading="lazy"
                      />
                    </picture>
                    <picture class="offers__img offers__img_shine">
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/case_s.webp 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/case_s@2x.webp 2x"
                        type="image/webp"
                      />
                      <source
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/case_s.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/case_s@2x.png 2x"
                        type="image/png"
                      />
                      <img
                        src="https://pocketoption.com/themes/2017-09/img/offers-slider/case_s.png"
                        data-src="https://pocketoption.com/themes/2017-09/img/offers-slider/case_s.png"
                        srcset="https://pocketoption.com/themes/2017-09/img/offers-slider/case_s.png 1x, https://pocketoption.com/themes/2017-09/img/offers-slider/case_s@2x.png 2x"
                        alt="Case icon"
                        loading="lazy"
                      />
                    </picture>
                  </div>
                  <p class="offers__title">Affiliate program</p>
                  <div class="btn btn_dark-blue offers__btn">More</div>
                </div>
              </a>
            </div> */}

            <Sliding items={items} itemsPerPage={3} />
            {/* <Carousel data-bs-theme="dark">
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/cards/edit-three.png"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h5>Payment Method</h5>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/cards/edit-two.png"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h5>Second slide label</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="/images/bg/sec-one.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h5>Third slide label</h5>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel> */}
          </div>
        </div>
      </section>

      {/* <section class="section section_light check-your-luck">
        <div class="container container__no-padding">
          <div class="content check-your-luck__in">
            <div class="check-your-luck__left">
              <h2>Test Your Luck!</h2>
              <p class="title-desc">
                Enter your email address and get a special offer from Dooption .
                If the luck is on your side, you will receive a free gift!{" "}
              </p>
            </div>
            <div class="check-your-luck__right">
              <div class="alert alert--danger"></div>
              <div class="form-wrap">
                <form
                  action="https://pocketoption.com/en/check-your-luck/"
                  method="post"
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                  <button
                    type="submit"
                    class="btn btn_blue-gradient"
                    data-fancybox
                    data-src="#check-your-luck-captcha-modal"
                  >
                    Check it now{" "}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section class="section section_light applications">
        <div class="container">
          <div class="content applications__in">
            <h2>Web application for any device </h2>
            <ul class="devices">
              <li class="devices__item">
                <a
                  rel="noopener"
                  href="https://play.google.com/store/apps/details?id=com.potradeweb"
                  target="_blank"
                  class="devices__btn devices__btn_android js-android-link"
                >
                  <div class="devices__top">
                    <img
                      src="/images/contents/android.png"
                      alt="Icon 4"
                      class="lazy cursor-pointer ml-6"
                      loading="lazy"
                      style={{
                        width: "80px",
                        height: "80px",
                        marginLeft: "45px",
                      }}
                    />
                    <p class="devices__title">Android</p>
                  </div>
                  <div class="devices__link">Download</div>
                </a>
              </li>
              <li class="devices__item">
                <a
                  href="https://pocketoption.com/en/cabinet/demo-high-low/?try-demo=1"
                  class="devices__btn devices__btn_web"
                >
                  <div class="devices__top">
                    <img
                      src="/images/contents/app-development.png"
                      alt="Icon 4"
                      class="lazy cursor-pointer ml-6"
                      loading="lazy"
                      style={{
                        width: "80px",
                        height: "80px",
                        marginLeft: "45px",
                      }}
                    />
                    <p class="devices__title">Web App</p>
                  </div>
                  <div class="devices__link">Open</div>
                </a>
              </li>
              <li class="devices__item">
                <a
                  href="https://pocketoption.com/cabinet/telegram/link"
                  target="_blank"
                  class="devices__btn devices__btn_tg"
                >
                  <div class="devices__top">
                    <img
                      src="/images/contents/telegram.png"
                      alt="Icon 4"
                      class="lazy cursor-pointer ml-6"
                      loading="lazy"
                      style={{
                        width: "80px",
                        height: "80px",
                        marginLeft: "45px",
                      }}
                    />
                    <p class="devices__title">Telegram bot</p>
                  </div>
                  <div class="devices__link">Subscribe</div>
                </a>
              </li>
            </ul>

            <div class="phone-container">
              <picture class="phone phone_android">
                <img src="/images/contents/android-img.png" alt="Android" />
              </picture>
              <picture class="phone phone_iphone">
                <img src="/images/contents/iphone-img.png" alt="Iphone" />
              </picture>
            </div>
          </div>
        </div>
      </section>

      <section class="section section_light reviews-slider">
        <div class="container reviews-slider__container">
          <div class="content reviews-slider__in">
            <h2 class="reviews-slider__title">What people say about us </h2>
            <p class="reviews-slider__title-desc">
              More than 10 million customers worldwide trust us and earn daily.
            </p>
            <div class="js-reviews-slider slider">
              <div class="slider__left">
                <div class="slider__in">
                  <div class="rv-slider">
                    <div class="review-item">
                      <div class="review-item__top">
                        <div class="review-item__stars">
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>
                          <span>★</span>{" "}
                        </div>
                        <div class="review-item__date">2023-10-14 17:13:21</div>
                      </div>
                      <div class="review-item__text">
                        <span class="js-review-text-prev">
                          My name is Jai Singh, and I am a trader with ID
                          68341479. I would like to share my positive experience
                          with the trading platform called 'DoOption.' One of
                          the platform's notable strengths is its user-friendly
                          interface, making it an ideal choice for beginners in
                          trading. The platform's intuitive design facilitates
                          effortless navigation and swift order execution.
                          DoOption.com provides a diverse range of features and
                          services, making it a strong choice for traders.
                        </span>
                        <span class="js-review-text-next">
                          {" "}
                          trading options, including binary options, digital
                          options, and cryptocurrencies, providing a diverse
                          range of assets to trade. One of the platform's
                          strengths is its demo account feature, which enables
                          users to practice trading without risking real money.
                          This is invaluable for beginners seeking to hone their
                          skills and develop effective trading strategies.
                          PocketOption.com's customer support is responsive and
                          helpful, providing assistance to users whenever
                          needed. The mobile app is robust, making it convenient
                          for traders on the go. Withdrawal was very quick and
                          fast it took hardly 15 min to get my withdrawal from
                          the platform.
                        </span>
                        <span class="js-review-dots">...</span>
                      </div>
                      <a
                        href="#"
                        class="review-item__more-btn js-show-full-review-btn"
                      >
                        Show full review
                      </a>
                      <a
                        href="#"
                        class="review-item__more-btn js-hide-full-review-btn"
                      >
                        Hide full review
                      </a>
                    </div>
                    <div class="review-item__footer">
                      <div class="review-item__flag languages__flag">
                        <img src="/images/flags-svg/in.svg" alt="" />{" "}
                      </div>
                      <div class="review-item__user-data">
                        <div class="review-item__fio">
                          <a
                            href="https://pocketoption.com/en/cabinet/?mo=trading-profile&uid=68341479"
                            class="js-link-with-get-param"
                            target="_blank"
                          >
                            Jai S.{" "}
                          </a>
                        </div>
                        <div class="review-item__uid">
                          <a
                            href="https://pocketoption.com/en/cabinet/?mo=trading-profile&uid=68341479"
                            class="js-link-with-get-param"
                            target="_blank"
                          >
                            UID 68341479
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="slider__right">
                <div class="slider__footer slider-footer">
                  <a
                    onClick={() => {
                      navigate("/riviews");
                    }}
                    class="slider-footer__link-all slider__link-all"
                  >
                    All reviews
                  </a>
                  <p class="slider-footer__text">
                    Your feedback helps us to improve our platform and provide
                    you with the best trading experience tailored to your needs.
                    View ratings and post your own suggestions. We appreciate
                    your feedback!{" "}
                  </p>
                  <a
                    onClick={() => {
                      navigate("/riviews");
                    }}
                    class="btn btn_blue-gradient main-slider__btn"
                  >
                    Submit a review{" "}
                  </a>
                  <div class="slider__info-text slider-footer__desc">
                    the reviews are published without any changes to the
                    original text{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Content;
