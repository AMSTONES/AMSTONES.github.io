import React, { Component } from 'react';
import { Switch, Route} from "react-router-dom";
import AboutMe from './about-me';
import Portfolio from './portfolio';
import Skills from './skills';

class MainContainer extends Component {
    render() {

        return (
            <div className="main-container">
               <Switch>
                    <Route path="/portfolio">
                        <Portfolio />
                    </Route>
                    <Route path="/skills">
                        <Skills/>
                    </Route>
                    <Route exact path="/">
                        <AboutMe/>
                    </Route>
               </Switch>
            </div>
        )
    }
}

export default MainContainer
