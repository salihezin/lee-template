const PageBodyFooter = () => {
    return (
        <>
            <footer className="section footer-classic context-dark">
                <div className="footer-classic__main bg-gray-3">
                    <div className="container">
                        <div
                            className="row row-50 align-items-sm-end justify-content-sm-center justify-content-lg-start">
                            <div className="col-lg-6">
                                <div className="footer-classic__custom-column">
                                    <div className="unit flex-sm-row">
                                        <div className="unit__left">
                                                <span
                                                    className="icon icon-md icon-default fl-bigmug-line-headphones32"/>
                                        </div>
                                        <div className="unit__body">
                                            <a className="link link-lg" href="tel:#">
                                                1-800-700-6200
                                            </a>
                                            <p>
                                                Our Support Service is always available 24 hours a day
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-10 col-lg-6">
                                <div className="group-md">
                                    <h3>Subscribe</h3>
                                    <p className="large">Get the latest updates and offers</p>
                                </div>
                                {/* RD Mailform*/}
                                <form
                                    className="rd-mailform form_inline form_lg"
                                    data-form-output="form-output-global"
                                    data-form-type="subscribe"
                                    method="post"
                                    action="bat/rd-mailform.php"
                                    noValidate="novalidate"
                                >
                                    <div className="form-wrap">
                                        <input
                                            className="form-input form-control-has-validation"
                                            id="subscribe-form-footer-form-email"
                                            type="email"
                                            name="email"
                                            data-constraints="@Email @Required"
                                        />
                                        <span className="form-validation"/>
                                        <label
                                            className="form-label rd-input-label"
                                            htmlFor="subscribe-form-footer-form-email"
                                        >
                                            Your E-mail
                                        </label>
                                    </div>
                                    <div className="form-button">
                                        <button
                                            className="button button-lg button-primary button-ujarak"
                                            type="submit"
                                        >
                                            Subscribe
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div
                            className="row row-50 justify-content-md-center justify-content-lg-start justify-content-xl-between">
                            <div className="col-md-5 col-lg-3">
                                <p className="custom-heading-1 custom-heading-bordered">
                                    About us
                                </p>
                                <div className="divider"/>
                                <p className="ls-05">
                                    Our company has been developing high-quality and reliable
                                    software for corporate needs since 2008.
                                </p>
                                <ul className="list-inline list-inline-xs">
                                    <li>
                                        <a
                                            className="icon icon-xxs icon-circle icon-filled icon-filled_brand fa fa-facebook"
                                            href="#"
                                        />
                                    </li>
                                    <li>
                                        <a
                                            className="icon icon-xxs icon-circle icon-filled icon-filled_brand fa fa-twitter"
                                            href="#"
                                        />
                                    </li>
                                    <li>
                                        <a
                                            className="icon icon-xxs icon-circle icon-filled icon-filled_brand fa fa-google-plus"
                                            href="#"
                                        />
                                    </li>
                                    <li>
                                        <a
                                            className="icon icon-xxs icon-circle icon-filled icon-filled_brand fa fa-instagram"
                                            href="#"
                                        />
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-5 col-lg-4 col-xl-3">
                                <p className="custom-heading-1 custom-heading-bordered">
                                    Latest news
                                </p>
                                <div className="divider"/>
                                <div className="post-small-wrap">
                                    {/* Post small*/}
                                    <article className="post-small">
                                        <div className="post-small__aside">
                                            <a className="post-small__media" href="blog-post.html">
                                                <img
                                                    className="post-small__image"
                                                    src="techSoft/images/post-small-1-80x68.jpg"
                                                    alt=""
                                                    width={80}
                                                    height={68}
                                                />
                                            </a>
                                        </div>
                                        <div className="post-small__main">
                                            <p className="post-small__title">
                                                <a href="blog-post.html">
                                                    Benefits of Async/Await in Programming
                                                </a>
                                            </p>
                                            <time className="post-small__time" dateTime={2024}>
                                                January 12, 2024
                                            </time>
                                        </div>
                                    </article>
                                    {/* Post small*/}
                                    <article className="post-small">
                                        <div className="post-small__aside">
                                            <a className="post-small__media" href="blog-post.html">
                                                <img
                                                    className="post-small__image"
                                                    src="techSoft/images/post-small-2-80x68.jpg"
                                                    alt=""
                                                    width={80}
                                                    height={68}
                                                />
                                            </a>
                                        </div>
                                        <div className="post-small__main">
                                            <p className="post-small__title">
                                                <a href="blog-post.html">
                                                    Key Considerations and Warnings of iPaaS
                                                </a>
                                            </p>
                                            <time className="post-small__time" dateTime={2024}>
                                                January 12, 2024
                                            </time>
                                        </div>
                                    </article>
                                </div>
                            </div>
                            <div className="col-md-10 col-lg-5 col-xl-4">
                                <p className="custom-heading-1 custom-heading-bordered">
                                    Useful Links
                                </p>
                                <div className="divider"/>
                                <div className="row row-5">
                                    <div className="col-sm-6">
                                        <ul className="list-marked list-marked_primary">
                                            <li>
                                                <a href="#">DB Management</a>
                                            </li>
                                            <li>
                                                <a href="#">iOS/MacOs Apps</a>
                                            </li>
                                            <li>
                                                <a href="#">Android Apps</a>
                                            </li>
                                            <li>
                                                <a href="#">Windows Apps</a>
                                            </li>
                                            <li>
                                                <a href="#">UX Design</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-6">
                                        <ul className="list-marked list-marked_primary">
                                            <li>
                                                <a href="#">Tutorials</a>
                                            </li>
                                            <li>
                                                <a href="#">Product Support</a>
                                            </li>
                                            <li>
                                                <a href="contact-us.html">Contact Us</a>
                                            </li>
                                            <li>
                                                <a href="blog.html">Blog</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-default__aside bg-gray-5">
                    <div className="container">
                        <div className="footer-default__aside-inner">
                            {/* Rights*/}
                            <p className="rights">
                                <span>©&nbsp;</span>
                                <span className="copyright-year">2024</span>
                                <span>&nbsp;</span>
                                <span>Techsoft</span>
                                <span>.&nbsp;</span>
                                <a href="privacy-policy.html">Privacy Policy</a>
                            </p>
                            <ul className="list-separated list-inline">
                                <li>
                                    <a href="faq.html">FAQ</a>
                                </li>
                                <li>
                                    <a href="#">Support</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default PageBodyFooter;
