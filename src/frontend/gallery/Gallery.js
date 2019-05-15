import React from 'react';
import Stack from "./Stack";
import Loading from "../common/loading/Loading.js"
import './Gallery.css'

export default class Gallery extends React.Component{
    constructor(){
        super();
        this.state ={ tvShows: [] };
    }
    componentDidMount(){
        fetch('/rest/shows')
            .then((response) => response.json())
            .then((tvShows) => this.setState({ tvShows })); //console.log(JSON.stringify(myJson)); 
    }
    
    render(){
        return (
            <div>
                <div className='container'>
                {
                    this.state.tvShows.length ?
                        this.state.tvShows.map(stack => {
                            return (
                            <Stack
                                key={stack.id}
                                id={stack.id} 
                                name={stack.name} 
                                cover={stack.cover} 
                                title={stack.title} 
                            />
                            );
                        }) :
                        <Loading />
                }
                </div>
            </div>
        );
    }
    
}