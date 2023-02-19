import React, {Dispatch, useEffect, useState} from 'react';
import './App.css';
import {useDispatch} from "react-redux";
import Header from "./content/Header/Header";
import Layout from "./content/Layout/Layout";
import {useNavigation} from "./general/hooks/useNavigate";
import {addStorageAction, getJoke} from "./store/action";

function App() {
    useNavigation()
    const dispatch: Dispatch<any> = useDispatch()

    useEffect(() => {
        dispatch(getJoke())
        dispatch(addStorageAction(JSON.parse(localStorage.getItem('favorites') as string)))
    }, [])

    return (
        <div className="App">
            <Header/>
            <Layout/>
        </div>
    );
}

export default App;
