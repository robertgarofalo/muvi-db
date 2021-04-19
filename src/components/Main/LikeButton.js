import React, { useState, useEffect } from 'react'
import './Main.css';
import { FaHeart } from 'react-icons/fa';
import fire from '../../firebase/fire';

const LikeButton = ({ item, movieIds, setMovieIds }) => {

    // Firebase - get current user
    let user = fire.auth().currentUser;

    const [ liked, setLiked ] = useState(null); 


    useEffect(() => {
            if (movieIds.some(e => e === item.id)){
             setLiked('#FF5A5F');
        } else {
            setLiked('#fff');
        }
        console.log(movieIds);
    }, [movieIds])


// LIKE A MOVIE
const toggleLikedMovieHandler = (item) => {

    // user id >> 'liked movies' >> index >> 'movie details' >>
    let docRef = fire.firestore().collection(user.email).doc('Liked Movies').collection('Details').doc(item.id.toString());

    // loop through item, 

    docRef.get().then((doc) => {
        // check if doc it exists
        if (doc.exists){
            deleteNewMovie(item);
            setMovieIds(movieIds.filter(mov => mov !== item.id));
            // item.likedMovie = false;
            // console.log('delete new movie ', item)

        } else {
            //add it
            addNewMovie(item);
            setMovieIds(prev => [...prev, item.id]);
            // item.likedMovie = true;
            // console.log('add new movie ', item)
        }
    })

    const addNewMovie = (item) => {
        // Add new liked movie
        docRef.set({
            title: item.title,
            posterPath: item.poster_path,
            overview: item.overview, 
            id: item.id
        }, { merge: true })
        .then(() => {
            // console.log("Document successfully written!");
            // setLiked("#FF5A5F");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    }

    const deleteNewMovie = () => {
        docRef.delete().then(() => {
            // setLiked("#fff");
            // console.log('Document successfully deleted!');
        }).catch((error) => {
            console.error('Error deleting document ', error);
        })
    }
}

    return (
        <div>
            <FaHeart 
            className='like-heart-button'
            style={ {color: liked} }
            onClick={() => {
                toggleLikedMovieHandler(item);
            }}
            />
        </div>
    )
}

export default LikeButton
