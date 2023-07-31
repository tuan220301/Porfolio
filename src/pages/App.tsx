import React, { } from "react";

// 1. import `ChakraProvider` component
import { Router } from "@reach/router";
import WorkPage from "./Work";
import HomePage from "./Home";
import Layout from "../Components/Base/Layout";
// import WorkComponent from "../Components/Work";

function App() {

    return (

        <Router>
            <HomePage path='/' />
            <WorkPage path='/Work' />
        </Router>

    );
}
export default App;