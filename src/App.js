import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OrderSummary from "./pages/OrderSummary";
import StatsPreviewCard from "./pages/StatsPreviewCard";
import { useState } from "react";

function App() {

  return (
    <Router>
      <Switch>
        <div className="App" >
          <Route exact path="/" component={OrderSummary} />
          <Route exact path="/stats-preview-card" component={StatsPreviewCard} />
        </div>
      </Switch>
    </Router>
  )
}

export default App;