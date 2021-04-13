import React from "react";
import logo from './logo.svg';
import './App.css';

import { LoginScreen } from "./components/login/index";
import Estadisticas from "./components/landing_page/estadistica";

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  /*componentDidMount() {
    this.renderLogin()
  }


  renderLogin = async () => {
    try {
      let res = await fetch("http://localhost:8000/accounts/login/")
      let html = await res.text();

      let parser = new DOMParser();
      let doc = parser.parseFromString(html, "text/html");

      this.setState({
        'test': doc.body.innerHTML
      });
    } catch (err) {
      console.log(err);
    }
  }*/


  render() {
    return (
      <div className="App">
         {window.location.pathname == "/accounts/login/" && <LoginScreen></LoginScreen>}
         {window.location.pathname == "/accounts/signup/" && <LoginScreen></LoginScreen>}
         {window.location.pathname == "/accounts/password/reset/" && <LoginScreen></LoginScreen>}
      </div>
    )
  }
}

export default App;
