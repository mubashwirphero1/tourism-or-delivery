import { BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Footer from './Page/Shared/Footer';
import Header from './Page/Shared/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch></Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
