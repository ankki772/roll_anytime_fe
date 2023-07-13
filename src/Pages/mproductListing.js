import React from "react";
import Searchfilter from "../Components/bottomstrip";
export default function MproductListing() {
  return (
    <>
    <div className="searchPage">
      <div id="page-content">
        <div className="page searchResults">
                <Searchfilter/>
        </div>
      </div>
    </div>
      <style jsx>
        {`
          #page-content {
            min-height: calc(100vh - 50px);
          }
        `}
      </style>
    </>
  );
}
