import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setCount } from '../reducers/reposReducer';
import './app.less'
import Main from './main/Main';

const App = () => {
    const dispatch = useDispatch();
    

    return (
        <BrowserRouter>
            <div className="container"></div>
            <Route path="/" component={Main}></Route>
        </BrowserRouter>
    );
};

export default App;