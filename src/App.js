import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Pages/Home/HomePages';
import LogIn from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import { connect } from 'react-redux'
import { LoadUserData } from './Redux/Users/UserAction'


function App({ LoadUserData }) {
  const [token, setToken] = useState(localStorage.getItem("auth-sky"))

  // console.log(token);
  // const LoadData = () => {
  //   fetch('http://localhost:5000/api/user/auth', {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //       "auth-sky": localStorage.getItem("auth-sky")
  //     }
  //   }).then(data => {
  //     return data.json();
  //   }).then(data => {
  //     console.log(data)
  //     if (data.id) {
  //       localStorage.setItem('Id', data.id)
  //     } else {
  //       localStorage.removeItem('auth-sky')
  //     }
  //   })
  // }
  useEffect(() => {
    LoadUserData();
  }, [])

  return (

    <Router>
      <div className="App">
        <Switch>
          <Route path='/signup' render={() => token ? <Redirect to='/' /> : (<SignUp />)} />
          <Route path='/login' render={() => token ? <Redirect to='/' /> : (<LogIn />)} />
          <Route path='/' render={() => token ? <Home /> : <Redirect to='/signup' />} />
        </Switch>
      </div>
    </Router>

  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    LoadUserData: () => dispatch(LoadUserData())
  }
}

export default connect(null, mapDispatchToProps)(App);
