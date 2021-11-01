import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './contextAPI/AuthProvider';
import OnlyUser from './Page/PrivateRoute/OnlyUser';
import Footer from './Page/Shared/Footer';
import Header from './Page/Shared/Header';
import AboutUS from './Page/Web/AboutUS/AboutUS';
import Cart from './Page/Web/Cart/Cart';
import ContactUS from './Page/Web/ContactUS/ContactUS';
import Home from './Page/Web/Home/Home';
import LogIn from './Page/Web/LogIn/LogIn';
import NotFound from './Page/Web/PageNotFound/NotFound';
import Service from './Page/Web/Service/Service';
import Services from './Page/Web/Services/Services';

function App() {
  return (
    <div className="App">
      <AuthProvider>
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
            <OnlyUser path="/services/:spotName">
              <Service></Service>
            </OnlyUser>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/login">
              <LogIn></LogIn>
            </Route>
            <OnlyUser path="/cart">
              <Cart></Cart>
            </OnlyUser>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
