
import './App.scss';
import Sidebar from './components/sidebar'
import MainContainer from './components/main-container';
import Navigation from './components/navbar';
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
        <Navigation />
        <Container fluid>
            <Row>
                <Col>
                    <Sidebar />
                </Col>
                  <Col className="main-column" xs={12} md={{ span: 9, offset: 3 }} lg={{ span: 10, offset: 2 }}>
                    <MainContainer />
                </Col>
            </Row>
        </Container>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
