import React from "react";
import { Select } from "./Filter.styles";

function Filter({ dispatch, ACTIONS }) {
  function handleChange(e) {
    dispatch({
      type: ACTIONS.SET_REGION,
      payload: {
        region: e.target.value,
      },
    });
  }

  return (
    <div>
      <Select
        onChange={handleChange}
        aria-label="Filter By Region"
        defaultValue={""}
      >
        <option value="" disabled hidden>
          Filter by region
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </Select>
    </div>
  );
}

export default Filter;
