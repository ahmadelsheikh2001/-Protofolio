import React from "react";
import { useNavigate } from "react-router-dom";

const SearchResult = ({ result, toggleInput }) => {
  const navigate = useNavigate();

  return (
    <div className="search_result">
      <p
        style={{ cursor: "pointer", fontSize: ".7rem", padding: "10px 0" }}
        onClick={() => {
          navigate(result.route);
          toggleInput();
        }}
      >
        {result?.title} {`(${result.type})`}{" "}
      </p>
    </div>
  );
};

export default SearchResult;
