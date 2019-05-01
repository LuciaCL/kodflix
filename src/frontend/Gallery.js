import React from 'react';
import Stack from "./Stack";
import getTvShows from './TvShows-get.js';

export default function Gallery(props){

    fetch('/rest/shows')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(JSON.stringify(myJson));
    });
  
    return (
        <div>
            <div className='container'>
            {
                getTvShows().map(stack => {
                    return (
                    <Stack
                        key={stack.id}
                        id={stack.id} 
                        name={stack.name} 
                        cover={stack.cover} 
                        title={stack.title} 
                    />
                    );
                })
            }
            </div>
        </div>
    )
    
}