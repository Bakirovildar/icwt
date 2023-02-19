import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from "../HomePage/HomePage";
import FavoritePage from "../FavoritePage/FavoritePage";

function Layout() {
    return (
        <Routes>
            <Route path={'home'} element={<HomePage/>}/>
            <Route path={'favorite'} element={<FavoritePage/>}/>
        </Routes>
    );
}

export default Layout;
