import React, { useState } from "react";
import { ProductForm } from "../components";

export default function FormContainer({ items, setItems, ToggleShowForm }) {
  const [inputName, setInputName] = useState("");
  const [inputDisc, setInputDisc] = useState("");
  const [inputStock, setInputStock] = useState("");

  function AddItem(e) {
    e.preventDefault();

    //find max id to decide which id suits new item
    let maxId = 0;
    items.forEach((item) => {
      if (item.id > maxId) maxId = item.id;
    });

    //create new item
    const newItem = {
      id: maxId + 1,
      imageUrl: `url('/images/products/nike-1.jpg')`,
      name: inputName,
      disc: inputDisc,
      count: inputStock,
      size: {
        width: 200,
        height: 200,
      },
      weight: "200g",
      comments: [],
    };

    //add item to list
    setItems((prev) => {
      const newItems = [...prev];
      newItems.push(newItem);
      console.log(newItems);
      return newItems;
    });

    //reset inputs
    setInputName("");
    setInputDisc("");
    setInputStock("");

    //close form
    ToggleShowForm();
  }

  return (
    <>
      <ProductForm.Overlay />
      <ProductForm.Container>
        <ProductForm>
          <ProductForm.InputContainer>
            <ProductForm.Label htmlFor="Title">Name</ProductForm.Label>
            <ProductForm.Input
              required
              name="item-form"
              id="Title"
              value={inputName}
              onChange={(e) => {
                setInputName(e.target.value);
              }}
            />
          </ProductForm.InputContainer>
          <ProductForm.InputContainer>
            <ProductForm.Label htmlFor="Discription">
              Discription
            </ProductForm.Label>
            <ProductForm.Input
              required
              name="item-form"
              id="Discription"
              value={inputDisc}
              onChange={(e) => {
                setInputDisc(e.target.value);
              }}
            />
          </ProductForm.InputContainer>
          <ProductForm.InputContainer>
            <ProductForm.Label htmlFor="Stock">Stock</ProductForm.Label>
            <ProductForm.Input
              required
              name="item-form"
              id="Stock"
              value={inputStock}
              onChange={(e) => {
                setInputStock(e.target.value);
              }}
            />
          </ProductForm.InputContainer>

          <ProductForm.InputContainer>
            <ProductForm.Button onClick={AddItem}>Add</ProductForm.Button>
            <ProductForm.Button onClick={ToggleShowForm}>
              Cancel
            </ProductForm.Button>
          </ProductForm.InputContainer>
        </ProductForm>
      </ProductForm.Container>
    </>
  );
}
