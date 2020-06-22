import * as React from 'react';
import { render } from 'react-dom';

const App = () => {
    return (
        <React.Fragment>
            <div className="container">
                <h1>Content</h1>
            </div>
            <hr/>
            <div className="logo"></div>
        </React.Fragment>
    );
}

render(<App />, document.getElementById('app'))