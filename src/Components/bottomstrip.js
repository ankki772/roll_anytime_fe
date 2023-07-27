import React from "react";

export default function BottomStrip() {
  return (
    <>
      <div className="grid sticky btmstrip">
        <div className="sort_1">
          <div className="sort_1-container ">
            <button className="btn default    btn primary flat results-btn">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="result-icon"
              >
                <g fill="none" fill-rule="evenodd">
                  <path d="M0 0h24v24H0z" opacity="0.05"></path>
                  <path
                    fill="#282C3F"
                    d="M7.445 7.48V5.672L5.665 7.48h1.78zm1.09-4.42c.304.12.465.39.465.706v16.437a.784.784 0 01-.783.797.762.762 0 01-.772-.781V8.982H4.003a.832.832 0 01-.765-.204.759.759 0 01.002-1.105L7.652 3.23a.832.832 0 01.882-.17zm8.02 15.269l1.78-1.81h-1.78v1.81zm4.207-3.107a.76.76 0 01-.002 1.106l-4.412 4.442a.832.832 0 01-.882.17c-.305-.12-.466-.39-.466-.706V3.797c0-.432.332-.797.783-.797.45 0 .772.35.772.781v11.237h3.442a.833.833 0 01.765.204z"
                  ></path>
                </g>
              </svg>
              SORT
            </button>
            <div className="btmr"></div>
          </div>
        </div>
        <div className="buttonDivider"></div>
        <div className="sort_1">
          <div className="sort_1-container ">
            <button className="btn default    btn primary flat results-btn">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="result-icon"
              >
                <g fill="none" fill-rule="evenodd">
                  <path d="M0 0h24v24H0z" opacity="0.05"></path>
                  <path
                    fill="#282C3F"
                    d="M3.749 7.508a.75.75 0 010-1.5h3.138a2.247 2.247 0 014.243 0h9.121a.75.75 0 010 1.5h-9.126a2.248 2.248 0 01-4.232 0H3.749zm13.373 9h3.129a.75.75 0 010 1.5h-3.135a2.247 2.247 0 01-4.231 0H3.749a.75.75 0 010-1.5h9.13a2.248 2.248 0 014.243 0z"
                  ></path>
                </g>
              </svg>
              FILTER
            </button>
            <div className="btmr"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .searchResults .sticky {
          position: fixed;
          bottom: 0;
          background-color: #fff;
          width: 100%;
          border-top: 1px solid #eaeaec;
          z-index: 10;
          margin: 0;
          text-align: center;
        }
        .searchResults .btmstrip {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: space-evenly;
          -ms-flex-pack: space-evenly;
          justify-content: space-evenly;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
        }
        .searchResults .sticky .sort_1 {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          width: 100%;
          -ms-flex-pack: distribute;
          justify-content: space-around;
        }
        .sort_1-container {
          position: relative;
          overflow: hidden;
        }
        .searchResults .sticky .results-btn {
          width: 100%;
          height: 50px;
          padding: 14px 0 14px 28px;
          font-size: 14px;
          letter-spacing: 0.9px;
          color: #535766;
        }
        .btn.flat {
          border-color: transparent;
          background-color: #fff;
        }
        .searchPage button {
          text-transform: uppercase;
        }
        .btn {
          display: inline-block;
          margin-bottom: 0;
          font-weight: 700;
          text-align: center;
          vertical-align: middle;
          touch-action: manipulation;
          cursor: pointer;
          background-image: none;
          border: 1px solid transparent;
          white-space: nowrap;
          outline: 0;
          padding: 10px 12px;
          font-size: 13px;
          line-height: 1.42857143;
          border-radius: 4px;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
        .searchResults .sticky .result-icon {
          top: 16px;
          left: 10%;
          width: 16px;
          height: 16px;
          position: absolute;
        }
        .sort_1-container .btmr {
          position: absolute;
          top: 0;
          left: 0;
        }
        .searchResults .sticky .buttonDivider {
          border-left: 1px solid #000 !important;
          width: 1px;
          height: 22px;
          z-index: 1;
        }
        .grid:after {
          content: "";
          display: table;
          clear: both;
        }
      `}</style>
    </>
  );
}
