import React from 'react';
import { BrowserRouter, Switch ,Route } from 'react-router-dom';
import Badge from './Badge';
import Form from './Form';

function App(){

    return (
        <BrowserRouter>
            <Switch>
            <Route exact path = "/badge" component= {Badge}/>
            <Route exact path = "/form" component= {Form}/>
            </Switch>
        </BrowserRouter>
    );

}

export default App;