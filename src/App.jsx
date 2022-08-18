// import { useState } from 'react';
import './App.css';

import Slider from './Slider';

function App() {

    return (
        <div className="App">

            <div className="content">
            
                <Slider
                    gap={10}
                    visibleCards={10}
                    scroll
                >
                    {Array(15).fill(null).map((a, index) => <div key={index}>{a}</div>)}
                </Slider>

            </div>

        </div>
    );
}

export default App;
