import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Nav from './Components/Navbar/Navbar'
import Cart from './Components/Cart/Cart';
import Home from './Components/Home/Home'
import {Provider} from 'react-redux';
import store from './Store/index'
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Contact from './Components/Contact/Contact'
import ShippingDetails from './Components/ShippingDetails/ShippingDetails';
import Payment from './Components/Payment/Payment';
import Successful from './Components/Succesfull/Successful';
import AboutUs from './Components/AboutUs/AboutUs'

function App(props) {
  return (
    
    <Router>
      
      <Provider store={store}>
        <Nav />
      
        <Route path="/home" exact component={Home} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/product-details/:id" exact component={ProductDetails} />
        <Route path = "/contact" exact component={Contact} />
        <Route path ="/shipping-details" exact component={ShippingDetails} />
        <Route path ="/payment" exact component={Payment} />
        <Route path ="/success" exact component={Successful} />
        <Route path = '/aboutUs' exact component={AboutUs} />

      </Provider>
    </Router>
  );
}

export default App;
