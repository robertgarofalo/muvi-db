import React from 'react'
import './Main.css';

const Trending = ({ movieDBURL }) => {
    return (
        <>
                        <div>
                            <img src={`${movieDBURL}/qRhDgHAMNz4WfgEDYXbnjQhjvxr.jpg`} />
                            <h3 className='movie-title'>wee</h3>
                            <p className='movie-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, vel?</p>
                        </div>
                        
                        <div>
                            <img src={`${movieDBURL}/279yOM4OQREL36B3SECnRxoB4MZ.jpg`} />
                            <h3 className='movie-title'>waaa</h3>
                            <p className='movie-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, vel?</p>
                        </div>
                        
                        <div>
                            <img src={`${movieDBURL}/dYCWUAidqgakGETwZkfGxU7CWhL.jpg`} />
                            <h3 className='movie-title'>woo</h3>
                            <p className='movie-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, vel?</p>
                        </div>
                        
                        <div>
                            <img src={`${movieDBURL}/9kg73Mg8WJKlB9Y2SAJzeDKAnuB.jpg`} />
                            <h3 className='movie-title'>Movie title</h3>
                            <p className='movie-description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, vel?</p>
                        </div>
        </>
    )
}

export default Trending
