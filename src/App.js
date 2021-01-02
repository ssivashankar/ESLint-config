import React from "react"
import Header from "./components/Header"
import Login from "./components/Login"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"

export default function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  )
}
