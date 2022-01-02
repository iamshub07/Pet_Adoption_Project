import React from "react";
import { useState } from "react";

const SearchParams = () => {
  //const locationArr= useState("Seattle");
  //const location=locationArr[0]
  //const setLocation=locationArr[1]
  //Above code can also be written as
  const [location, setLocation] = useState("Seattle");

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location
          <input
            id="location"
            onChange={(event) => setLocation(event.target.value)}
            value={location}
            placeholder="Location"
          />
        </label>
      </form>
    </div>
  );
};

export default SearchParams;
