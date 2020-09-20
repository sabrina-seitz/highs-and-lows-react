import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <div className="input-group mb-3">
          <input
            className="form-control"
            type="search"
            placeholder="Another city"
            autoComplete="off"
            autoFocus="on"
          />
          <div className="input-group-append">
            <button className="btn form-button" type="submit" id="button">
              <i className="fas fa-search search-icon"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
