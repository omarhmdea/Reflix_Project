import React, { Component } from 'react';

class Movie extends Component {
    render() {
        let movieID = this.props.match.params.id
        let movie = this.props.moviesList[movieID]

        return (
            <div>
                {movie.title} ({movie.year})
                <div>
                    <img
                        src={movie.img}
                        alt={movie.title}
                    />
                </div>
                {movie.descrShort}
            </div>
        );
    }
}

export default Movie;
