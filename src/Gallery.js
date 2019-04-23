import React from 'react';
import Stack from "./Stack";
import getTvShows from './TvShows-get.js';

export default function Gallery(props){
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