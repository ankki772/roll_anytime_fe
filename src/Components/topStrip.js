import React, { useState } from 'react'

export const TopStrip = () => {
    const [first, setfirst] = useState('')
    const handleChange=(e)=>{
     console.log("============",e.target)
     setfirst(e.target.value)
    //  document.querySelector('.sort-list').style.display="none"
    }
    console.log("=>>>>>>",first)
  return (
    <>
    <div className='row-base'>
        <section className='horizontal-filters-base'>
            <div className='horizontal-filters-sortContainer'>
                <div>
                    <div> 
                        <div className='sort-sortBy'>
                        Sort by : 
                        <span>Recommended</span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="15" width="30" viewBox="0 0 512 512" fill='#c5cad3'> <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                        </div>
                        <ul className='sort-list'>
                            <li>
                                <label className='sort-label'>
                                    <input type='radio' value={"recommndeded"} onChange={handleChange}/>
                                    {"recommended"}
                                </label>
                            </li>
                            <li>
                                <label className='sort-label'>
                                    <input type='radio' value={"recommndeded2"} onChange={handleChange}/>
                                    {"recommended"}
                                </label>
                            </li>
                            <li>
                                <label className='sort-label'>
                                    <input type='radio' value={"recommndeded3"} onChange={handleChange}/>
                                    {"recommended"}
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='horizontal-filters-sortContainer'>
                <div>
                    <div> 
                        <div className='sort-sortBy'>
                        Filter By : 
                        <span>Recommended</span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="15" width="30" viewBox="0 0 512 512" fill='#c5cad3'> <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
    
    <style jsx>
        {`
.row-base {
    display: flexbox;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -ms-flex-direction: row;
    flex-direction: row;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -ms-flex-line-pack: stretch;
    align-content: stretch;
}
.horizontal-filters-base {
    width: 100%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    border-bottom: 1px solid #eaeaec;
    padding-bottom: 15px;
    padding-top: 23px;
}
.horizontal-filters-sortContainer {
    display: inline-block;
    float: right;
    margin-right: 30px;
    margin-bottom: 0;
    margin-top: -7px;
    position: relative;
    top: 5px;
}
.sort-sortBy {
    padding: 9px 14px;
    font-size: 14px;
    color: #282c3f;
    cursor: pointer;
    position: relative;
    width: 255px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-radius: 2px;
    background-color: #fff;
    border: 1px solid #d4d5d9;
}
.sort-sortBy span {
    text-transform: capitalize;
    font-weight: 700;
    color: #282c3f;
}
.sort-sortBy svg{
    position:absolute;
    right:5px
}

.sort-list {
    width: 255px;
    background-color: #fff;
    position: absolute;
    top: 33px;
    left: 0;
    margin: 0;
    padding: 16px 0;
    z-index: 2;
    display: none;
    border: 1px solid #d4d5d9;
    border-top: none;
    -webkit-box-shadow: 0 8px 10px 0 rgba(0,0,0,.08);
    box-shadow: 0 8px 10px 0 rgba(0,0,0,.08);
}
.sort-list label{
    display: block;
    font-size: 14px;
    color: #282c3f;
    cursor: pointer;
    padding: 10px 20px;
}
ul{
    list-style:none
}
.sort-label input {
    visibility: hidden;
    display: none;
}
.horizontal-filters-sortContainer:hover .sort-list{
    display:block
}
.sort-list li:hover{
    background-color: #f4f5f9
}

        `}
    </style>
    </>
  )
}
