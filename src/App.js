import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";


const robodual = require('./_previous/RoboDual/index.html');
class robodualHTML extends React.Component {
    render() {
        return <div dangerouslySetInnerHTML = {{ __html: robodual}}></div>;
    }
}

function App() {
    return (
        <Router>
            <Routes>

                <Route path="RoboDual" component={robodualHTML} />

            </Routes>
        </Router>
    );
}

export default App;
