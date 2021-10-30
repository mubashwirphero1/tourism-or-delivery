import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Footer from './Page/Shared/Footer';
import Header from './Page/Shared/Header';
import AboutUS from './Page/Web/AboutUS/AboutUS';
import ContactUS from './Page/Web/ContactUS/ContactUS';
import Home from './Page/Web/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/about">
            <AboutUS></AboutUS>
          </Route>
          <Route path="/contact">
            <ContactUS></ContactUS>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
