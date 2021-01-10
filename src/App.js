import React from 'react';
import './App.scss';
import Sidebar from './components/sidebar'
import AnimatedSwitch from './components/main-container';
import Navigation from './components/navbar';
import CvLink from './components/cv-link';

class App extends React.Component {

    render() {
        return (
        <div className="App">
            <Navigation />
            <Sidebar />
            <AnimatedSwitch/>
            <CvLink/>
        </div>
        );
    }
}

export default App;
