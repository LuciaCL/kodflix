import blackMirror from './covers/bmcover.jpg';
import breakingBad from './covers/bbcover.jpg';
import deathNote from './covers/dncover.jpg';
import gameOfThrones from './covers/gotcover.png';
import wonderWoman from './covers/wwcover.jpg';
import walkingDead from './covers/wdcover.jpg';

export default function getTvShows(){
    return[
        {name:'Breaking Bad' ,
            cover: breakingBad , 
            id:'BreakingBad',
            synopsis:'Breaking Bad tells the story of Walter White, '+
                        'a struggling and depressed high school chemistry teacher who is diagnosed with '+
                        'lung cancer. Together with his former student Jesse Pinkman (Aaron Paul), White '+
                        'turns to a life of crime by producing and selling crystallized methamphetamine to '+
                        'secure his familys financial future before he dies, while navigating the dangers of '+
                        'the criminal world. The title comes from the Southern colloquialism "breaking bad",'+
                        ' meaning to "raise hell" or turn to a life of crime' },
        {name:'Black Mirror' ,
            cover: blackMirror , 
            id:'BlackMirror', 
            synopsis:'Black Mirror is a British science fiction anthology television series created by '+
                'Charlie Brooker, with Brooker and Annabel Jones serving as the programme showrunners. '+
                'It examines modern society, particularly with regard to the unanticipated consequences of '+
                'new technologies. Episodes are standalone, usually set in an alternative present or the near'+
                ' future, often with a dark and satirical tone, though some are more experimental and lighter.'},
        {name:'Death Note' ,
            cover: deathNote , 
            id:'DeathNote' ,
            synopsis: 'Death Note (Japanese: デスノート Hepburn: Desu Nōto) is a Japanese manga series written '+
            ' by Tsugumi Ohba and illustrated by Takeshi Obata. The story follows Light Yagami, a teen genius[2] '+
            'who stumbles across a mysterious otherworldly notebook: the "Death Note", which belonged to the demonic '+ 
            'Shinigami Ryuk, and grants the user the supernatural ability to kill anyone whose name is written in its'+
            ' pages.' },
        {name:'Game of Thrones' ,
            cover: gameOfThrones , 
            id:'GameOfThrones',
            synopsis:'Game of Thrones is an American fantasy drama television series created by David Benioff and D. B. Weiss for HBO.'+
            ' It is an adaptation of A Song of Ice and Fire, George R. R. Martins series of fantasy novels, the first of which is '+
            ' A Game of Thrones. The show is filmed in Belfast and elsewhere in Northern Ireland, Canada, Croatia, Iceland, Malta, Morocco, '+
            'Scotland, Spain, and the United States.[1] The series premiered on HBO in the United States on April 17, 2011, and will conclude '+
            'with its eighth season, which premiered on April 14, 2019' },
        {name:'Walking Dead' ,
            cover: walkingDead , 
            id:'WalkingDead',
            synopsis:'The Walking Dead is an American post-apocalyptic horror television series for AMC based on the comic book series by '+
            'Robert Kirkman, Tony Moore, and Charlie Adlard. The series features a large ensemble cast as survivors of a zombie apocalypse, '+
            'trying to stay alive under near-constant threat of attacks from the mindless zombies, colloquially known as "walkers". However,'+
            ' with the fall of humanity, these survivors also face conflict from other living survivors who have formed groups and communities '+
            'with their own sets of laws and morals, often leading to hostile conflict between the human communities'},
        {name:'Wonder Woman' ,
            cover: wonderWoman, 
            id:'WonderWoman',
            synopsis:'Wonder Woman is a 2017 American superhero film based on the DC Comics character of the same name, produced by'+
            ' DC Entertainment in association with RatPac Entertainment and Chinese company Tencent Pictures, and distributed by Warner Bros.'+
            ' Pictures. It is the fourth installment in the DC Extended Universe.' },
        ];
}