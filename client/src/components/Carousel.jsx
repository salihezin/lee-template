'use client';

import { useEffect, useState } from "react";
import axios from "axios";

const Carousel = () => {
    const [carouselItems, setCarouselItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/api/carousel')
            .then(response => {
                setCarouselItems(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    const carouselItemView = (item, isActive) => (
        <div className={`carousel-item ${isActive ? 'active' : ''}`}>
            <img src={`./images/carousel/${item.image}`} className="bd-placeholder-img" width="100%" height="100%" alt={item.title} />
            <div className="container">
                <div className="carousel-caption text-end">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                    <p><a className="btn btn-lg btn-primary" href={item.carouselUrl}>{item.carouselButtonLabel}</a></p>
                </div>
            </div>
        </div>
    );

    return (
        <div id="myCarousel" className="carousel slide mb-6" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {carouselItems.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target="#myCarousel"
                        data-bs-slide-to={index}
                        aria-label={`Slide ${index + 1}`}
                        className={index === 0 ? 'active' : ''}
                        aria-current={index === 0 ? 'true' : undefined}
                    ></button>
                ))}
            </div>
            <div className="carousel-inner">
                {carouselItems.map((item, index) => (
                    <div key={index}>
                        {carouselItemView(item, index === 0)}
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel"
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel"
                    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
};

export default Carousel;
