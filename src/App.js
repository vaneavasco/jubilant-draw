import React from 'react';
import logo from './logo.svg';
//import './App.css';
import 'react-input-range/lib/css/index.css';
import Canvas from './Components/Canvas';
import BrushSizeSlider from './Components/BrushSizeSlider';
import BrushAlphaSlider from './Components/BrushAlphaSlider';
import ColorPallet from './Components/ColorPallet';

function App() {
    return (
        <div className="App">
            {/*<header className="App-header">*/}
            {/*  <img src={logo} className="App-logo" alt="logo" />*/}
            {/*  <p>*/}
            {/*    Edit <code>src/App.js</code> and save to reload.*/}
            {/*  </p>*/}
            {/*  <a*/}
            {/*    className="App-link"*/}
            {/*    href="https://reactjs.org"*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*  >*/}
            {/*    Learn React*/}
            {/*  </a>*/}
            {/*</header>*/}
            <Canvas></Canvas>
            <BrushSizeSlider/>
            <BrushAlphaSlider/>
            <ColorPallet/>
        </div>
    );
}

export default App;
