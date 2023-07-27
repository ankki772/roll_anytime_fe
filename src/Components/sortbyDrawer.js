import React from "react";
let dpath="M4 6.136h4.637v2.272H4.472l-.351 1.135h4.45a2.855 2.855 0 01-.772 1.44c-.51.514-1.177.81-1.888.836H5.91l-1.272-.002c-.25-.001-.377.305-.2.484l6.276 6.338 1.586-.002-5.706-5.76a3.92 3.92 0 002-1.092 3.984 3.984 0 001.119-2.242h2.311l.352-1.135H9.76V6.136h3.267V5H4v1.136zm12.626.733l1.249 1.265h-1.25V6.869zm-1.09-1.333v8.35c0 .3.232.557.548.557a.534.534 0 00.542-.547V9.184h2.414a.586.586 0 00.537-.143.53.53 0 00-.001-.773L16.48 5.161a.585.585 0 00-.62-.12.508.508 0 00-.326.495z"
let s1 = <svg width="24" height="24" viewBox="0 0 24 24" className="SortModalIcon"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" opacity="0.05"></path><path d={dpath} fill="#282C3F"></path></g></svg>
export default function SortbyDrawer() {
  return (
    <>
      <div className="searchSort">
        <div className="box searchSort">
          <div className="popup-container">
            <div className="overlay active">
              <div className="drawer bottom  active">
                <div className="popup-content bottom">
                     <ul className="list">
                     <li className="sortby">SORT BY</li>
                     <span>
                        <li className="selected">
                            <div className="ripple-container ">
                                  <button className="default">
                                  <svg width="24" height="24" viewBox="0 0 24 24" class="SortModalIcon"><defs><path id="a" d="M0 0h12.5v16H0z"></path></defs><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" opacity="0.05"></path><g transform="translate(6 4)"><mask id="b" fill="#fff" ><use xlinkHref="#a"></use></mask><path fill="#282C3F" d="M11.425 10.52c-.096.743-.417 1.506-.93 2.208-.426.58-.978 1.11-1.517 1.452a6.01 6.01 0 01-.162.099c.047-.114.088-.233.124-.356.227-.775.199-1.534-.088-2.39-.255-.764-.714-1.607-1.49-2.734l-.55-.8-.361.906c-.004.01-.437 1.018-1.922 1.9-.93.552-1.22 1.28-1.302 1.795-.091.582.035 1.149.245 1.617a5.157 5.157 0 01-.453-.286 4.522 4.522 0 01-1.385-1.546c-.391-.725-.59-1.583-.59-2.551 0-1.216.312-2.231.926-3.018.12-.154.24-.284.354-.392.05.19.113.399.193.61.407 1.079 1.05 1.734 1.859 1.896a.563.563 0 00.538-.181c.196-.224.166-.487.124-.852-.058-.513-.156-1.37.16-2.441.321-1.09.998-2.132 2.017-3.106.041.157.094.329.162.517.46 1.265 1.38 2.655 2.74 4.129 1.026 1.113 1.466 2.298 1.308 3.524m-3.486 3.102c-.141.484-.395.84-.755 1.057-.35.211-.732.259-.99.259-.207 0-.378-.033-.469-.06-.537-.163-.767-.341-.982-.589-.295-.339-.573-.96-.484-1.523.066-.418.334-.77.797-1.045.94-.559 1.536-1.174 1.893-1.645.45.711.746 1.294.915 1.8.216.646.24 1.185.075 1.746m4.306-5.128c-.26-.774-.72-1.522-1.367-2.225-.836-.907-1.946-2.278-2.478-3.654C8.107 1.856 8.383 0 8.383 0l-1.1.89C5.69 2.176 4.652 3.61 4.197 5.15a6.555 6.555 0 00-.248 2.331 2.88 2.88 0 01-.45-.809 5.573 5.573 0 01-.304-1.22l-.078-.742-.664.318c-.066.032-.662.332-1.258 1.073-.35.435-.628.935-.827 1.486A6.605 6.605 0 000 9.833c0 2.688 1.317 4.184 2.422 4.967a6.81 6.81 0 001.957.943A5.841 5.841 0 005.97 16a10.157 10.157 0 00.224 0 3.2 3.2 0 00.237-.008c1.258-.05 2.156-.318 3.098-.915a6.859 6.859 0 001.803-1.715c.62-.847 1.01-1.782 1.129-2.704a4.811 4.811 0 00-.215-2.164" mask="url(#b)"></path></g></g></svg>
                                   <span className="sortByValues">Popularity</span>
                                  </button>
                            </div>
                        </li>
                        <li className="">
                            <div className="ripple-container ">
                                  <button className="default">
                                  <svg width="24" height="24" viewBox="0 0 24 24" class="SortModalIcon"><defs><path id="a" d="M0 0h14v16H0z"></path></defs><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" opacity="0.05"></path><g transform="translate(5 4)"><mask id="b" fill="#fff"><use xlinkHref="#a"></use></mask><path fill="#282C3F" d="M9.091 10.81a.695.695 0 00-.71.412L7 14.364l-1.38-3.142a.695.695 0 00-.711-.411l-3.403.371 2.022-2.77a.695.695 0 000-.823L1.506 4.818l3.403.371a.695.695 0 00.71-.412L7 1.637l1.382 3.142a.695.695 0 00.71.411l3.403-.371-2.022 2.77a.695.695 0 000 .823l2.022 2.771-3.403-.371zM11.501 8l2.364-3.24a.694.694 0 00.06-.727.69.69 0 00-.695-.377l-3.98.434L7.636.416a.694.694 0 00-1.271 0L4.75 4.09.77 3.656a.69.69 0 00-.694.378.695.695 0 00.059.726L2.499 8 .135 11.24a.695.695 0 00-.06.727.69.69 0 00.695.377l3.98-.434 1.615 3.674a.694.694 0 001.27 0L9.25 11.91l3.98.434a.69.69 0 00.694-.378.694.694 0 00-.059-.726L11.501 8z" mask="url(#b)"></path></g></g></svg>
                                   <span className="sortByValues">Latest</span>
                                  </button>
                            </div>
                        </li>
                        <li className="">
                            <div className="ripple-container ">
                                  <button className="default">
                                  <img alt="" width="24px" height="24px" className="SortModalIcon" src="https://constant.myntassets.com/pwa/assets/img/ed2090c9-27f0-4eb0-ad1b-7bb58b955d4e1571633941585-offers-2x.png"/>                                   <span className="sortByValues">Popularity</span>
                                  </button>
                            </div>
                        </li>
                        <li className="">
                            <div className="ripple-container ">
                                  <button className="default">
                                  <svg width="24" height="24" viewBox="0 0 24 24" className="SortModalIcon"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" opacity="0.05"></path><path d="M4 6.215h4.962v2.43H4.505L4.13 9.858h4.764a3.05 3.05 0 01-.827 1.539 2.99 2.99 0 01-2.022.895l-1.361-.003a.304.304 0 00-.214.519l6.717 6.779 1.697-.004-6.107-6.16a4.193 4.193 0 002.14-1.167 4.256 4.256 0 001.198-2.398h2.474l.376-1.215h-2.799v-2.43h3.496V5H4v1.215zm12.389 10.028h1.337l-1.337 1.354v-1.354zm-.818 3.309c.23.09.488.04.663-.127l3.312-3.326a.567.567 0 000-.828.627.627 0 00-.574-.152H16.39v-5.043a.571.571 0 00-.58-.585.587.587 0 00-.587.597v8.935c0 .237.12.439.35.529z" fill="#282C3F"></path></g></svg>
                                   <span className="sortByValues"> Price: High to Low</span>
                                  </button>
                            </div>
                        </li>
                        <li className="">
                            <div className="ripple-container ">
                                  <button className="default">
                                   {s1}
                                   <span className="sortByValues">Popularity</span>
                                  </button>
                            </div>
                        </li>
                        <li className="">
                            <div className="ripple-container ">
                                  <button className="default">
                                  <svg width="24" height="24" viewBox="0 0 24 24" class="SortModalIcon"><defs><path id="a" d="M0 0h12.5v16H0z"></path></defs><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z" opacity="0.05"></path><g transform="translate(6 4)"><mask id="b" fill="#fff" ><use xlinkHref="#a"></use></mask><path fill="#282C3F" d="M11.425 10.52c-.096.743-.417 1.506-.93 2.208-.426.58-.978 1.11-1.517 1.452a6.01 6.01 0 01-.162.099c.047-.114.088-.233.124-.356.227-.775.199-1.534-.088-2.39-.255-.764-.714-1.607-1.49-2.734l-.55-.8-.361.906c-.004.01-.437 1.018-1.922 1.9-.93.552-1.22 1.28-1.302 1.795-.091.582.035 1.149.245 1.617a5.157 5.157 0 01-.453-.286 4.522 4.522 0 01-1.385-1.546c-.391-.725-.59-1.583-.59-2.551 0-1.216.312-2.231.926-3.018.12-.154.24-.284.354-.392.05.19.113.399.193.61.407 1.079 1.05 1.734 1.859 1.896a.563.563 0 00.538-.181c.196-.224.166-.487.124-.852-.058-.513-.156-1.37.16-2.441.321-1.09.998-2.132 2.017-3.106.041.157.094.329.162.517.46 1.265 1.38 2.655 2.74 4.129 1.026 1.113 1.466 2.298 1.308 3.524m-3.486 3.102c-.141.484-.395.84-.755 1.057-.35.211-.732.259-.99.259-.207 0-.378-.033-.469-.06-.537-.163-.767-.341-.982-.589-.295-.339-.573-.96-.484-1.523.066-.418.334-.77.797-1.045.94-.559 1.536-1.174 1.893-1.645.45.711.746 1.294.915 1.8.216.646.24 1.185.075 1.746m4.306-5.128c-.26-.774-.72-1.522-1.367-2.225-.836-.907-1.946-2.278-2.478-3.654C8.107 1.856 8.383 0 8.383 0l-1.1.89C5.69 2.176 4.652 3.61 4.197 5.15a6.555 6.555 0 00-.248 2.331 2.88 2.88 0 01-.45-.809 5.573 5.573 0 01-.304-1.22l-.078-.742-.664.318c-.066.032-.662.332-1.258 1.073-.35.435-.628.935-.827 1.486A6.605 6.605 0 000 9.833c0 2.688 1.317 4.184 2.422 4.967a6.81 6.81 0 001.957.943A5.841 5.841 0 005.97 16a10.157 10.157 0 00.224 0 3.2 3.2 0 00.237-.008c1.258-.05 2.156-.318 3.098-.915a6.859 6.859 0 001.803-1.715c.62-.847 1.01-1.782 1.129-2.704a4.811 4.811 0 00-.215-2.164" mask="url(#b)"></path></g></g></svg>
                                   <span className="sortByValues">Popularity</span>
                                  </button>
                            </div>
                        </li>
                     </span>
                     </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .popup-container .overlay.active {
            display: block;
            opacity: 1;
            visibility: visible;
          }
          .popup-container .overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center;
            background-color: rgba(0, 0, 0, 0.5);
            visibility: hidden;
            z-index: 200;
            opacity: 0;
            -webkit-transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
            transition: opacity 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          }
          .popup-container .drawer.active {
            -webkit-transform: none;
            transform: none;
          }

          .popup-container .bottom {
            bottom: 0;
          }
          .popup-container .drawer {
            position: fixed;
            top: auto;
            left: 0;
            right: 0;
            bottom: 0;
            height: auto;
            max-height: 100%;
            -webkit-transform: translateY(100%);
            transform: translateY(100%);
            -webkit-transition: -webkit-transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
            transition: -webkit-transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
            transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
            transition: transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms,
              -webkit-transform 225ms cubic-bezier(0, 0, 0.2, 1) 0ms;
          }
          .popup-container .bottom {
            bottom: 0;
        }
        
        .popup-container .popup-content {
            background-color: #fff;
            overflow-y: auto;
            scroll-behavior: smooth;
        }
        .searchSort .list {
            list-style: none;
            margin: 0;
            padding: 0;
            background: #fff;
            z-index: 10;
        }
        
        .searchResults .list {
            list-style: none;
            padding: 0;
            overflow: hidden;
            clear: both;
        }
        .searchSort .list .sortby {
            border-bottom: 1px solid #eaeaec;
            font-weight: 700;
            font-size: 14px;
            color: #3e4152;
            padding-left: 10px;
            margin: 0 10px;
            padding-top: 12px;
            padding-bottom: 8px;
        }
        
        .searchSort ul li {
            margin: 15px auto;
        }
        .searchSort .list .selected {
            border-left: 2px solid #ff3e6c;
        }
        .ripple-container {
            position: relative;
            overflow: hidden;
        }
        .searchSort .list .selected button {
            color: #ff517b;
            font-weight: 700;
        }
        
        .searchSort .list li button {
            width: 100%;
            display: inline-block;
            border: none;
            text-transform: none;
            text-align: left;
            color: #3e4152;
            background: #fff;
        }
        .searchPage button {
            text-transform: uppercase;
            width: 100%;
            background-color: transparent;
        }
        .searchSort .list .SortModalIcon {
            width: 24px;
            height: 24px;
            float: left;
            position: relative;
            top: 5px;
            right: -17px;
        }
        
        svg:not(:root) {
            overflow: hidden;
        }
        .searchSort .list li .sortByValues {
            padding: 7.5px 0;
            position: absolute;
            width: 82%;
            top: 0;
            font-size: 14px;
            left: 65px;
        }
        `}
      </style>
    </>
  );
}
