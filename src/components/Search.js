import React, {useState} from "react";

function Search({searchFor}) {
  //const [search, setSearch] = useState("")

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => searchFor(e.target.value)}
      />
    </div>
  );
}

export default Search;
