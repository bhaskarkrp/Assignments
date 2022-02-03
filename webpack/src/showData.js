let order_list = document.getElementById('order_list');

export default function showData(data) {
    order_list.innerHTML = null;
    data.forEach((note) => {
        let li = document.createElement('li');
        li.classList.add("list_item");
        li.innerText = note;

    
        order_list.append(li);
    })
}