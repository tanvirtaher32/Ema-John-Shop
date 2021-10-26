
import { BrowserRouter, Switch,Route} from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import OrderReview from './Components/OrderReview/OrderReview';
import Inventory from './Components/Inventory/Inventory';
import NotFound from './Components/NotFound/NotFound';
import Shop from './Components/Shop/Shop';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div >

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

            <Route path="/inventory">

            <Inventory></Inventory>

            </Route>

            <Route path="/placeorder">

              <PlaceOrder></PlaceOrder>
            </Route>

            <Route exact path="*">

            <NotFound></NotFound>

            </Route>
            <Route path="/">

            <NotFound></NotFound>

            </Route>



          </Switch>
      </BrowserRouter>

      
      
     
    </div>
  );
}

export default App;
