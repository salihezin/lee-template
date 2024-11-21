'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import CarouselSliderTitle from "../../atoms/CarouselSliderTitle";
import CarouselSliderExplanation from "../../atoms/CarouselSliderExplanation";
import CarouselSliderButton from "../../atoms/CarouselSliderButton";

const PageBodySwiperSlider = () => {

    const [carousels, setCarousels] = useState([]);

    carousels.map(carousel => {
        console.log('item image', carousel.image)
    })

    const fetchCarousels = () => {
        axios.get('http://localhost:3001/api/carousel').then(response => {
            setCarousels(response.data);
        }).catch(error => {
            console.log(error);
        });
    };

    useEffect(() => {
        fetchCarousels();
    }, []);

    return (
        <>
            <section
                className="section swiper-container swiper-slider swiper_style-1 swiper_height-1 swiper-controls-classic swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden"
                data-loop="true"
                data-autoplay={5000}
                data-swiper='{"simulateTouch":false}'
            >
                <div
                    className="swiper-wrapper"
                    style={{
                        transitionDuration: '0ms',
                    }}
                >
                    {carousels.map((item, index) => (
                        <div
                            key={index}
                            className="swiper-slide bg-image-dark"
                            data-slide-bg={item.image}
                            style={{
                                width: 1600,
                                backgroundImage: `url(${item.image.replace(/\\/g, '/')})`,
                            }}
                            role="group"
                            aria-label={`${index + 1} / ${carousels.length}`}
                        >
                            <div className="swiper-slide-caption">
                                <div className="container text-start">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-sm-12">
                                            <CarouselSliderTitle title={item.title} />
                                            <CarouselSliderExplanation explanation={item.description} />
                                            <CarouselSliderButton buttonLabel={item.carouselButtonLabel} url={item.carouselUrl} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"></div>
                <div
                    className="swiper-button-prev"
                    tabIndex={0}
                    role="button"
                    aria-label="Previous slide"
                />
                <div
                    className="swiper-button-next"
                    tabIndex={0}
                    role="button"
                    aria-label="Next slide"
                />
                <span
                    className="swiper-notification"
                    aria-live="assertive"
                    aria-atomic="true"
                />
            </section>
        </>
    );
}

export default PageBodySwiperSlider;