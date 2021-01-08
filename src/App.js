import React from 'react';
import './App.scss';
import Sidebar from './components/sidebar'
import MainContainer from './components/main-container';
import Navigation from './components/navbar';
import AboutMe from './components/about-me';

class App extends React.Component {

    render() {
        return (
        <div className="App">
            <Navigation />
            <Sidebar />
            <MainContainer/>
        </div>
        );
    }
}

export default App;
