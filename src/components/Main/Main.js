import React, { useState, useEffect } from 'react'
import './Main.css';
import Sidebar from './Sidebar'
import Search from './Search'
import Genre from './Genre'
import MyFavourites from './MyFavourites'
import "react-multi-carousel/lib/styles.css";
import CarouselModule from './CarouselModule';
import { movieDBAPI } from '../../config';
import axios from 'axios';
import shawShank from './images/shawshank.jpg'
import { FaRegHeart } from 'react-icons/fa'
import fire from '../../firebase/fire';

const Main = () => {
    
    const movieDBURL = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';

    const [ currentPage, setCurrentPage ] = useState('Trending');
    const [ fetchMovies, setFetchMovies ] = useState(true);

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

    let user = fire.auth().currentUser;
    // LIKE A MOVIE
    const addLikedMovie = (item, index) => {
        // check if document exists? if it does, merge new liked movie fields otherwise create doc and fields.
        let userDb = fire.firestore().collection(user.uid).doc('Liked Movies');
        
        //Add new liked movie
            userDb.set({
                index: {
            title: item.title,
            posterPath: item.poster_path,
            overview: item.overview
                }
        }, { merge: true })
        .then(() => {
            console.log("Document successfully written!");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    }

    useEffect(() => {
  // Genres - action 28, adventure 12, comedy 35 , drama 18, horror 27, romance 10749, documentary 99, thriller 53, family 10751
        const fetchItems = async () => {
            
            if (currentPage === 'Genres' || currentPage === 'Genres Subpage' || currentPage === 'My Favourites' || currentPage === 'Watch Later' ){
                return;
            } else {

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

                case 'Genres' :
                case 'Genres Subpage':              
                default :
                // result = await axios(`https://api.themoviedb.org/3/trending/all/day?api_key=${movieDBAPI}`)
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

    }

        fetchItems();


    }, [currentPage]);

    // Genre list arr - colors: https://www.pinterest.com.au/pin/482659285040438438/
 
    //Create Genre List
    const genreList = [
        {genre:'Action', data: actionData, iconName: 'FaFireAlt', bgColor: '#48CFAD', iconColor: '#DA4453'},
        {genre:'Adventure', data: adventureData, iconName: 'FaMountain', bgColor: '#FC6E51', iconColor: '#A0D468'},
        {genre:'Comedy', data: comedyData, iconName: 'FaRegLaughSquint', bgColor: '#5D9CEC', iconColor: '#F6BB42'},
        {genre:'Drama', data: dramaData, iconName: 'FaTheaterMasks', bgColor: '#A0D468', iconColor: '#656d78'},
        {genre:'Horror', data: horrorData, iconName: 'FaGhost', bgColor: '#AAb2Bd', iconColor: '#4A89DC'},
        {genre:'Romance', data: romanceData, iconName: 'FaHeart', bgColor: '#4FC1E9', iconColor: '#DA4453'},
        {genre:'Documentary', data: documentaryData, iconName: 'FaFilm', bgColor: '#EC87C0', iconColor: '#4A89DC'},
        {genre:'Thriller', data: thrillerData, iconName: 'FaSkull', bgColor: '#000', iconColor: '#fff'},
        {genre:'Family', data: familyData, iconName: 'FaUsers', bgColor: '#FFC354', iconColor: '#8CC152'}
    ];

    
    // Carousel items
    const carouselItems = (data) => { 
       
        // Display carousel with less than 4 items from API
        if(data.length < 4){
            let movieArr = [];
            movieArr.push(...data)

            let missingItemsCount = 4 - data.length;
            for (let i = 0; i < missingItemsCount; i++){
                movieArr.push({poster_path: shawShank, title: 'the fake title', overview: 'wee waa', empty: true})
            };

            return (
                movieArr.map(item => (
                                 
                    <div className={item.empty ? 'hidden' : ''}>
                        <img src={`${movieDBURL}${item.poster_path}`} />
                        <div className='movie-title-row'>
                            <h3 className='movie-title'>{item.title}</h3>
                            <FaRegHeart className='like-heart-button' onClick={() => addLikedMovie(item)}/>
                        </div>
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
                                 <div className='movie-title-row'>
                                      <h3 className='movie-title'>{item.title}</h3>
                                      <FaRegHeart className='like-heart-button' onClick={() => addLikedMovie(item)}/>
                                 </div>
                                 <p className='movie-description'>{item.overview.length > 10 ? item.overview.substring(0, 80) + '...' : item.overview + '...'}</p>
                             </div>
                                             
                                 ))
                     )
      };

    return (
        <div className='main-container'>
            <Sidebar setCurrentPage={setCurrentPage} setFetchMovies={setFetchMovies}/>
            <Search />
             <div className={`movie-db-container`}>
                <h1 className='main-title'>{currentPage}</h1> 
             

                {/* Display if on the Genre Page */}
                { currentPage === 'Genres' && 
                     <Genre genreList={genreList}/>
                }

                

                {/* Display if fetchMovies is true */}
                {fetchMovies && genreList.map(item => (
                    <div className={item.data < 4 ? 'hidden' : ''}>
                        <h3 className='genre-title'>{item.genre}</h3> 
                        <CarouselModule data={item.data}>
                        { carouselItems(item.data) }
                        </CarouselModule>
                    </div>
                )) 
                }

                {/*  Display My Favourites Page*/}
                { currentPage === 'My Favourites' &&
                    <MyFavourites />
                }

                {/*  Display Watch Later Page*/}
                { currentPage === 'Watch Later' &&
                    <h1>Watch Later</h1>
                }


 
            </div>
        </div>
    )
}

export default Main


