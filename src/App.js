import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar'
import Dashboard from './components/dashboard/Dashboard'
import QuoteDetails from './components/quotes/QuoteDetail'
import SignIn from './components/authentication/SignIn'
import Register from './components/authentication/Register';
import AddQuote from './components/quotes/AddQuote'


class App extends Component{
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          {/* switch tag makes sure only one route is loaded at a time */}
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/quote/:id' component={QuoteDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/register' component={Register} />
            <Route path='/create' component={AddQuote} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
