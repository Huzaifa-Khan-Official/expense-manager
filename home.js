var currentUser = JSON.parse(localStorage.getItem('currentUser')) || "";
var items = JSON.parse(localStorage.getItem("items")) || []; // geting items from storage

if (currentUser === "") {
    location.href = "./signup/signup.html";
}

var greet = document.querySelector(".greet");
greet.innerHTML = currentUser.email;

function logout() {
    localStorage.removeItem("currentUser");
    location.reload();
}



var itemUniqueId = 1;
// add expense function
function addExpense() {

    // var tableGroupDivider = document.querySelector(".table-group-divider"); //table-group-divider
    // var trDiv = document.createElement("tr"); // make tr
    // var itemId = document.createElement("th"); // make item Id
    // var itemName = document.createElement("td"); // make item Name
    // var amount = document.createElement("td") // make amount
    // var expenseDate = document.createElement("td") // make expense date
    // var category = document.createElement("td") // make category
    // var editDeleteTd = document.createElement("td"); // make edit/delete button td
    //     var editbtn = document.createElement("button"); // make edit button
    //     var editbtnText = document.createTextNode("Edit") // set text for edit button
    //     var deleteBtn = document.createElement("button"); // make delete button
    //     var deleteBtnText = document.createTextNode("Delete") // set text for delete button


    //     editDeleteTd.setAttribute("id", "editDeleteBtn") // set id for edit/delete td
    //     editbtn.setAttribute("class", "btn btn-success") // set class for edit button
    //     deleteBtn.setAttribute("class", "btn btn-danger") // set class for edit button


    //     editDeleteTd.appendChild(editbtn); // append editbtn to edit/delete td
    //     editDeleteTd.appendChild(deleteBtn); // appedn deleteBtn to edit/delete td
    //     editbtn.appendChild(editbtnText) // append edittext to editbtn
    //     deleteBtn.appendChild(deleteBtnText) // append deletetext to deleteBtn



    
    



    // tableGroupDivider.appendChild(trDiv); // append tr
    // trDiv.appendChild(itemId); // append itemId
    // trDiv.appendChild(itemName) // append item Name
    // trDiv.appendChild(amount) // append amount
    // trDiv.appendChild(expenseDate) // append expense date
    // trDiv.appendChild(category) // append category
    // trDiv.appendChild(editDeleteTd) // append edit/delete button td








    var singleItemName = prompt("Enter Item Name:");
    var singleItemAmount = prompt("Enter Item Amount: ");
    var singleItemDate = prompt("Enter Expense Date: ");
    var singleItemCategory = prompt("Enter Item Category: ");

    var singleItem = {
        itemId: itemUniqueId,
        singleItemName,
        singleItemAmount,
        singleItemDate,
        singleItemCategory
    }
    items.push(singleItem);
    localStorage.setItem("items", JSON.stringify(items));

    // itemId.innerHTML = singleItem.itemId;
    // itemName.innerHTML = singleItem.singleItemName;
    // amount.innerHTML = singleItem.singleItemAmount;
    // expenseDate.innerHTML = singleItem.singleItemAmount;
    // category.innerHTML = singleItem.singleItemCategory;


    itemUniqueId++;
    getalldata();
}


function getalldata(){
    var items = JSON.parse(localStorage.getItem('items')) || "";
    try {
        var tableGroupDivider = document.querySelector(".table-group-divider"); //table-group-divider
        tableGroupDivider.innerHTML = "";
        
        items.map(singleItemmap =>{
    
            
            
        var trDiv = document.createElement("tr"); // make tr
        var itemId = document.createElement("th"); // make item Id
        var itemName = document.createElement("td"); // make item Name
        var amount = document.createElement("td") // make amount
        var expenseDate = document.createElement("td") // make expense date
        var category = document.createElement("td") // make category
        var editDeleteTd = document.createElement("td"); // make edit/delete button td
            var editbtn = document.createElement("button"); // make edit button
            var editbtnText = document.createTextNode("Edit") // set text for edit button
            var deleteBtn = document.createElement("button"); // make delete button
            var deleteBtnText = document.createTextNode("Delete") // set text for delete button
    
    
            editDeleteTd.setAttribute("id", "editDeleteBtn") // set id for edit/delete td
            editbtn.setAttribute("class", "btn btn-success") // set class for edit button
            deleteBtn.setAttribute("class", "btn btn-danger") // set class for edit button
    
    
            editDeleteTd.appendChild(editbtn); // append editbtn to edit/delete td
            editDeleteTd.appendChild(deleteBtn); // appedn deleteBtn to edit/delete td
            editbtn.appendChild(editbtnText) // append edittext to editbtn
            deleteBtn.appendChild(deleteBtnText) // append deletetext to deleteBtn
    
    
            
            
            
            
            
            
            tableGroupDivider.appendChild(trDiv); // append tr
            trDiv.appendChild(itemId); // append itemId
            trDiv.appendChild(itemName) // append item Name
            trDiv.appendChild(amount) // append amount
            trDiv.appendChild(expenseDate) // append expense date
            trDiv.appendChild(category) // append category
            trDiv.appendChild(editDeleteTd) // append edit/delete button td
            
            
            
            
            
            itemId.innerHTML = singleItemmap.itemId;
            itemName.innerHTML = singleItemmap.singleItemName;
            amount.innerHTML = singleItemmap.singleItemAmount;
            expenseDate.innerHTML = singleItemmap.singleItemAmount;
            category.innerHTML = singleItemmap.singleItemCategory;
            
        })
        
    } catch (error) {
        
    }
}

    getalldata();