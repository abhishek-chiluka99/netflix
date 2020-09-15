import React, { useEffect ,useState } from 'react'
import axios from './axios';
import request from './request';
import './banner.css'

function Banner({title}) {

 const [movies, setMovies] = useState([])


  useEffect(()=> {

    async function fetchData() {
        
        const requests = await axios.get(request.fetchNetflixOriginals)
        setMovies(
            requests.data.results[
                Math.floor(Math.random() * requests.data.results.length)
            ]
        );
        return requests;
    }
    fetchData();
  }, [])

  console.log(movies);
    return (
        <header className="banner" 
         style = { {backgroundSize : "cover",
                    backgroundImage : `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")` , 
                    backgroundPosition : "center center"  
                }}>
            <div className="banner_contents">
                <div className="banner_title">
                <h1>{movies?.title || movies?.name || movies?.original }</h1>
                </div>
               <div className="banner_buttons">
                   <button className="buttons_banner">Play</button>
                   <button className="buttons_banner">View</button>
               </div>

               <div className="banner_description">
                   {movies?.overview}
               </div>

            </div>
            <div className="banner--fadeBottom"/>
        </header>
    )
}
export default Banner;
