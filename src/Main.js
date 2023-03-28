import React from "react";
import './Main.css'
import Box from './Box'

const Main = () => {
    return <main className="main">
        <Box name='Mr A' title='CEO' age='28' />
        <Box name='Mr B' title='Manager' age='30' />
        <Box name='Mr C' title='Supervisor' age='25' />
    </main>;
};

export default Main;