const NavbarCommunication = () => {
    return (
        <div className="rd-navbar-aside">
            <div className="rd-navbar-content-outer">
                <div
                    className="rd-navbar-content__toggle rd-navbar-static--hidden toggle-original"
                    data-rd-navbar-toggle=".rd-navbar-content"
                >
                    <span/>
                </div>
                <div className="rd-navbar-content toggle-original-elements">
                    <ul className="list-bordered list-inline">
                        <li>
                            <dl className="list-terms-inline">
                                <dt>7/24 Destek</dt>
                                <dd>
                                    <a href="tel:#">90 444 5 444</a>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl className="list-terms-inline">
                                <dt>E-mail</dt>
                                <dd>
                                    <a href="mailto:#">mail@webmobilebros.com</a>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <ul className="list-inline list-inline-xs">
                                <li>
                                    <a
                                        className="icon icon-gray-dark icon-style-brand fa fa-facebook"
                                        href="#"
                                    />
                                </li>
                                <li>
                                    <a
                                        className="icon icon-gray-dark icon-style-brand fa fa-twitter"
                                        href="#"
                                    />
                                </li>
                                <li>
                                    <a
                                        className="icon icon-gray-dark icon-style-brand fa fa-google-plus"
                                        href="#"
                                    />
                                </li>
                                <li>
                                    <a
                                        className="icon icon-gray-dark icon-style-brand fa fa-pinterest-p"
                                        href="#"
                                    />
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="rd-navbar-panel__button">
                <a
                    className="button button-xs button-icon button-icon-left button-default button-ujarak"
                    href="login.html"
                >
                    <span className="icon mdi mdi-account"/>
                    Login
                </a>
            </div>
        </div>
    );
}

export default NavbarCommunication;
