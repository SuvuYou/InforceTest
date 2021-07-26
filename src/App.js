import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import ProductList from "./pages/productList";
import ProductInfo from "./pages/productInfo";
import { GetItems } from "./hooks";

export default function App() {
  const { items, setItems } = GetItems();

  return (
    <>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={() => <ProductList items={items} setItems={setItems} />}
          />
          <Route
            path="/item/:id"
            exact
            render={(props) => (
              <ProductInfo
                id={props.match.params.id}
                items={items}
                setItems={setItems}
              />
            )}
          />
        </Switch>
      </Router>
    </>
  );
}
