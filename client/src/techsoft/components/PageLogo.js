const PageLogo = () => {
    return (
        <div className="rd-navbar-brand">
            <a className="brand" href="index.html">
                <div className="brand__name">
                    <img
                        className="brand__logo-dark"
                        src="techSoft/images/logo-default-95x80.png"
                        alt=""
                        width={95}
                        height={80}
                    />
                    <img
                        className="brand__logo-mobile"
                        src="techSoft/images/logo-mobile-170x50.png"
                        alt=""
                        width={170}
                        height={50}
                    />
                </div>
            </a>
        </div>
    );
}

export default PageLogo;
