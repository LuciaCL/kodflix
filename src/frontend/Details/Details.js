import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Details.css';
import Loading from '../common/loading/Loading';

export default class Details extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tvShow: {}
        }
    }
    componentDidMount(){
        fetch('/rest/shows')
            .then((response) => response.json())
            .then((tvShows) =>{ 
                let tvShowId = this.props.match.params.tvShowId;
                let tvShow = tvShows.find((tvShow) =>tvShow.id === tvShowId);
                this.setState({ tvShow });
        });
    }

    render() {
        let tvShow = this.state.tvShow;
        if(tvShow) {
            return tvShow.id ?
                <DetailsContent tvShow={tvShow} /> :
                <Loading />  
        }else{
            return <Redirect to='./not-found' />
        }

    }
}

function DetailsContent({ tvShow }) {
    return (
        <div className='details'>
            <h1 >{tvShow.name}</h1>
            <div className='details-container'>
                    <h3 className='details-container-text'>{tvShow.synopsis}</h3>
                    
                    <img 
                        src={require(`../common/images/${tvShow.id}.jpg`)} 
                        alt='cover'/>
            </div>
            <Link to='/'>Back to home page</Link>
        </div>
    );
}

