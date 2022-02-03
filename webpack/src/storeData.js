import showData from "./showData";

function storeData(data) {
    let data_cred = JSON.parse(localStorage.getItem('webpack_assignment'));
    // console.log(data_cred);

    if(data_cred === null) {
        let data_cred = [];

        localStorage.setItem('webpack_assignment', JSON.stringify(data_cred));
    }
    data_cred.push(data);
    localStorage.setItem('webpack_assignment', JSON.stringify(data_cred));
    console.log(data_cred);

    window.alert("Notes Added");
    showData(data_cred);
}

export default storeData;