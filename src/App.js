import React from 'react';
import './App.css';
import Row from './Row';
import request from './request';
import Banner from './Banner';
import Nav from './Nav'


function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner title="NETFLIX"/>
      <Row title="Netflix Originals" 
       fetchURL = {request.fetchNetflixOriginals}
       isLargeRow = {true}/>
      <Row title="Trending Now"   fetchURL = {request.fetchTrending}/>
      <Row title="Top Rated"   fetchURL = {request.fetchTopRated}/>
      <Row title="Action Movies "   fetchURL = {request.fetchActionMovies}/>
      <Row title="Comedey Movies"   fetchURL = {request.fetchComedyMovies}/>
      <Row title="Horror Movies"   fetchURL = {request.fetchHorrorMovies}/>
      <Row title="Romance Movies"   fetchURL = {request.fetchRomanceMovies}/>
      <Row title="Documentaries"   fetchURL = {request.fetchDocumantaries}/>
    </div>
  );
}

export default App;
