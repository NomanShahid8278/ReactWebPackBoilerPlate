import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Routes} from './routes'

const App = () =>{
    return(
        <Router>
            <Switch>
                {Routes.map((route)=>{
                    const {component,path,key} = route
                    return <Route exact component={component} path={path} key={key}/>
                })}
            </Switch>
        </Router>
    )
}

export default App;