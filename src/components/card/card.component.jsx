import React from "react";

import "./card.styles.scss";

export const Card = ({ monster }) => {
  const { name, id, email } = monster;
  return (
    <div className="card-container" key={id}>
      <img
        alt="monster"
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};
