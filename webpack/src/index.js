// comment
import getData from "./getData.js";
// import showData from "./showData.js";

import "./index.css"
import showData from "./showData.js";

import image from "./note_logo.png";
// import React from "react"
// import ReactDOM from "react-dom"

// DOM
let logo = document.getElementById("logo");
let img = document.createElement("img");
img.src = image;
img.classList.add("note_logo");
logo.append(img);

let form = document.getElementById("form").addEventListener("submit", getData); 


window.onload = () => {
    // console.log("reload")
    let data_cred = JSON.parse(localStorage.getItem("webpack_assignment"));

    if(data_cred === null) {
        // alert("You have not any note yet..Please make one.");
    }else{
        showData(data_cred);
    }
}













//React
// Method 1
// const i = react.createElement("i", {
//     id: "itext",
//     className: "italic_t"
// }, "Italic text")

// const h1 = react.createElement("h1", {
//     id: "abcd",
//     className: "colorForH1"
// }, ["Hello Webpack React ", i])

// ReactDom.render(h1 //what need to render or append
//     , document.getElementById("root") //where ned to render or append
// );

// Method 2 (best)
// ReactDOM.render( <h1> Hello 
//     <i>Hello</i>
// </h1>,
//     document.getElementById("root")
// );
