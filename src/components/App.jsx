import React from 'react';
import './app.less'
import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Main from "./main/Main";

const App = () => {
    const dispatch = useDispatch()


    return (
        <BrowserRouter>
            <div className="container">
            <Routes>
                 <Route path="/" component={<Main/>}/>
            </Routes>
                
            </div>
        </BrowserRouter>
    );
};

export default App;