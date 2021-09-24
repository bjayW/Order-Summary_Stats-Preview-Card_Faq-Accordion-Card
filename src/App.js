import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OrderSummary from "./pages/OrderSummary";

function App() {
  return (
    <Router>
      <Switch>
        <div className="App">
          <Route exact path="/" componenet={OrderSummary} />
          <Route exact path="" component={} />
        </div>
      </Switch>
    </Router>
  )
}

export default App;