import React from 'react';
import { Link, Redirect } from 'react-router-dom';
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
        let tvShow = this.state.tvShow;
        return (
            tvShow ?
            <div>
                <h1>{this.state.tvShow.name}</h1>
                <Link to='/'>Back to home page</Link>
            </div> 
            : <Redirect to='./not-found'/>
        );
    }
}

