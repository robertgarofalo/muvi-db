import React from 'react'
import Carousel from "react-multi-carousel";
import { motion } from 'framer-motion'

const CarouselModule = ({children, data}) => {

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

    console.log(data);

    // const arr = data.filter(item => item.overview !== 'empty');

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }

    return (
        <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        >
        <Carousel
        additionalTransfrom={-105}
        arrows={data.some(item => item.empty) ? false : true}
        autoPlaySpeed={3000}
        centerMode={true}
        className="movie-carousel"
        containerClass="container-with-dots"
        dotListClass=""
        draggable={false}
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
        // swipeable
        >
            {children}

        </Carousel>
        </motion.div>
    )
}

export default CarouselModule
