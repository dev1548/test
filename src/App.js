import React, { Component, Fragment } from 'react';
import './App.css';
import AuthorizationForm from './Component/AuthorizationForm/AuthorizationForm';



class App extends Component {
  render() {
    return (
        <Fragment>
      <div className="App">
        <header className="header">
          это хедер
          это строчка хедер два
        </header>
        <main className="main">
        <AuthorizationForm/>
        </main>
        <div className="suport"/>
      </div>
          <footer className="footer">это футер</footer>
        </Fragment>
    );
  }
}

export default App;
