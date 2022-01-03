import React from "react";
import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      {!pets.length ? (
        <h2>No Pet Found</h2>
      ) : (
        pets.map((pet) => {
          const { animal, id, name, breed, images, city, state } = pet;
          return (
            <Pet
              animal={animal}
              key={id}
              name={name}
              breed={breed}
              images={images}
              location={`${city}, ${state}`}
              id={id}
            />
          );
        })
      )}
    </div>
  );
};
export default Results;
