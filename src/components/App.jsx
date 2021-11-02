import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setCount } from '../reducers/reposReducer';
import './app.less'

const App = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.repos.count)

    function onCountClick(){
        dispatch(setCount(5))
    }
    return (
        <div className="app">
            <button onClick={()=>onCountClick()}>COUNT</button>
            <div>{count}</div>
        </div>
    );
};

export default App;