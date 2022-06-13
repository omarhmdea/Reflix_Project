import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Catalog extends Component {

    constructor() {
        super()
        this.state = {
            filterMovie: "",
            budget: 10
        }
    }

    rentMovie = (id, isRented) => {
        let updateBudget = this.state.budget
        updateBudget += 3
        if (isRented) {
            this.setState({
                budget: updateBudget
            })
        } else {
            this.setState({
                budget: updateBudget
            })
        }
        this.props.rentMovie(id)
    }

    displayMovies = (movies) => {
        let finalCatalogPage = []
        let rentedMovies = []
        let caltalogMovies = []
        let IsfirstMoveRented = 1
        let IsfirstMove = 1

        movies.map(m => {
            if (m.isRented && m.title.toLowerCase().includes(this.state.filterMovie)) {

                let movieTag =
                    <Link to={`/movies/${m.id}`}>
                        <div className="box">
                            <img
                                src={m.img}
                                alt={m.title}
                            />
                            <button className="btn" onClick={(e) => { this.rentMovie(m.id, m.isRented) }} >-</button>
                        </div>
                    </Link>

                if (IsfirstMoveRented) {
                    rentedMovies.push(<div>Rented:</div>)
                    IsfirstMoveRented = 0
                }
                if (IsfirstMove) {
                    caltalogMovies.push(<div>Catalog:</div>)
                    IsfirstMove = 0
                }
                rentedMovies.push(movieTag)
                caltalogMovies.push(movieTag)

            } else if (m.title.toLowerCase().includes(this.state.filterMovie)) {
                if (IsfirstMove) {
                    caltalogMovies.push(<div>Catalog:</div>)
                    IsfirstMove = 0
                }
                let movieTag =
                    <Link to={`/movies/${m.id}`}>
                        <div className="box">
                            <img
                                src={m.img}
                                alt={m.title}
                            />
                            <button className="btn" onClick={(e) => { this.rentMovie(m.id, m.isRented) }}>+</button>
                        </div>
                    </Link>
                caltalogMovies.push(movieTag)
            }
            return null
        })
        finalCatalogPage.push(rentedMovies, caltalogMovies)
        return finalCatalogPage
    }

    updateTestText = (event) => {

        this.setState({
            filterMovie: event.target.value.toLowerCase()
        })
    }

    render() {
        let movies = this.props.moviesList
        return (
            <div>
                <input type="text" placeholder="Search" onChange={this.updateTestText} />
                <span>Budget: ${this.state.budget}</span>
                <div>
                    {this.displayMovies(movies)}
                </div>

            </div>
        );
    }
}

export default Catalog;
