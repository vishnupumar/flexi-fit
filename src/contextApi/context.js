import { createContext, useEffect, useState } from "react";

export const myContext = createContext();

let flag = false;

export const ContextProvider = ({ children }) => {
  const [exerciseData, setExerciseData] = useState([]);
  const [bodyParts, setBodyParts] = useState([]);
  const [searchedData, setSearchedData] = useState([]);
  const [searchedItem, setSearchedItem] = useState("all");
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    if (flag) {
      if (searchedItem === "all") {
        setSearchedData(exerciseData);
        setPageNum(1);
      } else {
        setSearchedData(
          exerciseData.filter((ele) => {
            return (
              ele.bodyPart === searchedItem ||
              ele.name.includes(searchedItem) ||
              ele.target.includes(searchedItem) ||
              ele.equipment.includes(searchedItem)
            );
          })
        );
        setPageNum(1);
      }
    } else {
      flag = true;
    }
  }, [searchedItem]);

  return (
    <myContext.Provider
      value={{
        exerciseData,
        bodyParts,
        setExerciseData,
        setBodyParts,
        searchedData,
        setSearchedData,
        setSearchedItem,
        searchedItem,
        pageNum,
        setPageNum,
      }}
    >
      {children}
    </myContext.Provider>
  );
};
