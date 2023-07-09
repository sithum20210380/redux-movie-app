import React from 'react';
import { BrowserRouter as Router, Route, Switch,Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';
import './App.scss';

import { Outlet } from 'react-router-dom'

function BasicLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

function AdminLayout() {
  return <Outlet />
}

function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<BasicLayout />}>
          <Route index element={<Home />}/>
          <Route path="/movie/:imdbID" element={<MovieDetail/>} />
          <Route path="*" element = {<PageNotFound/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
