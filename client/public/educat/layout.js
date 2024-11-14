'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../public/educat/styles/css/color-switcher.css';
import '../../public/educat/styles/css/font-awesome.min.css';
import '../../public/educat/styles/css/material-design-iconic-font.min.css';
import '../../public/educat/styles/css/bootstrap.min.css';
import '../../public/educat/styles/css/plugins.css';
import '../../public/educat/styles/style.css';
import '../../public/educat/styles/css/color.css';
import '../../public/educat/styles/css/responsive.css';
import '../../public/educat/styles/switcher/color-one.css';
import '../../public/educat/styles/switcher/color-two.css';
import '../../public/educat/styles/switcher/color-three.css';
import '../../public/educat/styles/switcher/color-four.css';
import '../../public/educat/styles/switcher/color-five.css';
import '../../public/educat/styles/switcher/color-six.css';
import '../../public/educat/styles/switcher/color-seven.css';
import '../../public/educat/styles/switcher/color-eight.css';
import '../../public/educat/styles/switcher/color-nine.css';
import '../../public/educat/styles/switcher/color-ten.css';
import '../../public/educat/styles/switcher/pattren1.css';
import '../../public/educat/styles/switcher/pattren2.css';
import '../../public/educat/styles/switcher/pattren3.css';
import '../../public/educat/styles/switcher/pattren4.css';
import '../../public/educat/styles/switcher/pattren5.css';
import '../../public/educat/styles/switcher/background1.css';
import '../../public/educat/styles/switcher/background2.css';
import '../../public/educat/styles/switcher/background3.css';
import '../../public/educat/styles/switcher/background4.css';
import '../../public/educat/styles/switcher/background5.css';

import {useEffect} from 'react';
import Script from "next/script";
import Link from "next/link";
import {Meta} from "next/dist/lib/metadata/generate/meta";
import Head from "next/head";

