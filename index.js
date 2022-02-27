
window.onload = () => {
    let form1 = document.querySelector("#addForm");

    let items = document.getElementById("items");

    let submit = document.getElementById("submit");

    let editItem = null;

    form1.addEventListener("submit", addItem);
    items.addEventListener("click", removeItem);
};

function addItem(e) {
    e.preventDefault();

    let newItem = document.getElementById("item").value;
    document.getElementById("item").value = "";


    if (submit.value != "Submit") {
        
        editItem.target.parentNode.childNodes[0].data = newItem; 

        submit.value = "Submit";

        return false;
    }


    if (newItem.trim() == "" || newItem.trim() == null ) {
        alert("Empty to do item !!!");
        return false;
    }
    
    let li = document.createElement("li");
    li.className = "list-items";
    
    let editButton = document.createElement("button");
    editButton.className = "edit";
    editButton.id = "edit";
    editButton.appendChild(document.createTextNode("Edit"));

    let deleteButton = document.createElement("button");
    deleteButton.className = "delete";
    deleteButton.id = "delete";
    deleteButton.appendChild(document.createTextNode("Delete"));


    li.appendChild(document.createTextNode(newItem));
    li.appendChild(deleteButton);
    li.appendChild(editButton);

    items.appendChild(li);

}

function removeItem(e) {
    e.preventDefault();

    if (e.target.classList.contains("delete")) {

        if (confirm("Are you sure ?")) {
            let li = e.target.parentNode;
            items.removeChild(li);
        }
    }

    if(e.target.classList.contains("edit")) {
        document.getElementById("item").value = e.target.parentNode.childNodes[0].data;
        submit.value = "EDIT";
        editItem = e;
        document.getElementById("item").focus();
    }

}

function toggleButton(ref, btnID) {
    document.getElementById(btnID).disabled = false;
}
