import Link from "next/link";
import React, { useEffect, useState } from "react";
import Search from "../ecommerce/Search";
import { getAllCategory } from "../../util/api";
import { useSelector } from "react-redux";
import storage from "../../util/localStorage";
import { BiSearch } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";
import SearchMobile from "../ecommerce/SearchMobile";
import { useRouter } from "next/router";
import Popup from "reactjs-popup";
import Location from "../ecommerce/Header/Location";
import { IoCall } from "react-icons/io5";

const Header = ({
    toggleClick,
    headerStyle,
}) => {
    const user = storage.get("auth_token");
    const [isToggled, setToggled] = useState(false);
    const [scroll, setScroll] = useState(0);
    const [headerData, setheaderData] = useState([]);
    const { cartCount } = useSelector((state) => state.cart);
    const { wishlistCount } = useSelector((state) => state.wishlist);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const router  = useRouter();
    useEffect(() => {
        fetchHeaderData()
        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY >= 100;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        });
    },[]);       
    
    const toggleSearch =()=>{
        setIsSearchOpen(!isSearchOpen);
    }
    const fetchHeaderData =async ()=>{
        try {
            const response = await getAllCategory();
            console.log('fetch success: ', response)
            setheaderData(response.data)
          } catch (error) {
            console.error('there is an error: ',error);
          }
    }

    const handleNoUrlLink =(e)=>{
        e.preventDefault();
    }
    const handleToggle = () => setToggled(!isToggled);
    const {announcement_notes, cart_count, result, user_wishlist_count} = headerData;
    const title = announcement_notes?.[0]?.title;
    const url = announcement_notes?.[0]?.redirect_url || "";

    return (
        <>
            <header className={`header-area header-style-1  header-height-2`}>
                <div className="header-top header-top-ptb-1 d-none d-lg-block">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-4">
                                <div className="header-info header-info-left">
                                    <ul>
                                        <li>
                                            <Link href="/#">
                                                <Location cities={headerData?.region_data} />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-4">
                                <div className="text-center">
                                    <div
                                        id="news-flash"
                                        className="d-inline-block"
                                    >
                                        <ul>
                                            <li>
                                                {title} &nbsp;
                                                <Link href={url}>
                                                    <a className="text-primary-light-1"> View details</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4">
                                <div className="header-info header-info-right">
                                    <ul>
                                        <li> 
                                            <span className="mr-5"><IoCall size={15}/></span>
                                            <a href="tel:18001800162414231">1800 1800 1624 1423</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div
                    className={
                        scroll
                            ? "header-bottom header-bottom-bg-color sticky-bar stick"
                            : "header-bottom header-bottom-bg-color sticky-bar"
                    }
                >
                    <div className="container">
                        {!isSearchOpen?<div className="header-wrap header-space-between position-relative">
                            <div className="logo logo-width-1">
                                <Link href="/">
                                    <a>
                                        <img
                                            src="/assets/imgs/theme/the-party-cafe-yellow-icon.png"
                                            alt="the-party-cafe-logo"
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div className="header-nav d-none d-lg-flex">
                                <div className="main-menu main-menu-padding-1 main-menu-lh-2 d-none d-lg-block">
                                    <nav>
                                        <ul className="menu-links">
                                            {
                                                result?.map((menu, i)=>(
                                                    <li className="position-static" key={menu?.id}>
                                                        <a className="text-black">
                                                            {menu?.name}
                                                            <i className="fi-rs-angle-down"></i>
                                                        </a>
                                                        <ul className="mega-menu">
                                                            {
                                                                menu?.categories?.map((category, i)=>(
                                                                    <li className="sub-mega-menu sub-mega-menu-width-22" key={category?.id}>
                                                                        {/* <Link href={`/${category?.handle}`}> */}
                                                                            <a className="menu-title">
                                                                                {category?.name}
                                                                            </a>
                                                                        {/* </Link> */}
                                                                        <ul>
                                                                            {
                                                                                // category?.sub_categories?.slice(0, 5)?.map((sub_categorie, i) => (
                                                                                    category?.sub_categories?.map((sub_categorie, i) => (
                                                                                    <li key={sub_categorie?.id}>
                                                                                        <Link href={`/products/${category?.handle}/${sub_categorie?.handle}`}>
                                                                                            <a>
                                                                                                {sub_categorie?.name}
                                                                                            </a>
                                                                                        </Link>
                                                                                    </li>
                                                                                ))
                                                                            }
                                                                            {/* {category?.sub_categories?.length > 5 && (
                                                                                <li>
                                                                                    <Link href={`/${category?.handle}`}>
                                                                                        <a>See more</a>
                                                                                    </Link>
                                                                                </li>
                                                                            )} */}
                                                                        </ul>
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="header-right d-none d-lg-flex">
                                <div className="search-style-2">
                                    <Search />
                                </div>
                                <div className="header-action-right d-none d-lg-block">
                                    <div className="header-action-2">
                                        <div className="header-action-icon-2">
                                            <Link href={!user?`/page-login-register?referrerUrl=${router?.asPath}`:'/my-profile'}>
                                                <a>
                                                    <img
                                                        className="svgInject"
                                                        alt="The Party Cafe"
                                                        src="/assets/imgs/theme/icons/icon-profile.svg"
                                                    />
                                                    <span className="header-action-name">Profile</span>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="header-action-icon-2">
                                            <Link href={!user?`/page-login-register?referrerUrl=${router?.asPath}`:'/shop-wishlist'}>
                                                <a>
                                                    <img
                                                        className="svgInject"
                                                        alt="The Party Cafe"
                                                        src="/assets/imgs/theme/icons/icon-heart.svg"
                                                    />
                                                    <span className="pro-count blue">
                                                        {wishlistCount}
                                                    </span>
                                                    <span className="header-action-name">Wishlist</span>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="header-action-icon-2">
                                            <Link href="/shop-cart">
                                                <a className="mini-cart-icon">
                                                    <img
                                                        alt="The Party Cafe"
                                                        src="/assets/imgs/theme/icons/icon-cart.svg"
                                                    />
                                                    <span className="pro-count blue">
                                                        {cartCount}
                                                    </span>
                                                    <span className="header-action-name">Cart</span>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="header-action-right d-block d-lg-none">
                                <div className="header-action-2 gap-1">
                                    <div className="header-action-icon-2" onClick={toggleSearch}>
                                        <BiSearch fontSize={20} style={{width:'25px', height:'25px', color:'#333333'}} />
                                    </div>
                                    <div className="header-action-icon-2">
                                        <Link href={!user?`/page-login-register?referrerUrl=${router?.asPath}`:'/shop-wishlist'}>
                                            <a>
                                                <img
                                                    alt="The Party Cafe"
                                                    src="/assets/imgs/theme/icons/icon-heart.svg"
                                                />
                                                <span className="pro-count white">
                                                    {wishlistCount}
                                                </span>
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="header-action-icon-2">
                                        <Link href="/shop-cart">
                                            <a className="mini-cart-icon">
                                                <img
                                                    alt="The Party Cafe"
                                                    src="/assets/imgs/theme/icons/icon-cart.svg"
                                                />
                                                <span className="pro-count white">
                                                    {cartCount}
                                                </span>
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="header-action-icon-2">
                                        <Link href={!user?`/page-login-register?referrerUrl=${router?.asPath}`:'/my-profile'} className="mr-0">
                                            <a className="mr-0">
                                                <img
                                                    alt="The Party Cafe"
                                                    src="/assets/imgs/theme/icons/icon-profile.svg"
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                    <div className="header-action-icon-2 d-block d-lg-none">
                                        <div
                                            className="burger-icon burger-icon-white"
                                            onClick={toggleClick}
                                            data={`${JSON.stringify(toggleClick?toggleClick:'ok')}`}
                                        >
                                            <span className="burger-icon-top"></span>
                                            <span className="burger-icon-mid"></span>
                                            <span className="burger-icon-bottom"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <SearchMobile toggleSearch={toggleSearch} />
                        }
                    </div>
                </div>
            </header>
        </>
    );
};
export default Header;
