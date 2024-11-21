import PageBodyHeader from "../sections/PageBody/Header";
import PageBodySwiperSlider from "../sections/PageBody/SwiperSlider";
import PageBodyService from "../sections/PageBody/Service";
import PageBodyPricing from "../sections/PageBody/Pricing";
import PageBodyWhyChooseUs from "../sections/PageBody/WhyChooseUs";
import PageBodyFacts from "../sections/PageBody/Facts";
import PageBodyOurClients from "../sections/PageBody/OurClients";
import PageBodyPartners from "../sections/PageBody/Partners";
import PageBodyFooter from "../sections/PageBody/Footer";

const PageBody = () => {
    return (
        <div className="page animated" style={{animationDuration: "500ms"}}>
            <PageBodyHeader/>
            <PageBodySwiperSlider/>
            <PageBodyService />
            <PageBodyPricing />
            <PageBodyWhyChooseUs />
            <PageBodyFacts />
            <PageBodyOurClients />
            <PageBodyPartners />
            <PageBodyFooter />
        </div>
    );
}

export default PageBody;