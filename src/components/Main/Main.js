import React from 'react'
import './Main.css';
import Sidebar from './Sidebar'
import Search from './Search'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import jumanjiImg from './images/jumanji.jpg'


const Main = () => {

    const movieDBUR = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';

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
        <div className='main-container'>
            <Sidebar />
            <Search />
             <div className='movie-db-container'>
            
                <h1 className='main-title'>Trending</h1> 
                
                <h3 className='genre-title'>Action</h3> 
           
                <Carousel
                    additionalTransfrom={-115}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode
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

                        <div>
                            <img src={`${movieDBUR}/qRhDgHAMNz4WfgEDYXbnjQhjvxr.jpg`} />
                            <h3 className='movie-title'>Movie title</h3>
                            <p className='movie-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, vel?</p>
                        </div>
                        
                        <div>
                            <img src={`${movieDBUR}/279yOM4OQREL36B3SECnRxoB4MZ.jpg`} />
                            <h3 className='movie-title'>Movie title</h3>
                            <p className='movie-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, vel?</p>
                        </div>
                        
                        <div>
                            <img src={`${movieDBUR}/dYCWUAidqgakGETwZkfGxU7CWhL.jpg`} />
                            <h3 className='movie-title'>Movie title</h3>
                            <p className='movie-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, vel?</p>
                        </div>
                        
                        <div>
                            <img src={`${movieDBUR}/9kg73Mg8WJKlB9Y2SAJzeDKAnuB.jpg`} />
                            <h3 className='movie-title'>Movie title</h3>
                            <p className='movie-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, vel?</p>
                        </div>
                </Carousel>

                {/*  CAROUSEL 2 */}

                <h3 className='genre-title'>Action</h3> 
           
                <Carousel
                    additionalTransfrom={-115}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode
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

                        <div>
                            <img src={`${movieDBUR}/qRhDgHAMNz4WfgEDYXbnjQhjvxr.jpg`} />
                            <h3 className='movie-title'>Movie title</h3>
                            <p className='movie-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, vel?</p>
                        </div>
                        
                        <div>
                            <img src={`${movieDBUR}/279yOM4OQREL36B3SECnRxoB4MZ.jpg`} />
                            <h3 className='movie-title'>Movie title</h3>
                            <p className='movie-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, vel?</p>
                        </div>
                        
                        <div>
                            <img src={`${movieDBUR}/dYCWUAidqgakGETwZkfGxU7CWhL.jpg`} />
                            <h3 className='movie-title'>Movie title</h3>
                            <p className='movie-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, vel?</p>
                        </div>
                        
                        <div>
                            <img src={`${movieDBUR}/9kg73Mg8WJKlB9Y2SAJzeDKAnuB.jpg`} />
                            <h3 className='movie-title'>Movie title</h3>
                            <p className='movie-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, vel?</p>
                        </div>
                </Carousel>



            </div>
        </div>
    )
}

export default Main
