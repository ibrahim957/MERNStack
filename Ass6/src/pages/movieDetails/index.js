import React from 'react'
import {MovieCard} from '../../components/card'
import {useParams} from 'react-router-dom'
// import { useLocation } from 'react-router-dom';



const movieDetails =({})=>{
    const {MovieTitle} = useParams
    return(
    <MovieCard
        // Title={location.state.Name}
        // Poster={location.state.Image}
    />
    )
}
export default movieDetails