import React from "react";
import payment from "../../assets/images/payment.png";
import Flogo from "../../assets/images/footer-logo.png";
import { Link } from "react-router-dom/dist";
// footer-logo
const Footer = () => {
  return (
    <>
      <div className="container-fluid">
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer__about">
                  <div className="footer__logo">
                    <Link to="/Home">
                      <img src={Flogo} alt="" />
                    </Link>
                  </div>
                  <p>
                    The customer is at the heart of our unique business model,
                    which includes design.
                  </p>
                  <Link to="#">
                    <img src={payment} alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                <div className="footer__widget">
                  <h6>Shopping</h6>
                  <ul>
                    <li>
                      <Link to="#">Clothing Store</Link>
                    </li>
                    <li>
                      <Link to="#">Trending Shoes</Link>
                    </li>
                    <li>
                      <Link to="#">Accessories</Link>
                    </li>
                    <li>
                      <Link to="#">Sale</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-3 col-sm-6">
                <div className="footer__widget">
                  <h6>Shopping</h6>
                  <ul>
                    <li>
                      <Link to="#">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="#">Payment Methods</Link>
                    </li>
                    <li>
                      <Link to="#">Delivary</Link>
                    </li>
                    <li>
                      <Link to="#">Return &amp; Exchanges</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
                <div className="footer__widget">
                  <h6>NewLetter</h6>
                  <div className="footer__newslatter">
                    <p>
                      Be the first to know about new arrivals, look books, sales
                      &amp; promos!
                    </p>
                    <form action="#">
                      <input type="text" placeholder="Your email" />
                      <button type="submit">
                        <span className="icon_mail_alt" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="footer__copyright__text">
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                  <p>
                    Copyright © 2020 All rights reserved |{" "}
                    <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
                    <Link to="https://colorlib.com" target="_blank">
                      ShoppingAdda
                    </Link>
                  </p>
                  {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
