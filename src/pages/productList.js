import React, { useState } from "react";
import CardContainer from "../containers/CardContainer";
import FormContainer from "../containers/FormContainer";
import { Header } from "../components";

export default function ProfuctList({ items, setItems }) {
  const [showForm, setShowForm] = useState(false);

  function sortByName() {
    //compare function
    function compare(a, b) {
      // Use toUpperCase() to ignore character casing
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      //comparison
      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    }

    //creationg copy of array
    const copy = [...items];

    //sorting copy
    copy.sort(compare);

    //setting items
    setItems(copy);
  }

  function sortByStock() {
    //creationg copy of array
    const copy = [...items];

    //sorting copy
    copy.sort((a, b) => b.count - a.count);

    //setting items
    setItems(copy);
  }

  function ToggleShowForm() {
    setShowForm((prev) => !prev);
  }

  return (
    <>
      <Header>
        <Header.Button onClick={sortByName}>Sort by name</Header.Button>
        <Header.Button onClick={sortByStock}>Sort by stock</Header.Button>
        <Header.Button onClick={ToggleShowForm}>Add product</Header.Button>
      </Header>
      <CardContainer cards={items} setItems={setItems} />
      {showForm ? (
        <FormContainer
          ToggleShowForm={ToggleShowForm}
          items={items}
          setItems={setItems}
        />
      ) : null}
    </>
  );
}
