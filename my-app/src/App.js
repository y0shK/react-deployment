// standard imports
import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

// import custom component
import VideoGame from './game-data/VideoGame.js';

// no props needed - call this function from index.js
// hardcode data here, then use in data.js programmatically

function App() {

    return (

    <div id="app">
    
        <h1 id="heading">My favorite video games:</h1>
        
            <VideoGame
            name = "Chrono Trigger"
            year = "2008"
            platform = "Nintendo DS"
            imgSrc = "https://gamefaqs.gamespot.com/a/box/3/0/7/20307_front.jpg"
            />

            <VideoGame
            name = "Super Mario World"
            year = "1991"
            platform = "SNES"
            imgSrc = "https://gamefaqs.gamespot.com/a/box/6/2/5/14625_front.jpg"
            />


    </div>

    );

}

export default App;