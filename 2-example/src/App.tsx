import React from "react";
// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import ItemUser from './features/ItemUser';
import ItemUserClass from "./features/ItemUserClass";
import ItemClothClass from "./features/ItemClothClass";
// import img from './images/huong-dan-tao-facebook-avatar.jpg'

function App() {
  const listUser = [
    {
      name: "name 1",
      age: 18,
    },
    {
      name: "name 2",
      age: 18,
    },
    {
      name: "name 3",
      age: 18,
    },
  ];
  const listCloth = [
    {
      name: "Clothing & Apparel",
      type: "Accessories",
    },
  ];
  return (
    <div>
      <div className="w-50 m-auto text-center">
        {listUser?.map((user, index) => (
          <ItemUserClass key={index} userProps={user} />
        ))}
      </div>
      
      <div className="w-50 m-auto text-center">
        {listCloth?.map((user, index) => (
          <ItemClothClass key={index} clothProps={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
