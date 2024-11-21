import CarouselSliderTitle from "../atoms/CarouselSliderTitle";
import CarouselSliderExplanation from "../atoms/CarouselSliderExplanation";
import CarouselSliderButton from "../atoms/CarouselSliderButton";

const CarouselBackground = ({carousel, className, slideIndex}) => {
    const getClassName = () => {
        switch (className) {
            case 'prev':
                return "swiper-slide bg-image-dark swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev";
            case 'active':
                return "swiper-slide bg-image-dark swiper-slide-duplicate-active";
            case 'next':
                return "swiper-slide bg-image-dark swiper-slide-prev swiper-slide-duplicate-next";
            case 'duplicate':
                return "swiper-slide bg-image-dark swiper-slide-duplicate swiper-slide-active";
            default:
                return "swiper-slide bg-image-dark swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev";
        }
    }

    const styles = {
        backgroundStyle: {
            width: 1024,
            backgroundImage: `url(${carousel?.image})`
        }
    }

    const classNames = {
        mainClass: getClassName(),
        caption: "swiper-slide-caption",
        containerTextStart: "container text-start",
        rowJcCenter: "row justify-content-center",
        colMd10Sm12: "col-md-10 col-sm-12"
    }

    return (
        <div className={classNames.mainClass} data-slide-bg={carousel?.image} data-swiper-slide-index={slideIndex}
             style={styles.backgroundStyle} role="group"
             aria-label={carousel?.index?.toString() + "/" + carousel?.length?.toString()}>
            <div className={classNames.caption}>
                <div className={classNames.containerTextStart}>
                    <div className={classNames.rowJcCenter}>
                        <div className={classNames.colMd10Sm12}>
                            <CarouselSliderTitle title={carousel?.title}/>
                            <CarouselSliderExplanation explanation={carousel?.description}/>
                            <CarouselSliderButton buttonLabel={carousel?.carouselButtonLabel}
                                                  url={carousel?.carouselUrl}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarouselBackground;
