import React from 'react';
import { Switch, Route } from "react-router-dom";
import ProductsPage from '../pages/Products';
import DashboardPage from '../pages/dashboard'
import ProductForm from '../pages/Products/ProductForm';


export default function () {
    return (
        <Switch>
            <Route exact path="/" component={ProductsPage} />
            <Route exact path="/dashboard" component={DashboardPage} />
            <Route exact path="/edit/:id" component={ProductForm} />
        </Switch>
    );
}