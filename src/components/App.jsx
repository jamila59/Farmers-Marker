import React from 'react';
import Header from './Header';
import TicketList from './LocationList';
import NavBar from './NavBar'


function App(){
    return (
        <div>
            <Header/>
            <NavBar />
            <TicketList/>
        </div>
    );
}

export default App;
