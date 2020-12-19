import './App.css';
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Switch, Route }from 'react-router-dom'
import Home from './Components/Home';


function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={Home}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
