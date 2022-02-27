import React from "react";
import { Route, Switch as Router } from "react-router-dom";

import Main from "./components/Main.jsx";
import NotFound from './components/404';

function App() {
    return (
        <Router>
            <Route exact path="/portfolio" component={Main} />
            <Route component={NotFound} />
        </Router>
    );
}

export default App;