export default function RootLayout({children}) {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const rootElement = document.documentElement;
        }
    }, []);

    return (
        <html suppressHydrationWarning>
        <Head>
            <Script type="text/javascript" id="www-widgetapi-script"
                    src="https://www.youtube.com/s/player/baafab19/www-widgetapi.vflset/www-widgetapi.js"
                    async=""/>
            <Script src="https://www.youtube.com/iframe_api?v=3.3.8" id="YTAPI"/>
            <Meta charset="utf-8" content=""/>
            <Meta http-equiv="x-ua-compatible" content="ie=edge"/>
            <title>Home One || Educat</title>
            <Meta name="description" content=""/>
            <Meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0"/>
            <Link rel="shortcut icon" type="image/x-icon" href="educat/styles/img/favicon.ico"/>
            <Link href="https://fonts.googleapis.com/css?family=Raleway:400,300,500,600,700,800"
                  rel="stylesheet" type="text/css"/>
            <script src="educat/styles/js/vendor/modernizr-2.8.3.min.js"/>
        </Head>
        <body>
        {/* Main Wrapper Start */}
        <div className="as-mainwrapper">
            {/* Bg White Start */}
            <div className="bg-white">
                {/* Header Area Start */}
                <header>
                    <div className="header-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-5 d-none d-lg-block d-md-block">
                                    <span>Have any question? 0123456789</span>
                                </div>
                                <div className="col-lg-5 col-md-7 col-12">
                                    <div className="header-top-right">
                                        <div className="content"><a href="#"><i className="zmdi zmdi-account"></i> My
                                            Account</a>
                                            <ul className="account-dropdown">
                                                <li><a href="/educat-preview/educat/login-register">My Account</a></li>
                                                <li><a href="/educat-preview/educat/login-register">Log In</a></li>
                                                <li><a href="/educat-preview/educat/login-register">Register</a></li>
                                                <li><a href="/educat-preview/educat/latest-news">Blog</a></li>
                                            </ul>
                                        </div>
                                        <div className="content"><a href="#"><i
                                            className="zmdi zmdi-favorite"></i> Wishlist</a>
                                        </div>
                                        <div className="content"><a href="#"><i
                                            className="zmdi zmdi-shopping-basket"></i> Chechout</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-logo-menu sticker">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-12">
                                    <div className="logo">
                                        <a href="/educat-preview/educat/">
                                            <img src="educat/styles/img/logo/logo.png" alt="EDUCAT"/></a>
                                    </div>
                                </div>
                                <div className="col-lg-9 col-12">
                                    <div className="mainmenu-area pull-right">
                                        <div className="mainmenu d-none d-lg-block">
                                            <nav>
                                                <ul id="nav">
                                                    <li className="current"><a href="/educat-preview/educat/">Home</a>
                                                        <ul className="sub-menu">
                                                            <li><a href="/educat-preview/educat/">Slider Style 1</a>
                                                            </li>
                                                            <li><a href="/educat-preview/educat/index-2">Slider Style
                                                                2</a></li>
                                                            <li><a href="/educat-preview/educat/index-3">Background
                                                                Image</a></li>
                                                            <li><a href="/educat-preview/educat/index-4">Image Overlay
                                                                Light</a></li>
                                                            <li><a href="/educat-preview/educat/index-5">Image Overlay
                                                                Dark</a></li>
                                                            <li><a href="/educat-preview/educat/index-6">Menu With
                                                                Slider</a></li>
                                                            <li><a href="/educat-preview/educat/index-7">Menu With
                                                                Image</a></li>
                                                            <li><a href="/educat-preview/educat/index-8">Menu With
                                                                Overlay</a></li>
                                                            <li><a href="/educat-preview/educat/index-9">Video
                                                                Background</a></li>
                                                            <li><a href="/educat-preview/educat/index-10">Fixed
                                                                Image</a></li>
                                                            <li><a href="/educat-preview/educat/index-11">Overlay Fixed
                                                                Image</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="/educat-preview/educat/about">About</a></li>
                                                    <li><a href="/educat-preview/educat/courses">Courses</a>
                                                        <ul className="sub-menu">
                                                            <li><a href="/educat-preview/educat/courses-details">Courses
                                                                Details</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="/educat-preview/educat/">Features</a>
                                                        <ul className="sub-menu">
                                                            <li><a href="#">Sliders<i
                                                                className="zmdi zmdi-chevron-right"></i></a>
                                                                <ul className="inside-menu">
                                                                    <li><a href="/educat-preview/educat/slider-style-1">Slider
                                                                        Style 1</a></li>
                                                                    <li><a href="/educat-preview/educat/slider-style-2">Slider
                                                                        Style 2</a></li>
                                                                    <li><a href="/educat-preview/educat/slider-style-3">Slider
                                                                        Style 3</a></li>
                                                                    <li><a
                                                                        href="/educat-preview/educat/background-image">Image
                                                                        Background </a></li>
                                                                    <li><a
                                                                        href="/educat-preview/educat/image-overlay-light">Overlay
                                                                        Light </a></li>
                                                                    <li><a
                                                                        href="/educat-preview/educat/image-overlay-dark">Overlay
                                                                        Dark </a></li>
                                                                    <li><a
                                                                        href="/educat-preview/educat/video-background">Video
                                                                        Background </a></li>
                                                                    <li><a href="/educat-preview/educat/fixed-image">Fixed
                                                                        Image</a></li>
                                                                    <li><a
                                                                        href="/educat-preview/educat/overlay-fixed-image">Overlay
                                                                        Fixed Image</a></li>
                                                                    <li><a
                                                                        href="/educat-preview/educat/text-animation-1">Text
                                                                        Animation 1 </a></li>
                                                                    <li><a
                                                                        href="/educat-preview/educat/text-animation-2">Text
                                                                        Animation 2 </a></li>
                                                                    <li><a
                                                                        href="/educat-preview/educat/text-animation-3">Text
                                                                        Animation 3 </a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a href="#">Menu Style<i
                                                                className="zmdi zmdi-chevron-right"></i></a>
                                                                <ul className="inside-menu">
                                                                    <li><a href="/educat-preview/educat/theme-menu-1">Theme
                                                                        Menu 1</a></li>
                                                                    <li><a href="/educat-preview/educat/theme-menu-2">Theme
                                                                        Menu 2</a></li>
                                                                    <li><a href="/educat-preview/educat/theme-menu-3">Theme
                                                                        Menu 3</a></li>
                                                                    <li><a
                                                                        href="/educat-preview/educat/without-top-bar">Without
                                                                        Top Bar</a></li>
                                                                    <li><a href="/educat-preview/educat/menu-center">Menu
                                                                        Center</a></li>
                                                                    <li><a
                                                                        href="/educat-preview/educat/menu-transparent">Transparent</a>
                                                                    </li>
                                                                    <li><a
                                                                        href="/educat-preview/educat/menu-semi-transparent">Semi
                                                                        Transparent</a></li>
                                                                    <li><a href="/educat-preview/educat/menu-dark">Menu
                                                                        Dark</a></li>
                                                                    <li><a href="/educat-preview/educat/borderd-menu">Menu
                                                                        Border</a></li>
                                                                    <li><a
                                                                        href="/educat-preview/educat/menu-top-border">Top
                                                                        Border Hover</a></li>
                                                                    <li><a href="/educat-preview/educat/menu-sticky">Menu
                                                                        Sticky</a></li>
                                                                    <li><a
                                                                        href="/educat-preview/educat/menu-non-sticky">Menu
                                                                        Non Sticky</a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a href="#">Page Title<i
                                                                className="zmdi zmdi-chevron-right"></i></a>
                                                                <ul className="inside-menu">
                                                                    <li><a
                                                                        href="/educat-preview/educat/breadcrumb-dark">Title
                                                                        Dark</a></li>
                                                                    <li><a
                                                                        href="/educat-preview/educat/breadcrumb-fixed">Title
                                                                        Fixed</a></li>
                                                                    <li><a
                                                                        href="/educat-preview/educat/breadcrumb-image">Title
                                                                        Image</a></li>
                                                                    <li><a
                                                                        href="/educat-preview/educat/breadcrumb-transparent">Title
                                                                        Transparent</a></li>
                                                                    <li><a
                                                                        href="/educat-preview/educat/breadcrumb-left">Title
                                                                        Left</a></li>
                                                                    <li><a
                                                                        href="/educat-preview/educat/breadcrumb-right">Title
                                                                        Right</a></li>
                                                                </ul>
                                                            </li>
                                                            <li><a href="#">Footer Style<i
                                                                className="zmdi zmdi-chevron-right"></i></a>
                                                                <ul className="inside-menu">
                                                                    <li><a href="/educat-preview/educat/footer-style-1">Footer
                                                                        Style 1</a></li>
                                                                    <li><a href="/educat-preview/educat/footer-style-2">Footer
                                                                        Style 2</a></li>
                                                                    <li><a href="/educat-preview/educat/footer-style-3">Footer
                                                                        Style 3</a></li>
                                                                    <li><a href="footer-style-4.html">Footer Style 4</a>
                                                                    </li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="/educat-preview/educat/">Shortcode</a>
                                                        {/*  Mega Menu  */}
                                                        <div className="mega-menu mm-5-column">
                                                            <div className="col-4 pull-left pl-20">
                                                                <h3>Shortcode List</h3>
                                                                <a href="/educat-preview/educat/shortcode-course">Courses</a>
                                                                <a href="/educat-preview/educat/shortcode-event">Event</a>
                                                                <a href="/educat-preview/educat/shortcode-latest-news">Latest
                                                                    News</a>
                                                                <a href="/educat-preview/educat/shortcode-product">Product</a>
                                                                <a href="/educat-preview/educat/shortcode-testimonial">Testimonial</a>
                                                            </div>
                                                            <div className="col-4 pull-left">
                                                                <h3>Shortcode List</h3>
                                                                <a href="/educat-preview/educat/shortcode-contact-form">Contact
                                                                    Form</a>
                                                                <a href="/educat-preview/educat/shortcode-map">Map</a>
                                                                <a href="/educat-preview/educat/shortcode-facts">Facts</a>
                                                                <a href="/educat-preview/educat/image-gallery">Image
                                                                    Gallery</a>
                                                                <a href="/educat-preview/educat/video-gallery">Video
                                                                    Gallery</a>
                                                            </div>
                                                            <div className="col-4 pull-left">
                                                                <h3>Shortcode List</h3>
                                                                <a href="/educat-preview/educat/shortcode-alerts">Alerts</a>
                                                                <a href="/educat-preview/educat/shortcode-button">Button</a>
                                                                <a href="/educat-preview/educat/shortcode-breadcrumbs">Breadcrumb</a>
                                                                <a href="/educat-preview/educat/shortcode-dropdown">Dropdown</a>
                                                                <a href="/educat-preview/educat/shortcode-pagination">Pagination</a>
                                                            </div>
                                                            <div className="col-4 pull-left">
                                                                <h3>Shortcode List</h3>
                                                                <a href="/educat-preview/educat/shortcode-progressbar">Progressbar</a>
                                                                <a href="/educat-preview/educat/text-animation-1">Text
                                                                    Animation 1</a>
                                                                <a href="/educat-preview/educat/text-animation-2">Text
                                                                    Animation 2</a>
                                                                <a href="/educat-preview/educat/text-animation-3">Text
                                                                    Animation 3</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li><a href="/educat-preview/educat/">Pages</a>
                                                        <ul className="sub-menu">
                                                            <li><a href="/educat-preview/educat/about">About Us</a></li>
                                                            <li><a href="/educat-preview/educat/courses">Courses
                                                                Page</a></li>
                                                            <li><a href="/educat-preview/educat/courses-details">Course
                                                                Details Page</a></li>
                                                            <li><a href="/educat-preview/educat/event">Event Page</a>
                                                            </li>
                                                            <li><a href="/educat-preview/educat/event-details">Event
                                                                Details Page</a></li>
                                                            <li><a href="/educat-preview/educat/latest-news">Latest News
                                                                Page</a></li>
                                                            <li><a href="/educat-preview/educat/news-details">News
                                                                Details Page</a></li>
                                                            <li><a href="/educat-preview/educat/shop-grid">Shop Page</a>
                                                            </li>
                                                            <li><a href="/educat-preview/educat/product-details">Product
                                                                Details Page</a></li>
                                                            <li><a href="/educat-preview/educat/contact">Contact</a>
                                                            </li>
                                                            <li><a href="/educat-preview/educat/login-register">Login
                                                                Register</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="/educat-preview/educat/shop-grid">Shop</a>
                                                        <ul className="sub-menu">
                                                            <li><a href="/educat-preview/educat/product-details">Product
                                                                Details</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="/educat-preview/educat/contact">Contact</a></li>
                                                </ul>
                                            </nav>
                                        </div>
                                        <ul className="header-search">
                                            <li className="search-menu">
                                                <i id="toggle-search" className="zmdi zmdi-search-for"></i>
                                            </li>
                                        </ul>
                                        {/* Search Form */}
                                        <div className="search">
                                            <div className="search-form">
                                                <form id="search-form" action="#">
                                                    <input type="search" placeholder="Search here..." name="search"/>
                                                    <button type="submit">
                                                        <span><i className="fa fa-search"></i></span>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                        {/* End of Search Form */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  Mobile Menu Area start  */}
                    <div className="mobile-menu-area">
                        <div className="container clearfix">
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="mobile-menu">
                                        <nav id="dropdown" style={{display: "block"}}>
                                            <ul>
                                                <li><a href="/educat-preview/educat/">HOME</a>
                                                    <ul>
                                                        <li><a href="/educat-preview/educat/">Slider Style 1</a></li>
                                                        <li><a href="/educat-preview/educat/index-2">Slider Style 2</a>
                                                        </li>
                                                        <li><a href="/educat-preview/educat/index-3">Background
                                                            Image</a></li>
                                                        <li><a href="/educat-preview/educat/index-4">Image Overlay
                                                            Light</a></li>
                                                        <li><a href="/educat-preview/educat/index-5">Image Overlay
                                                            Dark</a></li>
                                                        <li><a href="/educat-preview/educat/index-6">Menu With
                                                            Slider</a></li>
                                                        <li><a href="/educat-preview/educat/index-7">Menu With Image</a>
                                                        </li>
                                                        <li><a href="/educat-preview/educat/index-8">Menu With
                                                            Overlay</a></li>
                                                        <li><a href="/educat-preview/educat/index-9">Video
                                                            Background</a></li>
                                                        <li><a href="/educat-preview/educat/index-10">Fixed Image</a>
                                                        </li>
                                                        <li><a href="/educat-preview/educat/index-11">Overlay Fixed
                                                            Image</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="/educat-preview/educat/about">About Us</a></li>
                                                <li><a href="/educat-preview/educat/courses">Courses</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="/educat-preview/educat/courses-details">Courses
                                                            Details</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="/educat-preview/educat/shop-grid">Shop</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="/educat-preview/educat/product-details">Product
                                                            Details</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="/educat-preview/educat/event">Event</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="/educat-preview/educat/event-details">Event
                                                            Details</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="/educat-preview/educat/">Shortcode</a>
                                                    <ul className="sub-menu">
                                                        <li><a
                                                            href="/educat-preview/educat/shortcode-course">Courses</a>
                                                        </li>
                                                        <li><a href="/educat-preview/educat/shortcode-event">Event</a>
                                                        </li>
                                                        <li><a href="/educat-preview/educat/shortcode-latest-news">Latest
                                                            News</a></li>
                                                        <li><a
                                                            href="/educat-preview/educat/shortcode-product">Product</a>
                                                        </li>
                                                        <li><a
                                                            href="/educat-preview/educat/shortcode-testimonial">Testimonial</a>
                                                        </li>
                                                        <li><a href="/educat-preview/educat/shortcode-contact-form">Contact
                                                            Form</a></li>
                                                        <li><a href="/educat-preview/educat/shortcode-map">Map</a></li>
                                                        <li><a href="/educat-preview/educat/shortcode-facts">Facts</a>
                                                        </li>
                                                        <li><a href="/educat-preview/educat/image-gallery">Image
                                                            Gallery</a></li>
                                                        <li><a href="/educat-preview/educat/video-gallery">Video
                                                            Gallery</a></li>
                                                        <li><a href="/educat-preview/educat/shortcode-alerts">Alerts</a>
                                                        </li>
                                                        <li><a href="/educat-preview/educat/shortcode-button">Button</a>
                                                        </li>
                                                        <li><a
                                                            href="/educat-preview/educat/shortcode-breadcrumbs">Breadcrumb</a>
                                                        </li>
                                                        <li><a
                                                            href="/educat-preview/educat/shortcode-dropdown">Dropdown</a>
                                                        </li>
                                                        <li><a
                                                            href="/educat-preview/educat/shortcode-pagination">Pagination</a>
                                                        </li>
                                                        <li><a
                                                            href="/educat-preview/educat/shortcode-progressbar">Progressbar</a>
                                                        </li>
                                                        <li><a href="/educat-preview/educat/text-animation-1">Text
                                                            Animation 1</a></li>
                                                        <li><a href="/educat-preview/educat/text-animation-2">Text
                                                            Animation 2</a></li>
                                                        <li><a href="/educat-preview/educat/text-animation-3">Text
                                                            Animation 3</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="/educat-preview/educat/latest-news">Latest News</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="/educat-preview/educat/news-details">News
                                                            Details</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="/educat-preview/educat/">Features</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="#">Sliders</a>
                                                            <ul>
                                                                <li><a href="/educat-preview/educat/slider-style-1">Slider
                                                                    Style 1</a></li>
                                                                <li><a href="/educat-preview/educat/slider-style-2">Slider
                                                                    Style 2</a></li>
                                                                <li><a href="/educat-preview/educat/slider-style-3">Slider
                                                                    Style 3</a></li>
                                                                <li><a href="/educat-preview/educat/background-image">Image
                                                                    Background </a></li>
                                                                <li><a
                                                                    href="/educat-preview/educat/image-overlay-light">Overlay
                                                                    Light </a></li>
                                                                <li><a href="/educat-preview/educat/image-overlay-dark">Overlay
                                                                    Dark </a></li>
                                                                <li><a href="/educat-preview/educat/video-background">Video
                                                                    Background </a></li>
                                                                <li><a href="/educat-preview/educat/fixed-image">Fixed
                                                                    Image</a></li>
                                                                <li><a
                                                                    href="/educat-preview/educat/overlay-fixed-image">Overlay
                                                                    Fixed Image</a></li>
                                                                <li><a href="/educat-preview/educat/text-animation-1">Text
                                                                    Animation 1 </a></li>
                                                                <li><a href="/educat-preview/educat/text-animation-2">Text
                                                                    Animation 2 </a></li>
                                                                <li><a href="/educat-preview/educat/text-animation-3">Text
                                                                    Animation 3 </a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#">Menu Style</a>
                                                            <ul>
                                                                <li><a href="/educat-preview/educat/theme-menu-1">Theme
                                                                    Menu 1</a></li>
                                                                <li><a href="/educat-preview/educat/theme-menu-2">Theme
                                                                    Menu 2</a></li>
                                                                <li><a href="/educat-preview/educat/theme-menu-3">Theme
                                                                    Menu 3</a></li>
                                                                <li><a href="/educat-preview/educat/without-top-bar">Without
                                                                    Top Bar</a></li>
                                                                <li><a href="/educat-preview/educat/menu-center">Menu
                                                                    Center</a></li>
                                                                <li><a
                                                                    href="/educat-preview/educat/menu-transparent">Transparent</a>
                                                                </li>
                                                                <li><a
                                                                    href="/educat-preview/educat/menu-semi-transparent">Semi
                                                                    Transparent</a></li>
                                                                <li><a href="/educat-preview/educat/menu-dark">Menu
                                                                    Dark</a></li>
                                                                <li><a href="/educat-preview/educat/borderd-menu">Menu
                                                                    Border</a></li>
                                                                <li><a href="/educat-preview/educat/menu-top-border">Top
                                                                    Border Hover</a></li>
                                                                <li><a href="/educat-preview/educat/menu-sticky">Menu
                                                                    Sticky</a></li>
                                                                <li><a href="/educat-preview/educat/menu-non-sticky">Menu
                                                                    Non Sticky</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#">Page Title</a>
                                                            <ul>
                                                                <li><a href="/educat-preview/educat/breadcrumb-dark">Title
                                                                    Dark</a></li>
                                                                <li><a href="/educat-preview/educat/breadcrumb-fixed">Title
                                                                    Fixed</a></li>
                                                                <li><a href="/educat-preview/educat/breadcrumb-image">Title
                                                                    Image</a></li>
                                                                <li><a
                                                                    href="/educat-preview/educat/breadcrumb-transparent">Title
                                                                    Transparent</a></li>
                                                                <li><a href="/educat-preview/educat/breadcrumb-left">Title
                                                                    Left</a></li>
                                                                <li><a href="/educat-preview/educat/breadcrumb-right">Title
                                                                    Right</a></li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#">Footer Style</a>
                                                            <ul>
                                                                <li><a href="/educat-preview/educat/footer-style-1">Footer
                                                                    Style 1</a></li>
                                                                <li><a href="/educat-preview/educat/footer-style-2">Footer
                                                                    Style 2</a></li>
                                                                <li><a href="/educat-preview/educat/footer-style-3">Footer
                                                                    Style 3</a></li>
                                                                <li><a href="footer-style-4.html">Footer Style 4</a>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li><a href="/educat-preview/educat/login-register">Login Register</a>
                                                </li>
                                                <li><a href="/educat-preview/educat/contact">Contact us</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  Mobile Menu Area end  */}
                </header>
                {/* End of Header Area */}
                {/* Slider Area Start */}
                <div className="slider-area">
                    <div className="preview-2">
                        <div id="nivoslider" className="slides nivoSlider">
                            <img src="educat/styles/img/slider/1.jpg" alt="" title="#slider-1-caption1"
                                 style={{width: "1018px", visibility: "hidden"}}/>
                            <img src="educat/styles/img/slider/2.jpg" alt="" title="#slider-1-caption2"
                                 style={{width: "1018px", visibility: "hidden"}}/>
                            <img className="nivo-main-image" src="educat/styles/img/slider/1.jpg"
                                 style={{display: "inline", height: "auto", width: "1018px"}}/>
                            <div className="nivo-caption" style={{display: "block"}}>
                                <div className="banner-content slider-1">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="text-content-wrapper">
                                                    <div className="text-content">
                                                        <h1 className="title1 wow fadeInUp  animated"
                                                            data-wow-duration="2000ms" data-wow-delay="0s"
                                                            style={{
                                                                visibility: "visible",
                                                                animationDuration: "2000ms",
                                                                animationDelay: "0s",
                                                                animationName: "fadeInUp"
                                                            }}>Education Needs<br/>
                                                            Complete Solution</h1>
                                                        <p className="sub-title wow fadeInUp d-none d-lg-block"
                                                           data-wow-duration="2900ms" data-wow-delay=".5s"
                                                           style={{
                                                               visibility: "visible",
                                                               animationDuration: "2900ms",
                                                               animationDelay: "0.5s",
                                                               animationName: "fadeInUp"
                                                           }}> There are many variations of passages of Lorem Ipsum
                                                            available, but the majority have<br/>
                                                            suffered alteration in some form, by
                                                            injected humour, or randomised words
                                                            which<br/>
                                                            don't look even slightly believable.</p>
                                                        <div className="banner-readmore wow fadeInUp  animated"
                                                             data-wow-duration="3600ms" data-wow-delay=".6s"
                                                             style={{
                                                                 visibility: "visible",
                                                                 animationDuration: "3600ms",
                                                                 animationDelay: "0.6s",
                                                                 animationName: "fadeInUp"
                                                             }}>
                                                            <a className="button-default" href="#">View
                                                                Courses</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="nivo-directionNav"><a className="nivo-prevNav">Prev</a><a
                                className="nivo-nextNav">Next</a></div>
                        </div>
                        <div className="nivo-controlNav"><a className="nivo-control active" rel="0">1</a><a
                            className="nivo-control"
                            rel="1">2</a></div>
                        <div id="slider-1-caption1" className="nivo-html-caption nivo-caption">
                            <div className="banner-content slider-1">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="text-content-wrapper">
                                                <div className="text-content">
                                                    <h1 className="title1 wow fadeInUp animated"
                                                        data-wow-duration="2000ms"
                                                        data-wow-delay="0s"
                                                        style={{
                                                            visibility: "visible",
                                                            animationDuration: "2000ms",
                                                            animationDelay: "0s",
                                                            animationName: "fadeInUp"
                                                        }}>Education
                                                        Needs<br/>
                                                        Complete Solution</h1>
                                                    <p className="sub-title wow fadeInUp d-none d-lg-block animated"
                                                       data-wow-duration="2900ms" data-wow-delay=".5s"
                                                       style={{
                                                           visibility: "visible",
                                                           animationDuration: "2900ms",
                                                           animationDelay: "0.5s",
                                                           animationName: "fadeInUp"
                                                       }}> There
                                                        are many variations of passages of Lorem Ipsum available, but
                                                        the majority have<br/>
                                                        suffered alteration in some form, by injected humour, or
                                                        randomised words which<br/>
                                                        don't look even slightly believable.</p>
                                                    <div className="banner-readmore wow fadeInUp animated"
                                                         data-wow-duration="3600ms" data-wow-delay=".6s"
                                                         style={{
                                                             visibility: "visible",
                                                             animationDuration: "3600ms",
                                                             animationDelay: "0.6s",
                                                             animationName: "fadeInUp"
                                                         }}>
                                                        <a className="button-default" href="#">View Courses</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="slider-1-caption2" className="nivo-html-caption nivo-caption">
                            <div className="banner-content slider-2">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="text-content-wrapper">
                                                <div className="text-content slide-2">
                                                    <h1 className="title1 wow rotateInDownLeft animated"
                                                        data-wow-duration="1000ms" data-wow-delay="0s"
                                                        style={{
                                                            visibility: "visible",
                                                            animationDuration: "1000ms",
                                                            animationDelay: "0s",
                                                            animationName: "fadeInUp"
                                                        }}>Education
                                                        Needs<br/>
                                                        Complete Solution</h1>
                                                    <p className="sub-title wow rotateInDownLeft d-none d-lg-block animated"
                                                       data-wow-duration="1800ms" data-wow-delay="0s"
                                                       style={{
                                                           visibility: "visible",
                                                           animationDuration: "1800ms",
                                                           animationDelay: "0s",
                                                           animationName: "rotateInDownLeft"
                                                       }}> There
                                                        are many variations of passages of Lorem Ipsum available, but
                                                        the majority have<br/>
                                                        suffered alteration in some form, by injected humour, or
                                                        randomised words which<br/>
                                                        don't look even slightly believable.</p>
                                                    <div className="banner-readmore wow rotateInDownLeft animated"
                                                         data-wow-duration="1800ms" data-wow-delay="0s"
                                                         style={{
                                                             visibility: "visible",
                                                             animationDuration: "1800ms",
                                                             animationDelay: "0s",
                                                             animationName: "rotateInDownLeft"
                                                         }}>
                                                        <a className="button-default" href="#">View Courses</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End of Slider Area */}
                {/* About Area Start */}
                <div className="about-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-12">
                                <div className="about-container">
                                    <h3>WHY EDUCAT ?</h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority
                                        have suffered alteration in some form, by injected humour, or randomised words
                                        which don't look even slightly believable. If you are going to use a passage of
                                        Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the
                                        middle of text
                                        amr songr balga ami toami valo lasi ciri din akr dali</p>
                                    <a className="button-default" href="#">Learn Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End of About Area */}
                {/* Course Area Start */}
                <div className="course-area section-padding bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title-wrapper">
                                    <div className="section-title">
                                        <h3>POPULAR COURSES</h3>
                                        <p>There are many variations of passages of Lorem Ipsum</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="single-item">
                                    <div className="single-item-image overlay-effect">
                                        <a href="#"><img src="educat/styles/img/course/1.jpg" alt=""/></a>
                                    </div>
                                    <div className="single-item-text">
                                        <h4><a href="#">Photoshop CC 2017</a></h4>
                                        <div className="single-item-text-info">
                                            <span>By: <span>M S Nawaz</span></span>
                                            <span>Date: <span>20.5.15</span></span>
                                        </div>
                                        <p>There are many variations of sages of Lorem Ipsum available, but the mrity
                                            have suffered alteration in some orm, by injected humo ur,There are many but
                                            the mri have suffered alteration in some </p>
                                        <div className="single-item-content">
                                            <div className="single-item-comment-view">
                                                <span><i className="zmdi zmdi-eye"></i>59</span>
                                                <span><i className="zmdi zmdi-comments"></i>19</span>
                                            </div>
                                            <div className="single-item-rating">
                                                <i className="zmdi zmdi-star"></i>
                                                <i className="zmdi zmdi-star"></i>
                                                <i className="zmdi zmdi-star"></i>
                                                <i className="zmdi zmdi-star"></i>
                                                <i className="zmdi zmdi-star-half"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="button-bottom">
                                        <a href="#" className="button-default">Learn Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="single-item">
                                    <div className="single-item-image overlay-effect">
                                        <a href="#"><img src="educat/styles/img/course/2.jpg" alt=""/></a>
                                    </div>
                                    <div className="single-item-text">
                                        <h4><a href="#">Illustrator CC 2017</a></h4>
                                        <div className="single-item-text-info">
                                            <span>By: <span>Subas Das</span></span>
                                            <span>Date: <span>20.5.15</span></span>
                                        </div>
                                        <p>There are many variations of sages of Lorem Ipsum available, but the mrity
                                            have suffered alteration in some orm, by injected humo ur,There are many but
                                            the mri have suffered alteration in some </p>
                                        <div className="single-item-content">
                                            <div className="single-item-comment-view">
                                                <span><i className="zmdi zmdi-eye"></i>59</span>
                                                <span><i className="zmdi zmdi-comments"></i>19</span>
                                            </div>
                                            <div className="single-item-rating">
                                                <i className="zmdi zmdi-star"></i>
                                                <i className="zmdi zmdi-star"></i>
                                                <i className="zmdi zmdi-star"></i>
                                                <i className="zmdi zmdi-star"></i>
                                                <i className="zmdi zmdi-star-half"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="button-bottom">
                                        <a href="#" className="button-default">Learn Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-12">
                                <div className="single-item">
                                    <div className="single-item-image overlay-effect">
                                        <a href="#"><img src="educat/styles/img/course/3.jpg" alt=""/></a>
                                    </div>
                                    <div className="single-item-text">
                                        <h4><a href="#">Indesign CC 2017</a></h4>
                                        <div className="single-item-text-info">
                                            <span>By: <span>Momin Boss</span></span>
                                            <span>Date: <span>20.5.15</span></span>
                                        </div>
                                        <p>There are many variations of sages of Lorem Ipsum available, but the mrity
                                            have suffered alteration in some orm, by injected humo ur,There are many but
                                            the mri have suffered alteration in some </p>
                                        <div className="single-item-content">
                                            <div className="single-item-comment-view">
                                                <span><i className="zmdi zmdi-eye"></i>59</span>
                                                <span><i className="zmdi zmdi-comments"></i>19</span>
                                            </div>
                                            <div className="single-item-rating">
                                                <i className="zmdi zmdi-star"></i>
                                                <i className="zmdi zmdi-star"></i>
                                                <i className="zmdi zmdi-star"></i>
                                                <i className="zmdi zmdi-star"></i>
                                                <i className="zmdi zmdi-star-half"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="button-bottom">
                                        <a href="#" className="button-default">Learn Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-sm-12 text-center">
                                <a href="#" className="button-default button-large">Browse All Courses <i
                                    className="zmdi zmdi-chevron-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End of Course Area */}
                {/* Fun Factor Area Start */}
                <div className="fun-factor-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title-wrapper white">
                                    <div className="section-title">
                                        <h3>IMPORTANT FACTS</h3>
                                        <p>There are many variations of passages of Lorem Ipsum</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-12">
                                <div className="single-fun-factor">
                                    <h4>Teachers</h4>
                                    <h2><span className="counter">79</span>+</h2>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                                <div className="single-fun-factor">
                                    <h4>Members</h4>
                                    <h2><span className="counter">120</span>+</h2>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                                <div className="single-fun-factor">
                                    <h4>Courses</h4>
                                    <h2><span className="counter">36</span>+</h2>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-12">
                                <div className="single-fun-factor">
                                    <h4>Countries</h4>
                                    <h2><span className="counter">20</span>+</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End of Fun Factor Area */}
                {/* Latest News Area Start */}
                <div className="latest-area section-padding bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title-wrapper">
                                    <div className="section-title">
                                        <h3>Latest News</h3>
                                        <p>There are many variations of passages</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="single-latest-item">
                                    <div className="single-latest-image">
                                        <a href="#"><img src="educat/styles/img/latest/1.jpg" alt=""/></a>
                                    </div>
                                    <div className="single-latest-text">
                                        <h3><a href="#">Learn English in ease</a></h3>
                                        <div className="single-item-comment-view">
                                            <span><i className="zmdi zmdi-calendar-check"></i>25 jun 2050</span>
                                            <span><i className="zmdi zmdi-eye"></i>59</span>
                                            <span><i className="zmdi zmdi-comments"></i>19</span>
                                        </div>
                                        <p>There are many variaons of passages of Lorem Ipsuable, amrn in some by
                                            injected humour, </p>
                                        <a href="#" className="button-default">LEARN Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="single-latest-item">
                                    <div className="single-latest-image">
                                        <a href="#"><img src="educat/styles/img/latest/2.jpg" alt=""/></a>
                                    </div>
                                    <div className="single-latest-text">
                                        <h3><a href="#">Learn English in ease</a></h3>
                                        <div className="single-item-comment-view">
                                            <span><i className="zmdi zmdi-calendar-check"></i>25 jun 2050</span>
                                            <span><i className="zmdi zmdi-eye"></i>59</span>
                                            <span><i className="zmdi zmdi-comments"></i>19</span>
                                        </div>
                                        <p>There are many variaons of passages of Lorem Ipsuable, amrn in some by
                                            injected humour, </p>
                                        <a href="#" className="button-default">LEARN Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="single-latest-item">
                                    <div className="single-latest-image">
                                        <a href="#"><img src="educat/styles/img/latest/3.jpg" alt=""/></a>
                                    </div>
                                    <div className="single-latest-text">
                                        <h3><a href="#">Learn English in ease</a></h3>
                                        <div className="single-item-comment-view">
                                            <span><i className="zmdi zmdi-calendar-check"></i>25 jun 2050</span>
                                            <span><i className="zmdi zmdi-eye"></i>59</span>
                                            <span><i className="zmdi zmdi-comments"></i>19</span>
                                        </div>
                                        <p>There are many variaons of passages of Lorem Ipsuable, amrn in some by
                                            injected humour, </p>
                                        <a href="#" className="button-default">LEARN Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="single-latest-item">
                                    <div className="single-latest-image">
                                        <a href="#"><img src="educat/styles/img/latest/4.jpg" alt=""/></a>
                                    </div>
                                    <div className="single-latest-text">
                                        <h3><a href="#">Learn English in ease</a></h3>
                                        <div className="single-item-comment-view">
                                            <span><i className="zmdi zmdi-calendar-check"></i>25 jun 2050</span>
                                            <span><i className="zmdi zmdi-eye"></i>59</span>
                                            <span><i className="zmdi zmdi-comments"></i>19</span>
                                        </div>
                                        <p>There are many variaons of passages of Lorem Ipsuable, amrn in some by
                                            injected humour, </p>
                                        <a href="#" className="button-default">LEARN Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End of Latest News Area */}
                {/* Online Product Area Start */}
                <div className="product-area section-bottom-padding bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title-wrapper">
                                    <div className="section-title">
                                        <h3>Online Library</h3>
                                        <p>There are many variations of passages</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="single-product-item">
                                    <div className="single-product-image">
                                        <a href="#"><img src="educat/styles/img/product/1.jpg" alt=""/></a>
                                    </div>
                                    <div className="single-product-text">
                                        <h4><a href="#">Title Product Here</a></h4>
                                        <h5>Book</h5>
                                        <div className="product-price">
                                            <h3>$ 28</h3>
                                            <div className="single-item-rating">
                                                <i className="zmdi zmdi-star"></i>
                                                <i className="zmdi zmdi-star"></i>
                                                <i className="zmdi zmdi-star"></i>
                                                <i className="zmdi zmdi-star"></i>
                                                <i className="zmdi zmdi-star-half"></i>
                                            </div>
                                        </div>
                                        <div className="product-buttons">
                                            <button type="button" className="button-default cart-btn">ADD TO CART
                                            </button>
                                            <button type="button" className="button-default"><i
                                                className="zmdi zmdi-favorite"></i></button>
                                            <button type="button" className="button-default"><i
                                                className="zmdi zmdi-refresh-alt"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single-product-item">
                                    <div className="single-product-image">
                                        <a href="#"><img src="educat/styles/img/product/2.jpg" alt=""/></a>
                                    </div>
                                    <div className="single-product-text">
                                        <h4><a href="#">Title Product Here</a></h4>
                                        <h5>Book</h5>
                                        <div className="product-price">
                                            <h3>$ 28</h3>
                                            <div className="single-item-rating">
                                                <i className="zmdi zmdi-star"></i>
                                                <i className="zmdi zmdi-star"></i>
                                                <i className="zmdi zmdi-star"></i>
                                                <i className="zmdi zmdi-star"></i>
                                                <i className="zmdi zmdi-star-half"></i>
                                            </div>
                                        </div>
                                        <div className="product-buttons">
                                            <button type="button" className="button-default cart-btn">ADD TO CART
                                            </button>
                                            <button type="button" className="button-default"><i
                                                className="zmdi zmdi-favorite"></i></button>
                                            <button type="button" className="button-default"><i
                                                className="zmdi zmdi-refresh-alt"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single-product-item">
                                    <div className="single-product-image">
                                        <a href="#"><img src="educat/styles/img/product/3.jpg" alt=""/></a>
                                    </div>
                                    <div className="single-product-text">
                                        <h4><a href="#">Title Product Here</a></h4>
                                        <h5>Book</h5>
                                        <div className="product-price">
                                            <h3>$ 28</h3>
                                            <div className="single-item-rating">
                                                <i className="zmdi zmdi-star"></i>
                                                <i className="zmdi zmdi-star"></i>
                                                <i className="zmdi zmdi-star"></i>
                                                <i className="zmdi zmdi-star"></i>
                                                <i className="zmdi zmdi-star-half"></i>
                                            </div>
                                        </div>
                                        <div className="product-buttons">
                                            <button type="button" className="button-default cart-btn">ADD TO CART
                                            </button>
                                            <button type="button" className="button-default"><i
                                                className="zmdi zmdi-favorite"></i></button>
                                            <button type="button" className="button-default"><i
                                                className="zmdi zmdi-refresh-alt"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single-product-item">
                                    <div className="single-product-image">
                                        <a href="#"><img src="educat/styles/img/product/4.jpg" alt=""/></a>
                                    </div>
                                    <div className="single-product-text">
                                        <h4><a href="#">Title Product Here</a></h4>
                                        <h5>Book</h5>
                                        <div className="product-price">
                                            <h3>$ 28</h3>
                                            <div className="single-item-rating">
                                                <i className="zmdi zmdi-star"></i>
                                                <i className="zmdi zmdi-star"></i>
                                                <i className="zmdi zmdi-star"></i>
                                                <i className="zmdi zmdi-star"></i>
                                                <i className="zmdi zmdi-star-half"></i>
                                            </div>
                                        </div>
                                        <div className="product-buttons">
                                            <button type="button" className="button-default cart-btn">ADD TO CART
                                            </button>
                                            <button type="button" className="button-default"><i
                                                className="zmdi zmdi-favorite"></i></button>
                                            <button type="button" className="button-default"><i
                                                className="zmdi zmdi-refresh-alt"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End of Online Product Area */}
                {/* Testimonial Area Start */}
                <div className="testimonial-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 offset-lg-0 col-md-12 col-12">
                                <div className="row">
                                    <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
                                        <div
                                            className="testimonial-image-slider text-center slick-initialized slick-slider">
                                            <button type="button" data-role="none" className="slick-prev slick-arrow"
                                                    aria-label="Previous" role="button"
                                                    style={{display: "block"}}>Previous
                                            </button>
                                            <div aria-live="polite" className="slick-list draggable"
                                                 style={{padding: "0px 10px"}}>
                                                <div className="slick-track"
                                                     style={{
                                                         opacity: 1,
                                                         width: "1960px",
                                                         transform: "translate3d(-420px, 0px, 0px)"
                                                     }}
                                                     role="listbox">
                                                    <div className="sin-testiImage slick-slide slick-cloned"
                                                         data-slick-index="-4" aria-hidden="true"
                                                         style={{width: "140px"}}
                                                         tabIndex="-1">
                                                        <img src="educat/styles/img/testimonial/3.jpg"
                                                             alt="testimonial 3"/>
                                                    </div>
                                                    <div className="sin-testiImage slick-slide slick-cloned"
                                                         data-slick-index="-3" aria-hidden="true"
                                                         style={{width: "140px"}}
                                                         tabIndex="-1">
                                                        <img src="educat/styles/img/testimonial/1.jpg"
                                                             alt="testimonial 1"/>
                                                    </div>
                                                    <div className="sin-testiImage slick-slide slick-cloned"
                                                         data-slick-index="-2" aria-hidden="true"
                                                         style={{width: "140px"}}
                                                         tabIndex="-1">
                                                        <img src="educat/styles/img/testimonial/2.jpg"
                                                             alt="testimonial 2"/>
                                                    </div>
                                                    <div
                                                        className="sin-testiImage slick-slide slick-cloned slick-active"
                                                        data-slick-index="-1" aria-hidden="false"
                                                        style={{width: "140px"}}
                                                        tabIndex="-1">
                                                        <img src="educat/styles/img/testimonial/3.jpg"
                                                             alt="testimonial 3"/>
                                                    </div>
                                                    <div
                                                        className="sin-testiImage slick-slide slick-current slick-active slick-center"
                                                        data-slick-index="0" aria-hidden="false"
                                                        style={{width: "140px"}}
                                                        tabIndex="-1" role="option" aria-describedby="slick-slide10">
                                                        <img src="educat/styles/img/testimonial/1.jpg"
                                                             alt="testimonial 1"/>
                                                    </div>
                                                    <div className="sin-testiImage slick-slide slick-active"
                                                         data-slick-index="1" aria-hidden="false"
                                                         style={{width: "140px"}}
                                                         tabIndex="-1" role="option" aria-describedby="slick-slide11">
                                                        <img src="educat/styles/img/testimonial/2.jpg"
                                                             alt="testimonial 2"/>
                                                    </div>
                                                    <div className="sin-testiImage slick-slide" data-slick-index="2"
                                                         aria-hidden="true" style={{width: "140px"}} tabIndex="-1"
                                                         role="option" aria-describedby="slick-slide12">
                                                        <img src="educat/styles/img/testimonial/3.jpg"
                                                             alt="testimonial 3"/>
                                                    </div>
                                                    <div className="sin-testiImage slick-slide" data-slick-index="3"
                                                         aria-hidden="true" style={{width: "140px"}} tabIndex="-1"
                                                         role="option" aria-describedby="slick-slide13">
                                                        <img src="educat/styles/img/testimonial/1.jpg"
                                                             alt="testimonial 1"/>
                                                    </div>
                                                    <div className="sin-testiImage slick-slide" data-slick-index="4"
                                                         aria-hidden="true" style={{width: "140px"}} tabIndex="-1"
                                                         role="option" aria-describedby="slick-slide14">
                                                        <img src="educat/styles/img/testimonial/2.jpg"
                                                             alt="testimonial 2"/>
                                                    </div>
                                                    <div className="sin-testiImage slick-slide" data-slick-index="5"
                                                         aria-hidden="true" style={{width: "140px"}} tabIndex="-1"
                                                         role="option" aria-describedby="slick-slide15">
                                                        <img src="educat/styles/img/testimonial/3.jpg"
                                                             alt="testimonial 3"/>
                                                    </div>
                                                    <div
                                                        className="sin-testiImage slick-slide slick-cloned slick-center"
                                                        data-slick-index="6" aria-hidden="true"
                                                        style={{width: "140px"}}
                                                        tabIndex="-1">
                                                        <img src="educat/styles/img/testimonial/1.jpg"
                                                             alt="testimonial 1"/>
                                                    </div>
                                                    <div className="sin-testiImage slick-slide slick-cloned"
                                                         data-slick-index="7" aria-hidden="true"
                                                         style={{width: "140px"}}
                                                         tabIndex="-1">
                                                        <img src="educat/styles/img/testimonial/2.jpg"
                                                             alt="testimonial 2"/>
                                                    </div>
                                                    <div className="sin-testiImage slick-slide slick-cloned"
                                                         data-slick-index="8" aria-hidden="true"
                                                         style={{width: "140px"}}
                                                         tabIndex="-1">
                                                        <img src="educat/styles/img/testimonial/3.jpg"
                                                             alt="testimonial 3"/>
                                                    </div>
                                                    <div className="sin-testiImage slick-slide slick-cloned"
                                                         data-slick-index="9" aria-hidden="true"
                                                         style={{width: "140px"}}
                                                         tabIndex="-1">
                                                        <img src="educat/styles/img/testimonial/1.jpg"
                                                             alt="testimonial 1"/>
                                                    </div>
                                                </div>
                                            </div>


                                            <button type="button" data-role="none" className="slick-next slick-arrow"
                                                    aria-label="Next" role="button" style={{display: "block"}}>Next
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="testimonial-text-slider text-center slick-initialized slick-slider">
                                    <div aria-live="polite" className="slick-list">
                                        <div className="slick-track" style={{opacity: 1, width: "3960px"}}
                                             role="listbox">
                                            <div className="sin-testiText slick-slide slick-current slick-active"
                                                 data-slick-index="0" aria-hidden="false"
                                                 style={{
                                                     width: "660px",
                                                     position: "relative",
                                                     left: "0px",
                                                     top: "0px",
                                                     zIndex: 999,
                                                     opacity: 1
                                                 }}
                                                 tabIndex="-1" role="option" aria-describedby="slick-slide00">
                                                <h2>M S Nawaz </h2>
                                                <p>There are many variations of passages of Lorem Ipsum available, but
                                                    the majority have suffered alteration in some form, by injected
                                                    humour, or randomised words which don't look even slightly
                                                    believable.</p>
                                            </div>
                                            <div className="sin-testiText slick-slide" data-slick-index="1"
                                                 aria-hidden="true"
                                                 style={{
                                                     width: "660px",
                                                     position: "relative",
                                                     left: "-660px",
                                                     top: "0px",
                                                     zIndex: 998,
                                                     opacity: 0
                                                 }}
                                                 tabIndex="-1" role="option" aria-describedby="slick-slide01">
                                                <h2>Chowchilla Madera</h2>
                                                <p>Nam nec tellus a odio tincidunt This lorem is Photoshop's version of
                                                    Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
                                                    nisi sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                                                    ipsum gravida.</p>
                                            </div>
                                            <div className="sin-testiText slick-slide" data-slick-index="2"
                                                 aria-hidden="true"
                                                 style={{
                                                     width: "660px",
                                                     position: "relative",
                                                     left: "-1320px",
                                                     top: "0px",
                                                     zIndex: 998,
                                                     opacity: 0
                                                 }}
                                                 tabIndex="-1" role="option" aria-describedby="slick-slide02">
                                                <h2>Kattie Luis</h2>
                                                <p>Nam nec tellus a odio tincidunt This is Photoshop's version of Lorem
                                                    Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean tincidunt
                                                    sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                                                    Photoshop.</p>
                                            </div>
                                            <div className="sin-testiText slick-slide" data-slick-index="3"
                                                 aria-hidden="true"
                                                 style={{
                                                     width: "660px",
                                                     position: "relative",
                                                     left: "-1980px",
                                                     top: "0px",
                                                     zIndex: 998,
                                                     opacity: 0
                                                 }}
                                                 tabIndex="-1" role="option" aria-describedby="slick-slide03">
                                                <h2>M S Nawaz </h2>
                                                <p>There are many variations of passages of Lorem Ipsum available, but
                                                    the majority have suffered alteration in some form, by injected
                                                    humour, or randomised words which don't look even slightly
                                                    believable.</p>
                                            </div>
                                            <div className="sin-testiText slick-slide" data-slick-index="4"
                                                 aria-hidden="true"
                                                 style={{
                                                     width: "660px",
                                                     position: "relative",
                                                     left: "-2640px",
                                                     top: "0px",
                                                     zIndex: 998,
                                                     opacity: 0
                                                 }}
                                                 tabIndex="-1" role="option" aria-describedby="slick-slide04">
                                                <h2>Chowchilla Madera</h2>
                                                <p>Nam nec tellus a odio tincidunt This is Photoshop's version of Lorem
                                                    Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
                                                    sollicitudin, aliquet lorem quis tellus velit bibendum auctor, nisi
                                                    elit consequat ipsum</p>
                                            </div>
                                            <div className="sin-testiText slick-slide" data-slick-index="5"
                                                 aria-hidden="true" tabIndex="-1" role="option"
                                                 aria-describedby="slick-slide05"
                                                 style={{
                                                     width: "660px",
                                                     position: "relative",
                                                     left: "-330px",
                                                     top: "0px",
                                                     zIndex: 998,
                                                     opacity: 0
                                                 }}>
                                                <h2>Kattie Luis</h2>
                                                <p>Nam nec tellus a odio tincidunt This is Photoshop's version of Lorem
                                                    Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean
                                                    sollicitudin, lorem gravida tincidunt quis bibendum auctor, nisi
                                                    elit consequat ipsum</p>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End of Testimonial Area */}
                {/* Event Area Start */}
                <div className="event-area section-padding bg-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="section-title-wrapper">
                                    <div className="section-title">
                                        <h3>OUR EVENTS</h3>
                                        <p>There are many variations of passages</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="single-event-item">
                                    <div className="single-event-image">
                                        <a href="#">
                                            <img src="educat/styles/img/event/1.jpg" alt=""/>
                                            <span><span>15</span>Jun</span>
                                        </a>
                                    </div>
                                    <div className="single-event-text">
                                        <h3><a href="#">Learn English in ease</a></h3>
                                        <div className="single-item-comment-view">
                                            <span><i className="zmdi zmdi-time"></i>4.00 pm - 8.00 pm</span>
                                            <span><i className="zmdi zmdi-pin"></i>Dhaka Bangladesh</span>
                                        </div>
                                        <p>There are many variaons of passa of Lorem Ipsuable, amrn in sofby injected
                                            humour, amr sarata din megla....</p>
                                        <a className="button-default" href="#">LEARN Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-event-item">
                                    <div className="single-event-image">
                                        <a href="#">
                                            <img src="educat/styles/img/event/2.jpg" alt=""/>
                                            <span><span>20</span>Apr</span>
                                        </a>
                                    </div>
                                    <div className="single-event-text">
                                        <h3><a href="#">Learn English in ease</a></h3>
                                        <div className="single-item-comment-view">
                                            <span><i className="zmdi zmdi-time"></i>4.00 pm - 8.00 pm</span>
                                            <span><i className="zmdi zmdi-pin"></i>Jessore Bangladesh</span>
                                        </div>
                                        <p>There are many variaons of passa of Lorem Ipsuable, amrn in sofby injected
                                            humour, amr sarata din megla....</p>
                                        <a className="button-default" href="#">LEARN Now</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="single-event-item">
                                    <div className="single-event-image">
                                        <a href="#">
                                            <img src="educat/styles/img/event/3.jpg" alt=""/>
                                            <span><span>06</span>Dec</span>
                                        </a>
                                    </div>
                                    <div className="single-event-text">
                                        <h3><a href="#">Learn English in ease</a></h3>
                                        <div className="single-item-comment-view">
                                            <span><i className="zmdi zmdi-time"></i>4.00 pm - 8.00 pm</span>
                                            <span><i className="zmdi zmdi-pin"></i>Dhaka. Bangladesh</span>
                                        </div>
                                        <p>There are many variaons of passa of Lorem Ipsuable, amrn in sofby injected
                                            humour, amr sarata din megla....</p>
                                        <a className="button-default" href="#">LEARN Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End of Event Area */}
                {/* Newsletter Area Start */}
                <div className="newsletter-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-5">
                                <div className="newsletter-content">
                                    <h3>SUBSCRIBE</h3>
                                    <h2>TO OUR NEWSLETTER</h2>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7">
                                <div className="newsletter-form angle">
                                    <form action="#" id="mc-form" className="mc-form footer-newsletter fix"
                                          novalidate="true">
                                        <div className="subscribe-form">
                                            <input id="mc-email" type="email" name="EMAIL"
                                                   placeholder="Enter your email address..."/>
                                            <button id="mc-submit" type="submit">SUBSCRIBE</button>
                                        </div>
                                    </form>
                                    {/*  mailchimp-alerts Start  */}
                                    <div className="mailchimp-alerts text-centre fix pull-right">
                                        <div className="mailchimp-submitting"></div>
                                        {/*  mailchimp-submitting end  */}
                                        <div className="mailchimp-success"></div>
                                        {/*  mailchimp-success end  */}
                                        <div className="mailchimp-error"></div>
                                        {/*  mailchimp-error end  */}
                                    </div>
                                    {/*  mailchimp-alerts end  */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End of Newsletter Area */}
                {/* Footer Widget Area Start */}
                <div className="footer-widget-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="single-footer-widget">
                                    <div className="footer-logo">
                                        <a href="/educat-preview/educat/">
                                            <img src="educat/styles/img/logo/footer.png" alt=""/>
                                        </a>
                                    </div>
                                    <p>There are many variations of passg of Lorem Ipsum available, but
                                        thmajority have
                                        suffered altem, </p>
                                    <div className="social-icons">
                                        <a href="#"><i className="zmdi zmdi-facebook"></i></a>
                                        <a href="#"><i className="zmdi zmdi-rss"></i></a>
                                        <a href="#"><i className="zmdi zmdi-google-plus"></i></a>
                                        <a href="#"><i className="zmdi zmdi-pinterest"></i></a>
                                        <a href="#"><i className="zmdi zmdi-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single-footer-widget">
                                    <h3>GET IN TOUCH</h3>
                                    <a href="tel:0123-456-789"><i
                                        className="fa fa-phone"></i>0123-456-789</a>
                                    <span><i className="fa fa-envelope"></i>info@example.com</span>
                                    <span><i className="fa fa-globe"></i>www.example.com</span>
                                    <span><i className="fa fa-map-marker"></i>Your address goes here.</span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single-footer-widget">
                                    <h3>Useful Links</h3>
                                    <ul className="footer-list">
                                        <li><a href="#">Teachers &amp; Staff</a></li>
                                        <li><a href="#">Our Courses</a></li>
                                        <li><a href="#">Courses Categories</a></li>
                                        <li><a href="#">Support</a></li>
                                        <li><a href="#">Terms &amp; Conditions</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single-footer-widget">
                                    <h3>Instagram</h3>
                                    <div className="instagram-image">
                                        <div className="footer-img">
                                            <a href="#"> <img src="educat/styles/img/footer/1.jpg" alt=""/></a>
                                        </div>
                                        <div className="footer-img">
                                            <a href="#"><img src="educat/styles/img/footer/2.jpg" alt=""/></a>
                                        </div>
                                        <div className="footer-img">
                                            <a href="#"><img src="educat/styles/img/footer/3.jpg" alt=""/></a>
                                        </div>
                                        <div className="footer-img">
                                            <a href="#"><img src="educat/styles/img/footer/4.jpg" alt=""/></a>
                                        </div>
                                        <div className="footer-img">
                                            <a href="#"><img src="educat/styles/img/footer/5.jpg" alt=""/></a>
                                        </div>
                                        <div className="footer-img">
                                            <a href="#"><img src="educat/styles/img/footer/6.jpg" alt=""/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End of Footer Widget Area */}
                {/* Footer Area Start */}
                <footer className="footer-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-7 col-12">
                                <span>©  2021 Educat Mede with ❤️ by  <a
                                    href="https://tatrck.com/h/0Hu30uVO0joF?url=https%3A%2F%2Fhasthemes.com%2F"
                                    target="_blank">HasThemes</a></span>
                            </div>
                            <div className="col-lg-6 col-md-5 col-12">
                                <div className="column-right">
                                    <span>Privacy Policy , Terms &amp; Conditions</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* End of Footer Area */}
            </div>
            {/* End of Bg White */}
        </div>
        {/* End of Main Wrapper Area */}

        {/*  Color Switcher  */}
        <div className="ec-colorswitcher">
            <a className="ec-handle" href="#"><i className="zmdi zmdi-settings"></i></a>
            <h3>Style Switcher</h3>
            <div className="ec-switcherarea">
                <h6>Select Layout</h6>
                <div className="layout-btn">
                    <a href="#" className="ec-boxed"><span>Boxed</span></a>
                    <a href="#" className="ec-wide"><span>Wide</span></a>
                </div>
                <h6>Chose Color</h6>
                <ul className="ec-switcher">
                    <li><a href="#" className="cs-color-1 styleswitch" data-rel="color-one"></a></li>
                    <li><a href="#" className="cs-color-2 styleswitch" data-rel="color-two"></a></li>
                    <li><a href="#" className="cs-color-3 styleswitch" data-rel="color-three"></a></li>
                    <li><a href="#" className="cs-color-4 styleswitch" data-rel="color-four"></a></li>
                    <li><a href="#" className="cs-color-5 styleswitch" data-rel="color-five"></a></li>
                    <li><a href="#" className="cs-color-6 styleswitch" data-rel="color-six"></a></li>
                    <li><a href="#" className="cs-color-7 styleswitch" data-rel="color-seven"></a></li>
                    <li><a href="#" className="cs-color-8 styleswitch" data-rel="color-eight"></a></li>
                    <li><a href="#" className="cs-color-9 styleswitch" data-rel="color-nine"></a></li>
                    <li><a href="#" className="cs-color-10 styleswitch" data-rel="color-ten"></a></li>
                </ul>
                <div className="ec-pattren">
                    <h6>Chose Pattren</h6>
                    <div className="pattren-wrap">
                        <a href="#" data-rel="pattren1" className="styleswitch">
                            <img src="educat/styles/img/ec-pattren/pattren1.jpg" alt=""/></a>
                        <a href="#" data-rel="pattren2" className="styleswitch">
                            <img src="educat/styles/img/ec-pattren/pattren2.jpg" alt=""/></a>
                        <a href="#" data-rel="pattren3" className="styleswitch">
                            <img src="educat/styles/img/ec-pattren/pattren3.jpg" alt=""/></a>
                        <a href="#" data-rel="pattren4" className="styleswitch">
                            <img src="educat/styles/img/ec-pattren/pattren4.jpg" alt=""/></a>
                        <a href="#" data-rel="pattren5" className="styleswitch">
                            <img src="educat/styles/img/ec-pattren/pattren5.jpg" alt=""/></a>
                    </div>
                </div>
                <div className="ec-background">
                    <h6>Chose Background</h6>
                    <div className="background-wrap">
                        <a href="#" data-rel="background1" className="styleswitch">
                            <img src="educat/styles/img/ec-background/bg-1.jpg" alt=""/></a>
                        <a href="#" data-rel="background2" className="styleswitch">
                            <img src="educat/styles/img/ec-background/bg-2.jpg" alt=""/></a>
                        <a href="#" data-rel="background3" className="styleswitch">
                            <img src="educat/styles/img/ec-background/bg-3.jpg" alt=""/></a>
                        <a href="#" data-rel="background4" className="styleswitch">
                            <img src="educat/styles/img/ec-background/bg-4.jpg" alt=""/></a>
                        <a href="#" data-rel="background5" className="styleswitch">
                            <img src="educat/styles/img/ec-background/bg-5.jpg" alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
        {/*  Color Switcher end  */}

        <Script src="educat/styles/js/vendor/jquery-1.12.4.min.js"/>
        <Script src="educat/styles/js/popper.min.js"/>
        <Script src="educat/styles/js/bootstrap.min.js"/>
        <Script src="educat/styles/js/ajax-mail.js"/>
        <Script src="educat/styles/js/plugins.js"/>
        <Script src="educat/styles/js/styleswitch.js"/>
        <Script src="educat/styles/js/main.js"/>
        <a id="scrollUp" href="#top" style={{display: "none", position: "fixed", zIndex: 2147483647}}>
            <i className="fa fa-angle-up"></i></a>
        </body>
        </html>
    );
}
