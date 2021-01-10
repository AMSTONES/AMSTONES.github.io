import { Switch, Route, withRouter} from "react-router-dom";
import AboutMe from './about-me';
import Portfolio from './portfolio';
import Skills from './skills';
import {
    TransitionGroup,
    CSSTransition
} from "react-transition-group";

const AnimatedSwitch = withRouter(({ location }) => (
    <div className="main-container">
        <TransitionGroup>
        <CSSTransition key={location.key} classNames="slide" timeout={1000}>
            <Switch>
                <Route path="/" component={AboutMe} exact />
                <Route path="/skills" component={Skills} />
                <Route path="/portfolio" component={Portfolio} />
            </Switch>

        </CSSTransition>
    </TransitionGroup>
     </div>
));

function MainContainer() {

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

export default AnimatedSwitch
