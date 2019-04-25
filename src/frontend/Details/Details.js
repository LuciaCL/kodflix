import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import getTvShows from '../TvShows-get.js';
import './Details.css';

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
                    <div className='details'>
                        <h1 >{this.state.tvShow.name}</h1>
                        <div className='details-container'>
                                <h3 className='details-container-text'>{this.state.tvShow.synopsis}</h3>
                                <img src={this.state.tvShow.cover} alt={this.state.tvShow.alt}/>
                        </div>
                        <Link to='/'>Back to home page</Link>
                    </div>
                : <Redirect to='./not-found'/>
           
        );
    }
}

