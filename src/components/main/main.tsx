import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';

const main = () => {
  return (
    <div style={{ paddingRight: '30%', paddingLeft: '30%'  }}>
      <Router basename="/"  >
        <Header></Header>
        <Switch  >
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  )
}
export default main;
