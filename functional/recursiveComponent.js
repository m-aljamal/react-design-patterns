// when working with nested data we usaly use recursive

import React from "react";

const nestedObject = {
  a: 1,
  b: {
    b1: 4,
    b2: {
      b23: "Hello",
    },
    b3: {
      b31: {
        message: "hi",
      },
      b32: {
        message: "Hi1",
      },
    },
  },
  c: {
    c1: 2,
    c2: 3,
  },
};

const isObject = (x) => typeof x === "object" && x !== null;
const RecursiveComponent = ({ data }) => {
  if (!isObject(data)) {
    return <li>{data}</li>;
  }
  const pairs = Object.entries(data); // return arry of key and values
  return (
    <>
      {pairs.map(([key, value]) => (
        <li>
          {key}:
          <ul>
            <RecursiveComponent data={value} />
          </ul>
        </li>
      ))}
    </>
  );
};

export default recursiveComponent;
