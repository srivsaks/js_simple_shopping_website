//Delete item
let groceryListUL=document.querySelector("#grocery-list ul");
groceryListUL.addEventListener("click",handleDelete);

function handleDelete(e){
    if(e.target.className==="delete"){
        let liParent=e.target.parentElement;
        liParent.remove();
    }
}

// Add item to grocery list
let addItemButton=document.querySelector("#add-item");
addItemButton.addEventListener("submit",addItem);

function addItem(e){
    e.preventDefault();
    let text=addItemButton.querySelector("input").value
    let newLiElement=document.createElement("li");
    let newItem=document.createElement("span");
    newItem.className="item";
    newItem.textContent=text;
    let newDeleteButton=document.createElement("span");
    newDeleteButton.className="delete";
    newDeleteButton.textContent="Delete";
    newLiElement.appendChild(newItem);
    newLiElement.appendChild(newDeleteButton)
    groceryListUL.appendChild(newLiElement);
    addItemButton.querySelector("input").value=""
}