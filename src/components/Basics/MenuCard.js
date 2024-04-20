import React from "react";

function MenuCard({ menuCard }) {
  // console.log(menuData);

  return (
    <>
      {menuCard.map((curElem) => {

        // Object Destructuring:-
        const { id, name, category, image, description } = curElem;

        return (
          <>
            <div className="card-container" key={id}>
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle">{id}</span>
                  <span className="card-company">Swiggy | Zomato</span>
                  <span className="card-author subtle">{category}</span>
                  <h2 className="card-title">{name}</h2>
                  <span className="card-description subtle">{description}</span>
                  <div className="card-read">Read</div>
                </div>
                <img src={image} alt="images" className="card-media" />

                <span className="card-tag subtle">Order Now</span>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}

export default MenuCard;
