import React from 'react';
import ReactDOM from 'react-dom';
import './VideoGame.css';

// create a js file for video game
// and a js file for boxart
// other information can also be added
// declare VideoGame custom component as a const and export it to use in app.js

const VideoGame = (props) => { 

    // html goes inside here
    // return game information
    // title
    // year of release
    // platform
    return (

        <div id="data">
            
            <img src={props.imgSrc} alt="boxart"></img>
            <h2>{props.name}</h2>
            <p>{props.platform}</p>
            <p>{props.year}</p>

        </div>
    );

}
export default VideoGame;