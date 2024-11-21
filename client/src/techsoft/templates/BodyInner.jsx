import Script from "next/script";
import PageLoader from "../containers/PageLoader";
import PageBody from "../containers/PageBody";
import MailForm from "../containers/MailForm";

const BodyInner = () => {
    return (
        <>
            <PageLoader />
            <PageBody />
            <MailForm />
            {/* Javascript*/}
            <Script src="techSoft/js/core.min.js"/>
            <Script src="techSoft/js/script.js"/>
            <a href="#" id="ui-to-top" className="ui-to-top fa fa-angle-up"/>
        </>
    );
};

export default BodyInner;
