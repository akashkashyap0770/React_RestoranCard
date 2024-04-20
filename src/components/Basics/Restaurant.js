import React, { useState } from 'react'
import "./style.css";
import Menu from './menuApi.js';
import MenuCard from './MenuCard.js';
import Navbar from './Navbar.js';

// Only Category List Code:-
const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];
console.log(uniqueList);

const Restaurant = () => {

  // State Management:-
  // MenuCard Code:-
  const [menuCard, setMenuCard] = useState(Menu);
  // console.log(menuData);

  // In Navbar uniqueList Stored in StateManagement:-
  const [menuList, setMenuList] = React.useState(uniqueList);

  // Navbar FilterItem Code:-
  const filterItem = (category) => {

    // Navbar Button All Card Code:- 
    if (category === "All") {
      setMenuCard(Menu);
      return;
    }

    // Navbar Button Code:-
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuCard(updatedList);
  }

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />

      {/* <MenuCard attribute={PropDrilling} />*/}
      <MenuCard menuCard={menuCard} />
    </>
  )
}

export default Restaurant;
