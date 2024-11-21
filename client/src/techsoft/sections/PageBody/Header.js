import PageLogo from "../../components/PageLogo";
import NavbarCommunication from "../../components/NavbarCommunication";
import NavbarMenu from "../../components/NavbarMenu";

const PageBodyHeader = () => {
    return (
        <>
            <header className="section page-header">
                {/* RD Navbar*/}
                <div className="rd-navbar-wrap">
                    <nav
                        className="rd-navbar rd-navbar-classic rd-navbar-original rd-navbar-static"
                        data-layout="rd-navbar-fixed"
                        data-sm-layout="rd-navbar-fixed"
                        data-sm-device-layout="rd-navbar-fixed"
                        data-md-layout="rd-navbar-fixed"
                        data-md-device-layout="rd-navbar-fixed"
                        data-lg-device-layout="rd-navbar-fixed"
                        data-lg-layout="rd-navbar-static"
                        data-xl-device-layout="rd-navbar-static"
                        data-xl-layout="rd-navbar-static"
                        data-stick-up-clone="false"
                        data-md-stick-up-offset="74px"
                        data-lg-stick-up-offset="66px"
                        data-md-stick-up="true"
                        data-lg-stick-up="true"
                    >
                        <div className="rd-navbar-outer">
                            <div className="rd-navbar-inner">
                                {/* RD Navbar Panel*/}
                                <div className="rd-navbar-panel">
                                    <button
                                        className="rd-navbar-toggle toggle-original"
                                        data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                                    >
                                        <span/>
                                    </button>
                                    <PageLogo />
                                </div>
                                <div className="rd-navbar-body">
                                    <NavbarCommunication />
                                    <NavbarMenu />
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default PageBodyHeader;
