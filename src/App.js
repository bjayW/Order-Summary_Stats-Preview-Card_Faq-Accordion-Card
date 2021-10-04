import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OrderSummary from "./pages/OrderSummary";
import StatsPreviewCard from "./pages/StatsPreviewCard";
import FaqCard from "./pages/FaqCard";
import { useState } from "react";

function App() {

  return (
    <Router>
      <Switch>
        <div className="App" >
          <Route exact path="/" component={OrderSummary} />
          <Route exact path="/stats-preview-card" component={StatsPreviewCard} />
          <Route exact path="/faq-card" component={FaqCard} />

        </div>
      </Switch>
    </Router>
  )
}

export default App;