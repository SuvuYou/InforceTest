import React, { useState } from "react";
import { Header, ProductFullInfo, ProductForm } from "../components";

export default function ProductInfo({ id, items, setItems }) {
  const Item = items.find((item) => item.id == id);
  console.log(Item);

  const [inputName, setInputName] = useState(Item.name);
  const [inputDisc, setInputDisc] = useState(Item.disc);
  const [inputStock, setInputStock] = useState(Item.count);
  const [showEdit, setshowEdit] = useState(false);

  function EditItem(e) {
    e.preventDefault();

    //add item to list
    setItems((prev) => {
      const copy = [...prev];
      const newItem = { ...copy.find((item) => item.id == id) };
      newItem.name = inputName;
      newItem.disc = inputDisc;
      newItem.count = inputStock;

      const index = copy.findIndex((item) => item.id == id);

      copy[index] = newItem;

      return copy;
    });

    //reset inputs
    setInputName("");
    setInputDisc("");
    setInputStock("");

    //close form
    ToggleShowEdit();
  }

  function ToggleShowEdit() {
    setshowEdit((prev) => !prev);
  }
  return (
    <>
      <Header>
        <Header.LinkButton to="/">Back</Header.LinkButton>
      </Header>

      <ProductFullInfo>
        <ProductFullInfo.Image src={Item.imageUrl} />
        <ProductFullInfo.Title>{Item.name}</ProductFullInfo.Title>
        <ProductFullInfo.Discription>{Item.disc}</ProductFullInfo.Discription>
        <ProductFullInfo.Stock>{Item.count} in stock</ProductFullInfo.Stock>
        <ProductFullInfo.Stats>
          <ProductFullInfo.StatsText>
            Weight: {Item.weight}
          </ProductFullInfo.StatsText>

          <ProductFullInfo.StatsText>
            Height: {Item.size.height}
          </ProductFullInfo.StatsText>

          <ProductFullInfo.StatsText>
            Width: {Item.size.width}
          </ProductFullInfo.StatsText>
        </ProductFullInfo.Stats>

        <ProductFullInfo.CommentsContainer>
          {Item.comments.map((comment) => {
            return (
              <ProductFullInfo.Comment key={comment.id}>
                <ProductFullInfo.CommentDate>
                  {comment.date}
                </ProductFullInfo.CommentDate>
                <ProductFullInfo.CommentDisc>
                  {comment.description}
                </ProductFullInfo.CommentDisc>
              </ProductFullInfo.Comment>
            );
          })}
        </ProductFullInfo.CommentsContainer>

        <ProductFullInfo.Button onClick={ToggleShowEdit}>
          Edit
        </ProductFullInfo.Button>
      </ProductFullInfo>

      {showEdit ? (
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
                <ProductForm.Button onClick={EditItem}>Edit</ProductForm.Button>
                <ProductForm.Button onClick={ToggleShowEdit}>
                  Cancel
                </ProductForm.Button>
              </ProductForm.InputContainer>
            </ProductForm>
          </ProductForm.Container>
        </>
      ) : null}
    </>
  );
}
