import React from 'react'
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() 
{
    return(
        <div className="container">
            <Navbar />
            <MainContent />
            <Footer />
        </div>
    )
}

export default App;