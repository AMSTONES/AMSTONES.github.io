
import {
    NavLink,
    useRouteMatch, Route, Switch } from 'react-router-dom';
import Calculator from './portfolio-apps/calculator';
import DrumkitApp from './portfolio-apps/drumkit';

function Portfolio() {

        let { path, url } = useRouteMatch();
        return (
            <div className="Portfolio">
                <h2>Projects</h2>
                <NavLink to={`${url}/drumkit`}>
                    Drumkit
                </NavLink>
                <NavLink to={`${url}/calculator`}>
                    Calculator
                </NavLink>

                <Switch>
                    <Route exact path={path}>
                        <h2>Select a project to learn more</h2>
                    </Route>
                    <Route path={`${path}/calculator`}>
                        <Calculator />
                    </Route>
                    <Route path={`${path}/drumkit`}>
                        <DrumkitApp />
                    </Route>
                </Switch>
            </div>
        )
}

export default Portfolio
