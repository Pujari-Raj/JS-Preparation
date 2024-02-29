import React, { useState } from "react";

const RemoveItem = () => {
  const [items, setitems] = useState(["item1", "item2", "item3", "item4","item5", "item6", "item7", "item8"]);

  //
  const removeItem = (indexToRemove) => {
    console.log(indexToRemove);
    console.log("items-before", items);
    const updatedItems = items.filter((item, index) => index !== indexToRemove);
    setitems(updatedItems);
  };

  // use useEffect here
//   console.log("items-after", items);
  return (
    <>
      <div className="">
        <h1>Items List</h1>
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}
              <button
                onClick={() => removeItem(index)}
                style={{ border: "1px solid red" }}
              >
                Remove the item
              </button>
            </li>
          ))}
        </ul>
        {/* Displaying items and providing a button to remove each */}
      </div>
    </>
  );
};

export default RemoveItem;
