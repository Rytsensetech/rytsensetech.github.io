import React from "react";
import "./footer.css";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section class="section mt100pm">
        <div class="container">
          <div class="content">
            <div class="payment-methods">
              <ul class="payment-methods-list">
                <li class="payment-methods-list__itemm">
                  <picture class="payment-methods-list__img">
                    <img
                      src="/images/contents/master_visa_maestro.webp"
                      style={{ width: "200px", height: "100px" }}
                    />
                  </picture>
                </li>
                <li class="payment-methods-list__itemm">
                  <picture class="payment-methods-list__img">
                    <img
                      src="/images/contents/pm.webp"
                      style={{ width: "200px", height: "100px" }}
                    />
                  </picture>
                </li>
                <li class="payment-methods-list__itemm">
                  <picture class="payment-methods-list__img">
                    <img
                      src="/images/contents/vload.png"
                      style={{ width: "180px", height: "100px" }}
                    />
                  </picture>
                </li>
                <li class="payment-methods-list__itemm">
                  <picture class="payment-methods-list__img">
                    <img
                      src="/images/contents/wm.webp"
                      style={{ width: "200px", height: "100px" }}
                    />
                  </picture>
                </li>
                <li class="payment-methods-list__itemm">
                  <picture class="payment-methods-list__img">
                    <img
                      src="/images/contents/jeton.png"
                      style={{ width: "180px", height: "100px" }}
                    />
                  </picture>
                </li>
                <li class="payment-methods-list__itemm">
                  <picture class="payment-methods-list__img">
                    <img
                      src="/images/contents/advcash.png"
                      style={{ width: "200px", height: "100px" }}
                    />
                  </picture>
                </li>
                <li
                  class="more-payment"
                  onClick={() => {
                    navigate("/payment-systems");
                  }}
                >
                  More
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer class="section footer ">
        <section class="section risk-disclosure">
          <div class="container">
            <div class="content risk-disclosure__in">
              <p class="risk-disclosure__title">Risk Warning:</p>
              <p>
                Trading on financial markets carries risks. Contracts for
                Difference (‘CFDs’) are complex financial products that are
                traded on margin. Trading CFDs carries a high level of risk
                since leverage can work both to your advantage and disadvantage.
                As a result, CFDs may not be suitable for all investors because
                you may lose all your invested capital. You should not risk more
                than you are prepared to lose. Before deciding to trade, you
                need to ensure that you understand the risks involved and taking
                into account your investment objectives and level of experience
              </p>
              <p class="risk-disclosure__link-title">
                <a
                  href="https://pocketoption.com/en/riskdisclosure/"
                  target="_blank"
                  class="risk-disclosure__link link link_light"
                >
                  Risk Disclosure{" "}
                </a>
              </p>
            </div>
          </div>
        </section>
        <div class="container">
          <div class="content footer__in">
            <div class="footer__info">
              <p>
                All materials and services provided on this site are subject to
                copyright and belong to "Infinite Trade LLC". Any use of
                materials of this website must be approved by an official
                representative of "Infinite Trade LLC", and contain a link to
                the original resource. Any third-party companies of "Online
                broker" or "Online trading" type, do not have the right to use
                materials of this website as well as any distorted writing of
                "Infinite Trade LLC". In case of violation, they will be
                prosecuted in accordance with legislation of the intellectual
                property protection.
              </p>
              <p>
                * Depending on the region and payment method. Infinite Trade LLC
                does not provide service to residents of the EEA countries, USA,
                Israel, UK and Japan.{" "}
              </p>
              <p>
                Infinite Trade LLC is registered at Republic Of Costa Rica, San
                Jose- San Jose Mata Redonda, Neighborhood Las Vegas, Blue
                Building Diagonal To La Salle High School with the registíndicen
                number *********. Infinite Trade LLC is regulated by the Mwali
                International Services Authority (License{" "}
                <a target="_blank" href="/">
                  *******
                </a>
                ). All brokerage activity on this website provided by Infinite
                Trade LLC.{" "}
              </p>
            </div>

            <ul class="footer-nav">
              <li class="footer-nav__item">
                <a
                  class="footer-nav__link"
                  onClick={() => {
                    navigate("/contacts");
                  }}
                >
                  Contacts
                </a>
              </li>
              <li class="footer-nav__item">
                <a
                  class="footer-nav__link"
                  target="_blank"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Terms and Conditions
                </a>
              </li>
              <li class="footer-nav__item">
                <a
                  class="footer-nav__link"
                  onClick={() => {
                    navigate("/kyc-policy");
                  }}
                >
                  AML and KYC Policy
                </a>
              </li>
              {/* <li class="footer-nav__item">
                <a
                  class="footer-nav__link"
                  onClick={()=>{navigate('/kyc-policy')}}
                  target="_blank"
                >
                  Privacy Policy
                </a>
              </li> */}
              <li class="footer-nav__item">
                <a
                  class="footer-nav__link"
                  onClick={() => {
                    navigate("/payment-policy");
                  }}
                >
                  Payment Policy
                </a>
              </li>
              <li class="footer-nav__item">
                <a
                  class="footer-nav__link"
                  onClick={() => {
                    navigate("/regulatory-environment");
                  }}
                >
                  Regulatory Environment
                </a>
              </li>
              <li class="footer-nav__item">
                <a
                  class="footer-nav__link"
                  onClick={()=>{navigate('/')}}                >
                  Affiliate Program
                </a>
              </li>
            </ul>
            <div class="socket">
              <div class="header__container flex items-center">
                <a
                  class="header__logo logo"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  <img src="/images/logo/logo-new.png" width="50" height="10" />
                </a>
                <div
                  class="header__info info font-bold text-lg hover:cursor-pointer"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Dooption
                </div>
              </div>

              <div class="socket__copyright">
                <div class="plus-21">
                  <p>
                    Copyright &copy;2023 Pocket Option <br />
                    Infinite Trade LLC is the owner of the pocketoption.com
                    domain.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
