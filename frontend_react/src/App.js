import React from 'react';
import './App.scss';
import { About, Footer, Header, Skills, Testimonials, Work } from './containers'
import { Navbar } from './components';

const App = () => {
    return (
        <div className='app'>
            <Header />
            <Navbar />
            
            <About />
            <Work />
            <Skills />
            <Testimonials />
            <Footer />
        </div>
    );
}

export default App;