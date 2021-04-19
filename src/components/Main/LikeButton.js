import React, { useState, useEffect } from 'react'
import './Main.css';
import { FaRegHeart } from 'react-icons/fa';
import fire from '../../firebase/fire';

const LikeButton = ({ item }) => {

    // Firebase - get current user
    let user = fire.auth().currentUser;

    const [ liked, setLiked ] = useState('#fff'); 
    const [ movieId, setMovieId ] = useState('');

    useEffect(() => {

        if(movieId){
            console.log(movieId);
        } else {
            return;
        }

    }, [movieId])

// LIKE A MOVIE
const toggleLikedMovieHandler = (item) => {

    // user id >> 'liked movies' >> index >> 'movie details' >>
    let docRef = fire.firestore().collection(user.uid).doc('Liked Movies').collection('Details').doc(item.id.toString());

    docRef.get().then((doc) => {
        // check if doc it exists
        if (doc.exists){
            deleteNewMovie(item);
            setMovieId('');

        } else {
            //add it
            addNewMovie(item);
            setMovieId(item.id);
        }
    })

    const addNewMovie = (item) => {
        // Add new liked movie
        docRef.set({
            title: item.title,
            posterPath: item.poster_path,
            overview: item.overview
        }, { merge: true })
        .then(() => {
            console.log("Document successfully written!");
            setLiked("red");
        })
        .catch((error) => {
            console.error("Error writing document: ", error);
        });
    }

    const deleteNewMovie = () => {
        docRef.delete().then(() => {
            setLiked("#fff");
            console.log('Document successfully deleted!');
        }).catch((error) => {
            console.error('Error deleting document ', error);
        })
    }
}

    return (
        <div>
            <FaRegHeart 
            style={{color: liked}}
            onClick={() => {
                toggleLikedMovieHandler(item);
            }}
            />
        </div>
    )
}

export default LikeButton
