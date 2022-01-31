let data = [];
let id = 1;
let url = "http://localhost:3000/posts";
// let url2 = "http://localhost:3000/comments"



let append_data = (item) => {
    console.log(item);
    let div = document.createElement("div");
    let h2 = document.createElement("h2");
    h2.innerText = `Book: ${item.title}`;
    let h3 = document.createElement("h3");
    h3.innerText = `Author: ${item.author}`;

    let data_div = document.getElementById("data_div");
    div.append(h2, h3);
    console.log(div, data_div);
    data_div.append(div);


}

let send_details = (event) => {
    event.preventDefault();
    let book_name = document.getElementById("books").value;
    let author = document.getElementById("author").value;

    // console.log(book_name, author)

    send = async() => {
        // const location = window.location.hostname;
        const settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                // id: id++,
                title: book_name,
                author: author
            })
        };
        const fetchResponse = await fetch(url, settings);
        if (!fetchResponse.ok) {
            const message1 = `An error has occured: ${response.status}`;
            throw new Error(message1);
        }
        const data = await fetchResponse.json();
        // return data;
        // console.log(data);

    }
    send().catch(error => {
        error.message1;
    })

    //Get
    async function get() {
        const response = await fetch(url);
        if (!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }
        const data = await response.json();
        // return data;
        console.log(data)
        data.forEach((item) => {
            append_data(item);
        })
    }
    get().catch(error => {
        error.message; // 'An error has occurred: 404'
    });


    //Getting Comments
    // async function getComments() {
    //     const responseC = await fetch(url2);
    //     if (!responseC.ok) {
    //         const messageC = `An error has occured: ${response.status}`;
    //         throw new Error(messageC);
    //     }
    //     const dataC = await responseC.json();
    //     // return data;
    //     console.log(dataC)
    //     dataC.forEach((item) => {
    //         append_data(item);
    //     })
    // }
    // getComments().catch(error => {
    //     error.message; // 'An error has occurred: 404'
    // });

}

let form = document.getElementById("form").addEventListener("submit", send_details);