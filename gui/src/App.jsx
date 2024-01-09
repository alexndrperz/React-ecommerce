
import './App.css';
import { ProductsCrud } from './views/Admin/ProductsCrud.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react'

export const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/poducts' Component={ProductsCrud}/>
        </Switch>
      </div>
    </Router>
    

  )
}


export default App;
