import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const r = {
  list: [
    { rank: 1, name: "Yatch", points: 42, age: 24 },
    { rank: 3, name: "Maria", points: 56, age: 27 },
    { rank: 2, name: "Puzo", points: 109, age: 21 },
    { rank: 5, name: "Jabra", points: 34, age: 4 },
    { rank: 10, name: "Laptop", points: 567, age: 42 },
    { rank: 13, name: "Macbook", points: 1876, age: 45 },
    { rank: 12, name: "Pen", points: 522, age: 32 },
    { rank: 15, name: "Phone", points: 743, age: 29 },
    { rank: 11, name: "Keyboard", points: 4929, age: 30 },
    { rank: 7, name: "Mouse", points: 432, age: 34 },
    { rank: 6, name: "Notebook", points: 578, age: 65 },
    { rank: 21, name: "Charger", points: 478, age: 25 },
    { rank: 25, name: "Wire", points: 2984, age: 18 },
    { rank: 8, name: "Bottle", points: 3792, age: 16 },
  ],
};

const Leaderboard = () => {
  console.log("render");
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  let sortedResponses = r.list;
  const property = pathname.split("/")[1];
  console.log(property);
  if (property) {
    // didn't use a[property] - b[property] since this will not work for Strings, can't subtract strings
    sortedResponses = sortedResponses.sort((a, b) => a[property] > b[property] ? 1 : a[property] < b[property] ? -1 : 0);
    console.log(sortedResponses);
  }

  const [responses, setReponses] = useState(sortedResponses);

  //   useEffect(() => {
  //     // setPath(pathname);
  //     console.log("useEffect Called");
  //     const property = pathname.split("/")[1];
  //     console.log(property);
  //     if (property) {
  //       console.log("sorted Called");
  //       let tempResponseList = r.list.sort((a, b) => a[property] - b[property]);
  //       console.log(tempResponseList)
  //       setReponses(tempResponseList)
  //     //   setReponses((prev) => {
  //     //     console.log(prev);
  //     //     return prev.sort((a, b) => a[property] - b[property]);
  //     //   });
  //     }
  //   });

  const navigationHandler = (btn) => {
    navigate(btn);
  };
  return (
    <div>
      <div>
        <button type="button" onClick={() => navigationHandler("rank")}>
          Rank
        </button>
        <button type="button" onClick={() => navigationHandler("name")}>
          Name
        </button>
        <button type="button" onClick={() => navigationHandler("points")}>
          Points
        </button>
        <button type="button" onClick={() => navigationHandler("age")}>
          Age
        </button>
      </div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Points</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody data-testid="app-tbody">
            {responses.map((response) => (
              <tr key={response.rank}>
                <td data-testid="rank-0">{response.rank}</td>
                <td data-testid="name-0">{response.name}</td>
                <td data-testid="points-0">{response.points}</td>
                <td data-testid="age-0">{response.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
