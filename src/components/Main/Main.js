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

    
    // Genre list arr
    const genreList = [
        { genre:'Action', data: actionData },
        { genre:'Adventure', data: adventureData },
        { genre:'Comedy', data: comedyData },
        { genre:'Drama', data: dramaData },
        { genre:'Horror', data: horrorData },
        { genre:'Romance', data: romanceData },
        { genre:'Documentary', data: documentaryData },
        { genre:'Thriller', data: thrillerData },
        { genre:'Family', data: familyData }
    ];

    
    // Carousel items
    const carouselItems = (data) => { 
       
        // Display carousel with less than 4 items from API
        if(data.length < 4){
            let emptyArr = [];
            emptyArr.push(...data)

            let missingItemsCount = 4 - data.length;
            for (let i = 0; i < missingItemsCount; i++){
                emptyArr.push({poster_path: shawShank, title: 'the fake title', overview: 'wee waa', empty: true})
            };

            return (
                emptyArr.map(item => (
                                 
                    <div className={item.empty ? 'hidden' : ''}>
                        <img src={`${movieDBURL}${item.poster_path}`} />
                        <h3 className='movie-title'>{item.title}</h3>
                        <p className='movie-description'>{item.overview.length > 10 ? item.overview.substring(0, 89) + '...' : item.overview + '...'}</p>
                    </div>
                                    
                        ))
            )
            
        }

        // Display Carousel which has more than 4 items from API

              return ( 
                             data.map(item => (
                                 
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

                { genreList.map(item => (
                    <div className={item.data < 4 ? 'hidden' : ''}>
                        <h3 className='genre-title'>{item.genre}</h3> 
                        <CarouselModule data={item.data}>
                        { carouselItems(item.data) }
                        </CarouselModule>
                                            
                    </div>
                )) }
 
            </div>
        </div>
    )
}

export default Main


