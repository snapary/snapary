import React from 'react'
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './pages/Home/Home'
import Register from "./pages/Register/Register"
import Login from "./pages/Login/Login"
// import Alert from "./pages/Alert/Alert"
// import History from "./pages/History/History"
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/' exact component={Register} />
        <Route path='/' exact component={Login} />
        {/*<Route path='/' exact component={Alert} />*/}
        {/*<Route path='/' exact component={History} />*/}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
