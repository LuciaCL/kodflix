import blackMirror from './covers/bmcover.jpg';
import breakingBad from './covers/bbcover.jpg';
import deathNote from './covers/dncover.jpg';
import gameOfThrones from './covers/gotcover.png';
import wonderWoman from './covers/wwcover.jpg';
import walkingDead from './covers/wdcover.jpg';

export default function getTvShows(){
    return[
        {name:'Breaking Bad' ,source: breakingBad , id:'BreakingBad' },
        {name:'Black Mirror' ,source: blackMirror , id:'BlackMirror' },
        {name:'Death Note' ,source: deathNote , id:'DeathNote' },
        {name:'Game of Thrones' ,source: gameOfThrones , id:'GameOfThrones' },
        {name:'Walking Dead' ,source: walkingDead , id:'WalkingDead' },
        {name:'Wonder Woman' ,source: wonderWoman, id:'WonderWoman' }
        ];
}