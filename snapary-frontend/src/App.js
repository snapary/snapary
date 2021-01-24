import React from 'react'
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './pages/Home/Home'
import Register from "./pages/Register/Register"
import Login from "./pages/Login/Login"
import Alert from "./pages/Alert/Alert"
import History from "./pages/History/History"
import Post from "./pages/Post/Post"
import Header from './components/Header/Header'


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/register' exact component={Register} />
        <Route path='/login' exact component={Login} />
        <Route path='/alert' exact component={Alert} />
        <Route path='/history' exact component={History} />
        <Route path='/post' exact component={Post} />
      </Switch>
    </Router>
  );
}

export default App;
