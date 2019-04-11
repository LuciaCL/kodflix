import React from 'react';
import { Link } from 'react-router-dom';
import getTvShows from './TvShows-get.js';

export default class Details extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tvShow: {}
        }
    }

    componentDidMount(){
        let tvShowId = this.props.match.params.tvShowId;
        let tvShow = getTvShows()
            .find((tvShow) =>tvShow.id === tvShowId);
        setTimeout(() => {
           this.setState({ tvShow }) 
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.tvShow.name}</h1>
                <Link to='/'>Back to home page</Link>
            </div>
        );
    }
}

