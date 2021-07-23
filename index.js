const submitBtn = document.querySelector(".submit");
const inputItem = document.querySelector(".input-field");
const doneBtn = document.querySelector(".done");

var deleteBtn = document.querySelector(".delete");

const ItemList = document.querySelector(".itemList");

ItemList.addEventListener("click", removeItem);
ItemList.addEventListener("click", taskDone);

submitBtn.addEventListener("click", function(e) {
    e.preventDefault();
    var x = inputItem.value;
    if (x.trim() == 0) {
        alert("enter a title")
    } else {
        var card = `<div class="card-title">${x}</div>

            <button class="done update-btns" id="done"><svg width="15" height="15" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.59 10.58L1.42 6.41L0 7.82L5.59 13.41L17.59 1.41L16.18 0L5.59 10.58Z" fill="#ADFF91"/>
                    </svg>
                    </button>
            <button class="delete update-btns"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="#FF9393"/>
                    </svg>
            </button>`
        var li = document.createElement("li");
        li.classList.add("itemCard");
        li.innerHTML = card;


        ItemList.appendChild(li);

        console.log(ItemList);
        document.querySelector("form").reset();
        return false;
    }

})


function taskDone(e) {
    if (e.target.classList.contains("done")) {
        e.target.parentElement.style.backgroundColor = "rgb(204, 204, 204)";
        console.log(e.target.parentElement.firstChild.st)
    }

}

function removeItem(e) {
    if (e.target.classList.contains("delete")) {
        e.target.parentElement.remove();
    }


}