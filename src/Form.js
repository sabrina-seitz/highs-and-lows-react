import React from "react";
import LocateButton from "./LocateButton";
import Search from "./Search";

export default function Form() {
  return (
    <div className="Form">
      <div className="row align-items-baseline">
        <div className="col-2">
          <LocateButton />
        </div>
        <div className="col-10">
          <Search />
        </div>
      </div>
    </div>
  );
}
