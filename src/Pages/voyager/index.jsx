import React from "react";
import BasicRating from "../../Components/Star";
import './index.css';


function Voyager() {
  return (
    <div className="main">
      <h1>Voyage terminé</h1>

      <BasicRating />
      <p>
        Ne vous inquiétez pas,
        <br />
        vos commentaires sont anonymes
      </p>
    </div>
  );
}

export default Voyager;
