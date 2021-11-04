import React from 'react';
import './app.less'
import {useDispatch, useSelector} from "react-redux";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Main from "./main/Main";

const App = () => {
    const dispatch = useDispatch()


    return (
        <Router>
            <div className="container">
            <Routes>
                <Route path="/" element={<Main/>}>
                    
                </Route>
          </Routes>
            </div>
        </Router>
    );
};

export default App;