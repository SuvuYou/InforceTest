import React, { useState } from "react";
import { ProductCard, ProductForm } from "../components";

export default function CardContainer({ cards, setItems }) {
  const [showDelete, setShowDelete] = useState(false);
  const [deleteId, setDeleteId] = useState();

  function deleteItem() {
    //find position of an item
    const position = cards.findIndex((item) => item.id == deleteId);

    //delete it
    setItems((prev) => {
      const copy = [...prev];
      copy.splice(position, 1);
      return copy;
    });

    toogleShow();
  }

  function toogleShow() {
    setShowDelete((prev) => !prev);
  }

  return (
    <>
      <ProductCard.Container>
        {cards.map((item) => {
          return (
            <ProductCard key={item.id}>
              <ProductCard.Image src={item.imageUrl} />
              <ProductCard.Title>{item.name}</ProductCard.Title>
              <ProductCard.Discription>{item.disc}</ProductCard.Discription>
              <ProductCard.Amount>{item.count}</ProductCard.Amount>
              <ProductCard.ButtonLink to={`/item/${item.id}`}>
                More info
              </ProductCard.ButtonLink>

              <ProductCard.Button
                onClick={() => {
                  setDeleteId(item.id);
                  toogleShow();
                }}
              >
                Delete card
              </ProductCard.Button>
            </ProductCard>
          );
        })}
      </ProductCard.Container>
      {showDelete ? (
        <>
          <ProductForm.Overlay />
          <ProductForm.Container>
            <ProductForm>
              <ProductForm.InputContainer>
                <ProductForm.Button onClick={deleteItem}>
                  Confirm
                </ProductForm.Button>
                <ProductForm.Button onClick={toogleShow}>
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
