// import showData from "./showData.js"
import storeData from "./storeData.js";

export default function getData(event) {
    event.preventDefault();
    let text = document.getElementById("notes").value;
    // console.log(text);
    if(text.length > 0) {
        storeData(text);
        // showData(text);
    }else{
        alert("Notes can not be empty");
    }
}