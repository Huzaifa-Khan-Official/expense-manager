var currentUser = JSON.parse(localStorage.getItem('currentUser')) || "";
var items = JSON.parse(localStorage.getItem("items")) || []; // geting items from storage


let indexNo;




if (currentUser === "") {
    location.href = "./signup/signup.html";
}

var greet = document.querySelector(".greet");
greet.innerHTML = currentUser.email;

function logout() {
    localStorage.removeItem("currentUser");
    location.reload();
}





// add expense function
function addExpense() {
    var itemUniqueId = items.length + 1;


    var itemNameInp = document.getElementById("itemName");
    var itemAmountInp = document.getElementById("itemAmount");
    var expenseDateInp = document.getElementById("expenseDate");
    var itemCategoryInp = document.getElementById("itemCategory");

    var singleItemName = itemNameInp.value;
    var singleItemAmount = itemAmountInp.value;
    var singleItemDate = expenseDateInp.value;
    var singleItemCategory = itemCategoryInp.value;

    if ((singleItemName == "") || (singleItemAmount == "") || (singleItemDate == "") || (singleItemCategory == "")) {
        document.querySelector(".errrorDiv p").innerHTML = "Please fill in all fields before adding the expense.";
        setTimeout(() => {
            document.querySelector(".errrorDiv p").innerHTML = "";
        }, 4000);
    } else {



        var singleItem = {
            itemId: itemUniqueId,
            singleItemName,
            singleItemAmount,
            singleItemDate,
            singleItemCategory
        }
        items.push(singleItem);
        localStorage.setItem("items", JSON.stringify(items));




        itemUniqueId = parseInt(itemUniqueId) + 1;
        getalldata();



        itemNameInp.value = "";
        itemAmountInp.value = "";
        expenseDateInp.value = "";
        itemCategoryInp.value = "";



        $('#expenseModal').modal('hide');
        totalFunc();
    }
}


function getalldata() {
    var items = JSON.parse(localStorage.getItem('items')) || "";
    var itemUniqueId = items.length + 1;
    try {
        var tableGroupDivider = document.querySelector(".table-group-divider"); //table-group-divider
        tableGroupDivider.innerHTML = "";

        items.map((singleItemmap, i) => {



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
            editbtn.setAttribute("onclick", `editTr(${i})`) // set function for edit button
            editbtn.setAttribute("data-bs-toggle", "modal")
            editbtn.setAttribute("data-bs-target", "#editModal") // open modal for editing
            deleteBtn.setAttribute("class", "btn btn-danger") // set class for edit button
            deleteBtn.setAttribute("onclick", `delTr(${i})`) // set function for delete button


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





            itemId.innerHTML = i + 1;
            itemName.innerHTML = singleItemmap.singleItemName;
            amount.innerHTML = singleItemmap.singleItemAmount;
            expenseDate.innerHTML = singleItemmap.singleItemDate;
            category.innerHTML = singleItemmap.singleItemCategory;

        })

    } catch (error) {

    }
}

getalldata();


function totalFunc() {
    var total = 0;
    var totalAmount = document.querySelector("#totalAmount");

    items.forEach(element => {
        var amount = parseInt(element.singleItemAmount);
        total += amount;
    });
    totalAmount.innerHTML = total;
}

totalFunc()


function delTr(index) {
    items.splice(index, 1);
    localStorage.setItem("items", JSON.stringify(items));
    getalldata();
    totalFunc();

}

function editTr(index) {
    var itemNameInp = document.getElementById("editItemName");
    var itemAmountInp = document.getElementById("editItemAmount");
    var expenseDateInp = document.getElementById("editExpenseDate");
    var itemCategoryInp = document.getElementById("editItemCategory");

    var singleItemName = itemNameInp.value;
    var singleItemAmount = itemAmountInp.value;
    var singleItemDate = expenseDateInp.value;
    var singleItemCategory = itemCategoryInp.value;

    itemNameInp.value = items[index].singleItemName;
    itemAmountInp.value = items[index].singleItemAmount;
    expenseDateInp.value = items[index].singleItemDate
    itemCategoryInp.value = items[index].singleItemCategory;


    indexNo = index;
}

function editExpense() {
    var itemUniqueId = items.length + 1;

    var itemNameInp = document.getElementById("editItemName");
    var itemAmountInp = document.getElementById("editItemAmount");
    var expenseDateInp = document.getElementById("editExpenseDate");
    var itemCategoryInp = document.getElementById("editItemCategory");

    var singleItemName = itemNameInp.value;
    var singleItemAmount = itemAmountInp.value;
    var singleItemDate = expenseDateInp.value;
    var singleItemCategory = itemCategoryInp.value;

    if ((singleItemName == "") || (singleItemAmount == "") || (singleItemDate == "") || (singleItemCategory == "")) {
        document.querySelector(".errrorDiv p").innerHTML = "Please fill in all fields before adding the expense.";
        setTimeout(() => {
            document.querySelector(".errrorDiv p").innerHTML = "";
        }, 4000);
    } else {


        var singleItem = {
            itemId: itemUniqueId,
            singleItemName,
            singleItemAmount,
            singleItemDate,
            singleItemCategory
        }



        items.splice(indexNo, 1, singleItem);
        localStorage.setItem("items", JSON.stringify(items));
        getalldata();
        totalFunc();

        $('#editModal').modal('hide');
    }
}