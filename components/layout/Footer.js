import React from "react";
import Link from "next/link"
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SlSocialFacebook } from "react-icons/sl";

const Footer = () => {
    return (
        <>
            <footer className="main">
                <section className="newsletter p-30 mt-30 text-white wow fadeIn animated">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-7 mb-md-3 mb-lg-0">
                                <div className="row align-items-center">
                                    <div className="col flex-horizontal-center">
                                        <img
                                            className="icon-email"
                                            src="/assets/imgs/theme/icons/icon-email.svg"
                                            alt=""
                                        />
                                        <h4 className="font-size-20 mb-0 ml-3">
                                            Sign up to Newsletter
                                        </h4>
                                    </div>
                                    <div className="col my-4 my-md-0 des">
                                        
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <form className="form-subcriber d-flex wow fadeIn animated">
                                    <input
                                        type="email"
                                        className="form-control bg-white font-small"
                                        placeholder="Enter your email"
                                    />
                                    <button
                                        className="btn bg-dark text-white"
                                        type="submit"
                                    >
                                        Subscribe
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-padding footer-mid">
                    <div className="container pt-15 pb-20">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="widget-about font-md mb-md-5 mb-lg-0">
                                    <div className="logo logo-width-1 wow fadeIn animated">
                                        <Link href="/"><a>
                                            <img
                                                src="/assets/imgs/theme/party-house.png"
                                                alt="logo"
                                            />
                                        </a>
                                        </Link>
                                    </div>
                                    <h5 className="mt-20 mb-10 fw-600 text-grey-4 wow fadeIn animated">
                                        Contact
                                    </h5>
                                    <p className="wow fadeIn animated">
                                        <strong>Address: </strong>301, 3rd Floor, Raheja Point 1,near,<br /> 
                                        Pandit Jawaharlal Nehru Rd, P and T Colony, <br />
                                        Vakola, Santacruz East, Mumbai, <br />
                                        Maharashtra 400055.
                                    </p>
                                    <p className="wow fadeIn animated">
                                        <strong>Phone: </strong>+01 2222 365
                                        /(+91) 01 2345 6789
                                    </p>
                                    <h5 className="mb-10 mt-30 fw-600 text-grey-4 wow fadeIn animated">
                                        Follow Us
                                    </h5>
                                    <div className="mobile-social-icon wow fadeIn animated mb-sm-5 mb-md-0">
                                        <a href="#">
                                            <SlSocialFacebook size={18} color="#606060" />
                                        </a>
                                        <a href="#">
                                            <FaXTwitter size={18} color="#606060" />
                                        </a>
                                        <a href="#">
                                            <FaInstagram size={18} color="#606060"/>
                                        </a>
                                        <a href="#">
                                            <FaWhatsapp size={18} color="#606060"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <h5 className="widget-title wow fadeIn animated">
                                    About
                                </h5>
                                <ul className="footer-list wow fadeIn animated mb-sm-5 mb-md-0">
                                    <li>
                                        <a href="#">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#">Media/ Press Release</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="#">Disclaimer</a>
                                    </li>
                                    <li>
                                        <a href="#">Terms &amp; Conditions</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy Policies</a>
                                    </li>
                                </ul>
                            </div>
                            <div className=" col-md-3">
                                <h5 className="widget-title wow fadeIn animated">
                                    My Account
                                </h5>
                                <ul className="footer-list wow fadeIn animated">
                                    <li>
                                        <a href="#">Sign In</a>
                                    </li>
                                    <li>
                                        <a href="#">My Profile</a>
                                    </li>
                                    <li>
                                        <a href="#">View Cart</a>
                                    </li>
                                    <li>
                                        <a href="#">My Wishlist</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container pb-20 wow fadeIn animated">
                    <div className="row">
                        <div className="col-12 mb-20">
                            <div className="footer-bottom"></div>
                        </div>
                        <div className="col-lg-6">
                            <p className="float-md-left font-sm text-muted mb-0">
                                &copy; {new Date().getFullYear()},
                                Copyright © 2024<strong className="text-brand"> Party House</strong> . All Rights Reserved
                            </p>
                             
                        </div>
                        <div className="col-lg-6">
                            <p className="text-lg-end text-start font-sm text-muted mb-0">
                                Designed by 
                                <a href="https://innowrap.com/" target="_blank"> Innowrap Technologies.</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
