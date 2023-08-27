import React, { useContext } from "react";
import { myContext } from "../../contextApi/context";
import "./HorizontalScroll.css";

export const HorizontalScroll = () => {
  const { bodyParts, searchedItem, setSearchedItem } = useContext(myContext);

  return (
    <div className="horizontal-scroll">
      {bodyParts?.map((ele, idx) => {
        return (
          <div
            className={`${"bodyparts-card"} ${
              searchedItem === ele && "active"
            }`}
            onClick={() => {
              setSearchedItem(ele);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-adobe"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ff2825"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12.893 4.514l7.977 14a.993 .993 0 0 1 -.394 1.365a1.04 1.04 0 0 1 -.5 .127h-3.476l-4.5 -8l-2.5 4h1.5l2 4h-8.977c-.565 0 -1.023 -.45 -1.023 -1c0 -.171 .045 -.34 .13 -.49l7.977 -13.993a1.034 1.034 0 0 1 1.786 0z" />
            </svg>
            <h3>{ele}</h3>
          </div>
        );
      })}
    </div>
  );
};