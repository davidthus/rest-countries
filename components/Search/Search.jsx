import React from "react";
import { Container, Input } from "./Search.styles";

function Search({ dispatch, ACTIONS }) {
  function handleChange(e) {
    dispatch({
      type: ACTIONS.SET_SEARCH,
      payload: {
        term: e.target.value,
      },
    });
  }

  return (
    <Input
      type="text"
      placeholder="Search for a country..."
      onChange={handleChange}
    />
  );
}

export default Search;
