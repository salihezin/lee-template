const PageBodyFacts = () => {
    return (
        <>
            <section
                className="section parallax-container bg-gray-darker"
                data-parallax-img="techSoft/images/bg-2-1920x545.jpg"
            >
                <div className="material-parallax parallax">
                    <img
                        src="techSoft/images/bg-2-1920x545.jpg"
                        alt=""
                        style={{display: "block"}}
                    />
                </div>
                <div className="parallax-content">
                    <div className="section-lg text-center text-sm-start">
                        <div className="container">
                            <div
                                className="row row-50 flex-md-row-reverse justify-content-md-between align-items-center align-items-lg-start">
                                <div
                                    className="col-md-5 wow fadeInRightSmall"
                                    style={{visibility: "visible", animationName: "none"}}
                                >
                                    <div className="box-width-3 box-centered">
                                        <h2>Some Facts About Us</h2>
                                        <p className="text-style-1">
                                            More than 1000 applications developed
                                        </p>
                                        <a
                                            className="button button-lg btn-primary button-ujarak"
                                            href="about.html"
                                        >
                                            Read More
                                        </a>
                                    </div>
                                </div>
                                <div
                                    className="col-md-7 col-lg-6 wow fadeInLeftSmall"
                                    style={{visibility: "visible", animationName: "none"}}
                                >
                                    <div className="row row-style-1">
                                        <div className="col-sm-6">
                                            <div className="col-inner">
                                                {/* Box counter*/}
                                                {/*Counter*/}
                                                <article className="box-counter box-counter_modern">
                                                    <div className="box-counter__main">
                                                        <div className="box-counter__icon linearicons-outbox"/>
                                                        <div className="counter-prefix">1.</div>
                                                        <div className="counter">6</div>
                                                        <div className="small">k</div>
                                                    </div>
                                                    <p className="box-counter__title">Apps Installed</p>
                                                </article>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="col-inner">
                                                {/* Box counter*/}
                                                {/*Counter*/}
                                                <article className="box-counter box-counter_modern">
                                                    <div className="box-counter__main">
                                                        <div className="box-counter__icon linearicons-diamond2"/>
                                                        <div className="counter">27</div>
                                                    </div>
                                                    <p className="box-counter__title">Awards Won</p>
                                                </article>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="col-inner">
                                                {/*Counter*/}
                                                <article className="box-counter box-counter_modern">
                                                    <div className="box-counter__main">
                                                        <div className="box-counter__icon linearicons-user"/>
                                                        <div className="counter">45</div>
                                                        <div className="counter-postfix">+</div>
                                                    </div>
                                                    <p className="box-counter__title">Staff Members</p>
                                                </article>
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="col-inner">
                                                {/*Counter*/}
                                                <article className="box-counter box-counter_modern">
                                                    <div className="box-counter__main">
                                                        <div className="box-counter__icon linearicons-heart"/>
                                                        <div className="counter">99</div>
                                                        <div className="small small_top">%</div>
                                                    </div>
                                                    <p className="box-counter__title">
                                                        Satisfied Customers
                                                    </p>
                                                </article>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default PageBodyFacts;
