import React from 'react';
import './App.css';
import HomePage from "./content/HomePage/HomePage";
import Header from "./content/Header/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import FavoritePage from "./content/FavoritePage/FavoritePage";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path={'home'} element={<HomePage/>}/>
                    <Route path={'favorite'} element={<FavoritePage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
);
}

export default App;
