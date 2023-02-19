import React from 'react';
import './App.css';
import Header from "./content/Header/Header";
import Layout from "./content/Layout/Layout";
import {useNavigation} from "./general/hooks/useNavigate";

function App() {
    useNavigation()

    return (
        <div className="App">
            <Header/>
            <Layout/>
        </div>
    );
}

export default App;
