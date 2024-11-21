const PageBodyPricing = () => {
    return (
        <>
            <section className="section section-md bg-gray-2 text-center oh">
                <div
                    className="container wow fadeInUpSmall"
                    style={{visibility: "visible", animationName: "none"}}
                >
                    <h2>Pricing Plans</h2>
                    <div className="pricing-table pricing-table-classic">
                        {/* Pricing table item*/}
                        <article className="pricing-table__item pricing-table-classic__item">
                            <div className="pricing-table__item-header">
                                <p className="pricing-table__item-title">Basic</p>
                            </div>
                            <div className="pricing-table__item-price">
                                <span className="pricing-table__item-price-currency">$</span>
                                <span className="pricing-table__item-price-value">399</span>
                                <div className="pricing-table__item-price-aside">
                                    <span className="top">99</span>
                                </div>
                            </div>
                            <ul className="pricing-table__item-features">
                                <li>
                    <span className="text-marked">
                      Concept development
                      <br/>
                      UI design
                    </span>
                                </li>
                                <li>Configuration management</li>
                                <li>Software quality assurance</li>
                                <li>App integration</li>
                            </ul>
                            <div className="pricing-table__item-control">
                                <a className="button button-default button-ujarak" href="#">
                                    Order now
                                </a>
                            </div>
                        </article>
                        {/* Pricing table item*/}
                        <article
                            className="pricing-table__item pricing-table-classic__item pricing-table-classic__item_prefered">
                            <div className="pricing-table__item-header">
                                <div className="pricing-table__item-label">Bestseller</div>
                                <p className="pricing-table__item-title">Optimal</p>
                            </div>
                            <div className="pricing-table__item-price">
                                <span className="pricing-table__item-price-currency">$</span>
                                <span className="pricing-table__item-price-value">599</span>
                                <div className="pricing-table__item-price-aside">
                                    <span className="top">99</span>
                                </div>
                            </div>
                            <ul className="pricing-table__item-features">
                                <li>
                    <span className="text-marked">
                      Concept development
                      <br/>
                      UI design
                    </span>
                                </li>
                                <li>
                    <span className="text-marked">
                      Configuration management
                    </span>
                                </li>
                                <li>
                    <span className="text-marked">
                      Software quality assurance
                    </span>
                                </li>
                                <li>App integration</li>
                            </ul>
                            <div className="pricing-table__item-control">
                                <a className="button btn-primary" href="#">
                                    Order now
                                </a>
                            </div>
                        </article>
                        {/* Pricing table item*/}
                        <article className="pricing-table__item pricing-table-classic__item">
                            <div className="pricing-table__item-header">
                                <p className="pricing-table__item-title">Ultimate</p>
                            </div>
                            <div className="pricing-table__item-price">
                                <span className="pricing-table__item-price-currency">$</span>
                                <span className="pricing-table__item-price-value">999</span>
                                <div className="pricing-table__item-price-aside">
                                    <span className="top">99</span>
                                </div>
                            </div>
                            <ul className="pricing-table__item-features">
                                <li>
                    <span className="text-marked">
                      Concept development
                      <br/>
                      UI design
                    </span>
                                </li>
                                <li>
                    <span className="text-marked">
                      Configuration management
                    </span>
                                </li>
                                <li>
                    <span className="text-marked">
                      Software quality assurance
                    </span>
                                </li>
                                <li>
                                    <span className="text-marked">App integration</span>
                                </li>
                            </ul>
                            <div className="pricing-table__item-control">
                                <a className="button button-default button-ujarak" href="#">
                                    Order now
                                </a>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </>
    );
}

export default PageBodyPricing;
