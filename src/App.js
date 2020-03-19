import React from 'react';
import logo from './logo.svg';
//import './App.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers';
import 'react-input-range/lib/css/index.css';
import Canvas from './components/Canvas';
import BrushSizeSlider from './components/BrushSizeSlider';
import BrushAlphaSlider from './components/BrushAlphaSlider';
import ColorPallet from './components/ColorPalette';

const reduxExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, reduxExtension);

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
            <Provider store={store}>
                <Canvas></Canvas>
                <BrushSizeSlider/>
                <BrushAlphaSlider/>
                <ColorPallet/>
            </Provider>
        </div>
    );
}

export default App;
