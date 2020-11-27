import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

export default class ImageSlider extends React.Component {
    render() {
        return (
            <Carousel interval={2000}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://www.3playmedia.com/wp-content/uploads/case-studies-category-1400x350-1-1400x350.jpg"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://deloitte.wsj.com/cmo/files/2018/11/CMO-Survey-Header-1400x350.jpg"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://www.standrewstherapy.co.uk/assets/Uploads/Happy-female-homepage-banner-1400x350.jpg"/>
                </Carousel.Item>
            </Carousel>
        );
    }
}