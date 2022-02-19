//Delete item
let groceryListUL = document.querySelector("#grocery-list ul");
groceryListUL.addEventListener("click", handleDelete);

function handleDelete(e) {
    if (e.target.className === "delete") {
        let liParent = e.target.parentElement;
        liParent.remove();
    }
}

// Add item to grocery list
let addItemButton = document.querySelector("#add-item");
addItemButton.addEventListener("submit", addItem);

function addItem(e) {
    e.preventDefault();
    let text = addItemButton.querySelector("input").value
    let newLiElement = document.createElement("li");
    let newItem = document.createElement("span");
    newItem.className = "item";
    newItem.textContent = text;
    let newDeleteButton = document.createElement("span");
    newDeleteButton.className = "delete";
    newDeleteButton.textContent = "Delete";
    newLiElement.appendChild(newItem);
    newLiElement.appendChild(newDeleteButton)
    groceryListUL.appendChild(newLiElement);
    addItemButton.querySelector("input").value = ""
}

//hide and unhide items using checkbox
let checkboxEle = document.getElementById("hide");
checkboxEle.addEventListener("change",hideUnhide);

function hideUnhide(e){
    let groceryListUL = document.querySelector("#grocery-list");
    if(checkboxEle.checked){
        groceryListUL.style.display="none"
    }
    else{
        groceryListUL.style.display="block"
    }
}

//search for items
const search=document.forms["search-item"].querySelector("input")
search.addEventListener("keyup",handleSearch)


function handleSearch(e){
    const searchText=e.target.value.toLowerCase();
    
    let groceryItem=document.querySelector("#grocery-list ul");
    let groceryItemLists=groceryItem.getElementsByTagName("li");

    let groceryArray=Array.from(groceryItemLists);
    groceryArray.forEach((item)=>{
        let groceryName=item.firstElementChild.textContent;
        let groceryNameLower=groceryName.toLowerCase()
        if(groceryNameLower.indexOf(searchText)===-1){
           item.style.display="none"
        }
        else{
            item.style.display="block";
        }
    })
}