import React from "react";
// import Searchfilter from "../Components/bottomstrip";
import Prdlist from "../Components/prdlist";
// import SortbyDrawer from "../Components/sortbyDrawer";
export default function MproductListing() {
  return (
    <>
      <div className="searchPage">
        <div id="page-content">
          <div className="page searchResults">
            <Prdlist />
          </div>
        </div>

      </div>
      <style jsx>
        {`
          #page-content {
            min-height: calc(100vh - 50px);
          }
          .page {
            position: relative;
            top: 130px;
            margin-bottom: 130px;
          }
        `}
      </style>
    </>
  );
}
