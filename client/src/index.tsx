import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {ToastContainer} from 'react-toastify';

import PortfolioList from "./components/Portfolio/PortfolioList";
import PortfolioForm from "./components/Portfolio/PortfolioForm";
import Navbar from "./components/Navbar/Navbar";

import 'bootswatch/dist/slate/bootstrap.min.css';
import "./index.css";
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
      <div className="container p-4">
      <Switch>
        <Route exact path="/" component={PortfolioList} />
        <Route path="/new-item" component={PortfolioForm} />
        <Route path="/update/:id" component={PortfolioForm} />
      </Switch>
      <ToastContainer/>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
