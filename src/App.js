import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch,Link,Redirect} from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import MainPage from "./pages/index";
import SecondApiPage from "./pages/secondapi";
import ThirdApiPage from "./pages/thirdapi";
import ErrorPage from "./pages/404";

class App extends React.Component{

  render(){
    return(
      <Router>
        <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route exact path='/secondapi' component={SecondApiPage}/>
        <Route exact path='/thirdapi' component={ThirdApiPage}/>
        <Route exact path='/404' component={ErrorPage}/>
        <Redirect to='404' />
        </Switch>
      </Router>
    );
    
  }
}

export default App;
