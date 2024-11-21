const CarouselSliderButton = ({buttonLabel, url}) => {
    return (
        <a className="button button-lg button-primary not-animated"
           href={url} data-caption-animate="fadeInUpSmall" data-caption-delay={250}>
            {buttonLabel}
        </a>
    );
}

export default CarouselSliderButton;
