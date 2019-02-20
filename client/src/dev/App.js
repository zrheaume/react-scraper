import React from "react"
import { Navbar } from "./components/bootstrap"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/home"
// import Search from "./pages/search"
import Saved from "./pages/saved"

function App(props) {
   return (
      <Router>
         <div>
            <Navbar />
            <Switch>
               <Route exact path="/" component={Home} />
               {/* <Route exact path="/search" component={Search} /> */}
               <Route exact path="/saved" component={Saved} />
            </Switch>
         </div>
      </Router>
   )
}

export default App