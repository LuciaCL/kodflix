import React from 'react';
import Stack from "./Stack";
import blackMirror from './covers/bmcover.jpg';
import breakingBad from './covers/bbcover.jpg';
import deathNote from './covers/dncover.jpg';
import gameOfThrones from './covers/gotcover.png';
import wonderWoman from './covers/wwcover.jpg';
import walkingDead from './covers/wdcover.jpg';

export default function Gallery(props){
    return (
        <div>
            <div className='container'>
                <Stack name="Black Mirror" source={blackMirror} title="black mirror cover" id='BlackMirror'></Stack>
                <Stack name="Breaking Bad" source={breakingBad} title="breaking bad cover" id='BreakingBad'></Stack>
                <Stack name="Death Note" source={deathNote} title="death note cover" id='DeathNote'></Stack>
            </div>
            <div className='container' >
                <Stack name="Game of Thrones" source={gameOfThrones} title="game of thrones cover" id='GameOfThrones'></Stack>
                <Stack name="Walking Dead" source={walkingDead} title="walking dead cover" id='WalkingDead'></Stack>
                <Stack name="Wonder Woman" source={wonderWoman} title="wonder woman cover" id='WonderWoman'></Stack>
            </div>
        </div>
    )
}