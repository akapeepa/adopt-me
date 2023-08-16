import { useState } from "react";

function SearchParams() {
  const [location, setLocation] = useState("");
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
            Location
            <input type="text" onChange={(e)=>setLocation(e.target.value)} id="location" value={location} placeholder="Location" />
        </label>
      </form>
    </div>
  );
}
export default SearchParams;
