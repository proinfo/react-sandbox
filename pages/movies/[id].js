import React from 'react';
import { useRouter } from 'next/router'

import { getMovieById } from '../../actions'

const Movie = (props) => {
    const router = useRouter()
    const {id} = router.query

    const {movie} = props

    return (
        <div className="container">
            <div class="jumbotron">
                <h1 class="display-4">{movie.name}</h1>
                    <p class="lead">{movie.description}</p>
                <hr class="my-4" />
                <p>{movie.genre}</p>
                <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>
            <p className="desc-text">
                {movie.longDesc}
            </p>
            <style jsx>{`
                .desc-text: {
                    font-size: 41px;
                }
            `}
            </style>
        </div>
    )
};

Movie.getInitialProps = async (context) => {
    const {id} = context.query
    const movie = await getMovieById(id)
  
    return {
      movie
    }
  }

export default Movie;