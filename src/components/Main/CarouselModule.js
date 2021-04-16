import React from 'react'
import Carousel from "react-multi-carousel";

const CarouselModule = (props) => {

    const responsive = {
        desktop: {
        breakpoint: {
            max: 3000,
            min: 1024
        },
        items: 3,
        partialVisibilityGutter: 40
        },
        mobile: {
        breakpoint: {
            max: 464,
            min: 0
        },
        items: 1,
        partialVisibilityGutter: 30
        },
        tablet: {
        breakpoint: {
            max: 1024,
            min: 464
        },
        items: 2,
        partialVisibilityGutter: 30
        }
    }


    return (
        <Carousel
        additionalTransfrom={-95}
        arrows
        autoPlaySpeed={3000}
        centerMode={true}
        className="movie-carousel"
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl={false}
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        showDots={false}
        sliderClass="arrows"
        slidesToSlide={1}
        swipeable
        >
            {props.children}

        </Carousel>
    )
}

export default CarouselModule
