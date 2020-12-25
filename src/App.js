import './App.css';
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Switch, Route }from 'react-router-dom'
import Home from './Components/Home';
import About from './Components/About'
import Terms from './Components/Terms'
import Footter from './Components/Footter';

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" exact component={ About}></Route>
          <Route path="/Termsandconditions" exact component={Terms}></Route>
        </Switch>
        <Footter></Footter>
      </Router>
    </>
  );
}

export default App;
