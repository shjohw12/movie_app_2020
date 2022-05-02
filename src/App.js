import React from 'react';
// import Home from './routes/Home'
import './App.css';
import { HashRouter, Route } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

function App() {
  return (
    <HashRouter>
      {/* Link, Router 컴포넌트는 반드시 HashRouter 안에 포함되어야 함 */}
      {/* Navigation에서 Link 컴포넌트 반환 */}
      <Navigation />
      <Route path='/' exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail" component={Detail} />

      {/* <Route path="/home">
        <h1>home</h1>
      </Route>
      <Route path="/home/introduction">
        <h1>Introduction</h1>
      </Route>
      <Route path="/about">
        <h1>About</h1>
      </Route> */}
    </HashRouter>
  );
}

export default App;