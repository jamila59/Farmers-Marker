import React from 'react';
import Header from './Header';
import TicketList from './LocationList';
import NavBar from './NavBar'
import MediaCard from './Card'


function App(){
    return (
        <div>
            <Header/>
            <NavBar />
            <MediaCard/>
        </div>
    );
}

export default App;
