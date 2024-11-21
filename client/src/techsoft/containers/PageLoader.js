const PageLoader = () => {
    return (
        <div id="page-loader" className="loaded">
            <div className="page-loader-body">
                <img
                    src="techSoft/images/logo-default-95x80.png"
                    alt=""
                    width={95}
                    height={80}
                />
                <div className="cssload-wrapper">
                    <div className="cssload-border">
                        <div className="cssload-whitespace">
                            <div className="cssload-line"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageLoader;