import { useState } from 'react';
import './App.css';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import Slider from './Slider';

function App() {

    const [gap, setGap] = useState(10);
    const [visibleCards, setVisibleCards] = useState(10);
    const [rectangles, setRectangles] = useState(15);
    const [scroll, setScroll] = useState(false);

    const codeString = `// React Syntax Highlighter
<Slider gap={${parseFloat(gap) || 0}} visibleCards={${parseFloat(visibleCards) || 1}}${scroll ? ' scroll' : ''}>
    // create rectangles (children)
    {Array(${parseInt(rectangles) || 1}).fill(null).map((x, index) => <div key={index}>{x}</div>)}
</Slider>
`;

    return (
        <div className="App">

            <div className="content">

                <h1>Slider</h1>

                <div className='top'>

                    <div>
                        <label htmlFor="gap">Gap
                            <input type="number" value={gap} id="gap" min="0"
                                onChange={e => setGap(e.target.value)}
                            />px
                        </label>

                        <label htmlFor="visible-cards">VisibleCards
                            <input type="number" value={visibleCards} id="visible-cards" min="1"
                                onChange={e => setVisibleCards(e.target.value)}
                            />
                        </label>

                        <label htmlFor="rectangles">Rectangles
                            <input type="number" value={rectangles} id="rectangles" min="1"
                                onChange={e => setRectangles(e.target.value)}
                            />
                        </label>

                        <label htmlFor="scroll">Scroll
                            <input type="checkbox" id="scroll" defaultChecked={scroll}
                                onChange={() => setScroll(!scroll)}
                            />
                        </label>
                    </div>

                    <SyntaxHighlighter showLineNumbers language="javascript" style={atomOneDarkReasonable}>
                        {codeString}
                    </SyntaxHighlighter>
                </div>
            
                <Slider
                    gap={parseFloat(gap) || 0}
                    visibleCards={parseFloat(visibleCards) || 1}
                    scroll={scroll}
                >
                    {Array(parseInt(rectangles) || 1).fill(null).map((a, index) => <div key={index}>{a}</div>)}
                </Slider>

            </div>

        </div>
    );
}

export default App;
