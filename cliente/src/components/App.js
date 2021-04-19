import React from 'react';
import { BrowserRouter, Switch ,Route } from 'react-router-dom';
import Badge from './Badge';
import Forms from './Form';

function App(){

    return (
        <BrowserRouter>
            <Switch>
            <Route exact path = "/" component= {Badge}/>
            <Route exact path = "/form" component= {Forms}/>
            </Switch>
        </BrowserRouter>
    );

}

export default App;