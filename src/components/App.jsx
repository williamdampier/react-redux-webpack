import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setCount } from '../reducers/reposReducer';
import './app.less'

const App = () => {
    const dispatch = useDispatch();
    

    return (
        <div className="app">
            
            <div>{count}</div>
        </div>
    );
};

export default App;