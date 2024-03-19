import React from 'react';
import Home from "./components/home/Home";
import {Container} from "./components/home/homeStyled";
import {Toaster} from "react-hot-toast";

const App = () => {
    return (
        <>

            <Container>
                <Toaster/>
                <Home/>
            </Container>
        </>
    );

};

export default App;