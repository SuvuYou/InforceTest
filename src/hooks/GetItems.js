import React, { useState, useEffect } from "react";
import StarterProducts from "../starter-Products";

export default function GetItems() {
  let localStorageItems = JSON.parse(localStorage.getItem("items"));
  if (!localStorageItems) {
    localStorageItems = StarterProducts();
    console.log(localStorageItems);
  }
  const [items, setItems] = useState(localStorageItems);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return { items, setItems };
}
