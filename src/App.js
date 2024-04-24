import "./App.css";

import React, { useState } from "react";
import Navbar from "./componant/Navbar";
import News from "./componant/News";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App=()=> {
   const pageSize=5
   const apiKey=process.env.REACT_APP_NEWS_API

  const[progress,setProgress]=useState(0)
 

    return (
      <div>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
          height={3}
        color='#f11946'
        progress={progress}
   
      />
          <Routes>
            <Route
              exact
              path="/"
              element={<News setProgress={setProgress} apiKey={apiKey}   pageSize={pageSize} country="in" category="general" />}
            ></Route> 
          </Routes>
          <Routes>
            <Route
              exact
              path="/business"
              element={<News setProgress={setProgress} apiKey={apiKey}   pageSize={pageSize} country="in" category="business" />}
            ></Route> 
          </Routes>
          <Routes>
            <Route
              exact
              path="/entertainment"
              element={<News setProgress={setProgress} apiKey={apiKey}   pageSize={pageSize} country="in" category="entertainment" />}
            ></Route> 
          </Routes>
          <Routes>
            <Route
              exact
              path="/general"
              element={<News setProgress={setProgress} apiKey={apiKey}   pageSize={pageSize} country="in" category="general" />}
            ></Route> 
          </Routes>
          <Routes>
            <Route
              exact
              path="/science"
              element={<News setProgress={setProgress} apiKey={apiKey}   pageSize={pageSize} country="in" category="science" />}
            ></Route> 
          </Routes>
          <Routes>
            <Route
              exact
              path="/health"
              element={<News setProgress={setProgress} apiKey={apiKey}   pageSize={pageSize} country="in" category="health" />}
            ></Route> 
          </Routes>
          <Routes>
            <Route
              exact
              path="/sports"
              element={<News setProgress={setProgress} apiKey={apiKey}   pageSize={pageSize} country="in" category="sports" />}
            ></Route> 
          </Routes> <Routes>
            <Route
              exact
              path="/technology"
              element={<News setProgress={setProgress} apiKey={apiKey}   pageSize={pageSize} country="in" category="technology" />}
            ></Route> 
          </Routes>
        
        </BrowserRouter>
      </div>
    );
  
}

export default App;
