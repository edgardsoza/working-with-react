import React from "react";
import { Link } from "react-router-dom";

const Home = () => {

    return (
        <><h1>Home</h1>
            <Link to="/characters">Ver Caracteres</Link>
        </>
    )
}

export default Home