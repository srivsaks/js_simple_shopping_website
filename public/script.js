let groceryListUL=document.querySelector("#grocery-list ul");
groceryListUL.addEventListener("click",handleDelete);

function handleDelete(e){
    if(e.target.className==="delete"){
        let liParent=e.target.parentElement;
        liParent.remove();
    }
}