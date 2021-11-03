
import { BrowserRouter, Switch,Route} from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import OrderReview from './Components/OrderReview/OrderReview';
import Inventory from './Components/Inventory/Inventory';
import NotFound from './Components/NotFound/NotFound';
import Shop from './Components/Shop/Shop';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Shipping from './Components/Shipping/Shipping';

function App() {
  return (
    <div >

      <AuthProvider>
      <Header></Header>

      <BrowserRouter>

          <Switch>

            <Route exact path="/">
              <Shop></Shop>
            </Route>

            <Route path="/shop">

            <Shop></Shop>

            </Route>

            <Route path="/orders">

            <OrderReview></OrderReview>

            </Route>

            <PrivateRoute path="/inventory">

            <Inventory></Inventory>

            </PrivateRoute>
            <PrivateRoute path="/shipping">

            <Shipping></Shipping>

            </PrivateRoute>

            <PrivateRoute path="/placeorder">

              <PlaceOrder></PlaceOrder>
            </PrivateRoute>

            <Route path="/login">

              <Login></Login>
            
            </Route>

            <Route path="/signup">

              <Signup></Signup>
            
            </Route>

            <Route exact path="*">

            <NotFound></NotFound>

            </Route>
            <Route path="/">

            <NotFound></NotFound>

            </Route>



          </Switch>
      </BrowserRouter>

      
      </AuthProvider>
 
     
    </div>
  );
}

export default App;
