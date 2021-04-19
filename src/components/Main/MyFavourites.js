import React, { useState, useEffect} from 'react'
import jumanji from './images/jumanji.jpg'
import fire from '../../firebase/fire';
import './Main.css';

const MyFavourites = () => {
    const movieDBURL = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';
    const [ likedMoviesArr, setLikedMoviesArr ] = useState([]);

    // const likedMoviesArr = [];

    useEffect(() => {
        let arr = [];
        let user = fire.auth().currentUser;
        let db = fire.firestore().collection(user.uid).doc('Liked Movies').collection('Details');
        db.get().then((querySnapshop) => {
            querySnapshop.forEach((doc) => {
                console.log(doc.data());
                arr.push(doc.data());
            });

            setLikedMoviesArr(arr);

        });
    }, [])


    return (
            <div className='genre-movie-container favourites'>
                     { likedMoviesArr.map((item) => (        
                             <div className='genre-movie '>
                                <img src={`${movieDBURL}${item.posterPath}`} />
                                         <div className='movie-title-row'>
                                             <h3 className='movie-title'>{item.title}</h3>
                                            
                                         </div>
                                     <p className='movie-description'>{item.overview.length > 10 ? item.overview.substring(0, 89) + '...' : item.overview + '...'}</p>          
                             </div>
                                    
                      )) }
             </div>

    )
}

export default MyFavourites