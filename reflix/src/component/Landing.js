import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
    constructor() {
        super()
        this.state = {
            users: {
                1: {
                    name: "Omar",
                    backgroundColor: "blue"
                },
                2: {
                    name: "Ahmad",
                    backgroundColor: "red"
                },
                3: {
                    name: "Tamem",
                    backgroundColor: "yellow"
                },
                4: {
                    name: "Ali",
                    backgroundColor: "green"
                }
            },
            userCount: 4
        }
    }
    render() {
        return (
            <div>
                {Object.keys(this.state.users).map(u =>
                    <Link to="/catalog">{this.state.users[u].name}</Link>
                )}
            </div>
        );
    }
}

export default Landing;
