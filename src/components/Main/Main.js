import React, { useState, useEffect } from 'react'
import './Main.css';
import Sidebar from './Sidebar'
import Search from './Search'
import "react-multi-carousel/lib/styles.css";
import CarouselModule from './CarouselModule';
import { movieDBAPI } from '../../config';
import axios from 'axios';
import shawShank from './images/shawshank.jpg'

const Main = () => {
    
    const movieDBURL = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';

    const [ currentPage, setCurrentPage ] = useState('Trending');

    // Genre States
    const [ actionData, setActionData ] = useState([]);
    const [ adventureData, setAdventureData ] = useState([]);
    const [ comedyData, setComedyData ] = useState([]);
    const [ dramaData, setDramaData ] = useState([]);
    const [ horrorData, setHorrorData ] = useState([]);
    const [ romanceData, setRomanceData ] = useState([]);
    const [ documentaryData, setdocumentaryData ] = useState([]);
    const [ thrillerData, setThrillerData ] = useState([]);
    const [ familyData, setFamilyData ] = useState([]);

    useEffect(() => {
  // Genres - action 28, adventure 12, comedy 35 , drama 18, horror 27, romance 10749, documentary 99, thriller 53, family 10751
        const fetchItems = async () => {
            
            let result;

            switch(currentPage){
                case 'Trending' :
                result = await axios(`https://api.themoviedb.org/3/trending/all/day?api_key=${movieDBAPI}`)
                break;

                case 'Recommended For You' :
                result = await axios(`https://api.themoviedb.org/3/discover/movie?api_key=${movieDBAPI}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_count.gte=7&with_watch_monetization_types=flatrate`)
                break;
                
                case 'Movies' :
                result = await axios(`https://api.themoviedb.org/3/trending/movie/week?api_key=${movieDBAPI}`)
                break;

                case 'TV Series' :
                result = await axios(`https://api.themoviedb.org/3/trending/tv/week?api_key=${movieDBAPI}`)
                break;
                
                default:
                result = await axios(`https://api.themoviedb.org/3/trending/all/day?api_key=${movieDBAPI}`)
                break;
            }

            let movies = result.data.results;
    
            setActionData(movies.filter(mov => mov.genre_ids.includes(28)));
            setAdventureData(movies.filter(mov => mov.genre_ids.includes(12)));
            setComedyData(movies.filter(mov => mov.genre_ids.includes(35)));
            setDramaData(movies.filter(mov => mov.genre_ids.includes(18)));
            setHorrorData(movies.filter(mov => mov.genre_ids.includes(27)));
            setRomanceData(movies.filter(mov => mov.genre_ids.includes(10749)));
            setdocumentaryData(movies.filter(mov => mov.genre_ids.includes(99)));
            setThrillerData(movies.filter(mov => mov.genre_ids.includes(53)));
            setFamilyData(movies.filter(mov => mov.genre_ids.includes(10751)));
        }

        fetchItems();


    }, [currentPage]);

    
    
    // Carousel items
    const carouselItems = (arr) => { 

              return ( 
                             arr.map(item => (
                                 
                             <div>
                                 <img src={`${movieDBURL}${item.poster_path}`} />
                                 <h3 className='movie-title'>{item.title}</h3>
                                 <p className='movie-description'>{item.overview.length > 10 ? item.overview.substring(0, 80) + '...' : item.overview + '...'}</p>
                             </div>
                                             
                                 ))
                     )
      };

    return (
        <div className='main-container'>
            <Sidebar setCurrentPage={setCurrentPage}/>
            <Search />
             <div className='movie-db-container'>
                <h1 className='main-title'>{currentPage}</h1> 

                    <h3 className='genre-title'>Action</h3> 
                    <CarouselModule>
                    { carouselItems(actionData) }
                    </CarouselModule>

                    <h3 className='genre-title'>Adventure</h3> 
                    <CarouselModule>
                    { carouselItems(adventureData) }
                    </CarouselModule>
                    
                    <h3 className='genre-title'>Comedy</h3> 
                    <CarouselModule>
                        { carouselItems(comedyData) }
                    </CarouselModule>
                    
                    <h3 className='genre-title'>Drama</h3> 
                    <CarouselModule>
                        { carouselItems(dramaData) }
                    </CarouselModule>

                    <h3 className='genre-title'>Horror</h3> 
                    <CarouselModule>
                        { carouselItems(horrorData) }
                    </CarouselModule>

                    <h3 className='genre-title'>Romance</h3> 
                    <CarouselModule>
                        { carouselItems(romanceData) }
                    </CarouselModule>

                    <h3 className='genre-title'>Documentary</h3> 
                    <CarouselModule>
                        { carouselItems(documentaryData) }
                    </CarouselModule>
 
                    <h3 className='genre-title'>Thriller</h3> 
                    <CarouselModule>
                        { carouselItems(thrillerData) }
                    </CarouselModule>
 
                    <h3 className='genre-title'>Family</h3> 
                    <CarouselModule>
                        { carouselItems(familyData) }
                    </CarouselModule>
 
            </div>
        </div>
    )
}

export default Main


