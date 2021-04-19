import React, { useState, useEffect } from 'react'
import './Main.css';
// import { genreList } from './Main';
import * as FontAwesome from "react-icons/fa";
import { FaArrowLeft } from 'react-icons/fa';
import axios from 'axios'
import { movieDBAPI } from '../../config';
import LikedButton from './LikeButton'
import { motion } from 'framer-motion'


const Genre = ({ genreList, movieIds, setMovieIds, liked }) => {
    const movieDBURL = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';

    const [ selectedSubPage, setSelectedSubPage ] = useState('genre menu');
    const [ selectedGenre, setSelectedGenre] = useState(null);
    const [ genreData, setGenreData ] = useState([]);

    // Create dynamic Icon on genre page
    const Icon = props => {
        const { iconName, color, fontSize, margin } = props;
        const icon = React.createElement(FontAwesome[iconName]);
        return <div style={{ color, fontSize, margin }}>{icon}</div>;
    };

    // Genres - action 28, adventure 12, comedy 35 , drama 18, horror 27, romance 10749, documentary 99, thriller 53, family 10751

    useEffect(() => {

        if(selectedGenre){

            const fetchGenreList = async () => {

            let result = await axios(`https://api.themoviedb.org/3/trending/all/day?api_key=${movieDBAPI}`);
        
            let genreCode;

            switch(selectedGenre){
                case 'Action' :
                genreCode = 28;
                break;
                case 'Adventure' :
                genreCode = 12;
                break;
                case 'Comedy' :
                genreCode = 35;
                break;
                case 'Drama' :
                genreCode = 18;
                break;
                case 'Horror' :
                genreCode = 27;
                break;
                case 'Romance' :
                genreCode = 10749;
                break;
                case 'Documentary' :
                genreCode = 99;
                break;
                case 'Thriller' :
                genreCode = 53;
                break;
                case 'Family' :
                genreCode = 10751;
                break;
                default:
                    break;
            }   

            let movies = result.data.results;
            setGenreData(movies.filter(mov => mov.genre_ids.includes(genreCode)))

            // console.log(result);
            // console.log(genreCode)
            // console.log(movies.filter(mov => mov.genre_ids.includes(genreCode)));
            // console.log(genreData);
        }

        fetchGenreList();

    }
    }, [selectedGenre])


    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1}
    }

    return (
        <>
        { selectedSubPage === 'genre menu' && 
                <motion.div 
                 initial="hidden"
                 animate="visible"
                 variants={variants}
                className='genre-container'>
                     { genreList.map(item => (
                    <div className='genre-item' 
                         style={
                            { backgroundColor: item.bgColor }
                         }
                         onClick={() => { 
                        setSelectedSubPage('genre list')
                        setSelectedGenre(item.genre);
                        }}
                         >
                        
                        <h1 className='genre-card-item'>{item.genre}</h1>
                            <Icon iconName={item.iconName} 
                                  color={item.iconColor} 
                                  fontSize={55}
                                  margin={10}/>
                    </div>
                    )) } 
                        
                </motion.div> 
                    }


                { selectedSubPage === 'genre list' && 
                    <motion.div 
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    className='genre-movies-display'>
                        <button className='genre-back-button'
                                onClick={() => {
                            setSelectedSubPage('genre menu');
                            setSelectedGenre(null);
                            }}>Back</button>
                        <h2>{selectedGenre}</h2>

                        <div className='genre-movie-container'>
                                { genreData.map(item => (        
                                        <div className='genre-movie'>
                                            <img src={`${movieDBURL}${item.poster_path}`} />
                                                <div className='movie-title-row'>
                                                     <h3 className='movie-title'>{item.title}</h3>
                                                     {/* <LikedButton item={item} movieIds={movieIds} setMovieIds={setMovieIds} liked={liked}/> */}
                                                 </div>
                                            <p className='movie-description'>{item.overview.length > 10 ? item.overview.substring(0, 89) + '...' : item.overview + '...'}</p>
                                    </div>
                                    
                                )) }
                        </div>
                            
                    </motion.div>
                }
                    </>
    )


}

export default Genre
