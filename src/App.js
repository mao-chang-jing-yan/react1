import logo from './logo.svg';
import './App.css';

import {BrowserRouter} from "react-router-dom"
import {renderRoutes} from 'react-router-config';
import routers from "./routers"
import React from "react";


function App() {
    return (
        <div className="App">
            {/*<Router >*/}
            {/*    /!*{renderRoutes(routers)}*!/*/}
            {/*    */}
            {/*</Router>*/}
            <BrowserRouter>
                {/*<Routes>*/}
                {/*    <Route path="/" element={<Index/>}/>*/}
                {/*</Routes>*/}
                {renderRoutes(routers)}
            </BrowserRouter>
        </div>
    );
}

export default App;
