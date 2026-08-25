import { ExpenseAddInBox } from "./addexpense.js";
import { Budget_overView_card_Update } from "./Budget-overview-cards.js";
import { recentExpense } from "./note_todo.js";

const AddExpensebtn = document.querySelector("#Add_Expense_btn");
const AddExpense_section = document.querySelector("#AddExpense_section");
const Back_btn_add_expense = document.querySelector(".Back-btn-add_expense");

// 
const Name = document.querySelector(".expen-name input");
const amount = document.querySelector(".expen-amount input");
const category = document.querySelector(".expen-category select");
const date = document.querySelector(".expen-date input");
// 


//validate Expense function
function validateExpense(){
    let IsValid = true;
    
    if(Name.value.trim()  ===  "" || !(/^[A-Za-z ]+$/.test(Name.value))){
        Name.classList.add("invalid-warning");
        IsValid = false;
    }
    else{
        Name.classList.remove("invalid-warning");
    }
    if(amount.value.trim() === "" || Number(amount.value) <= 0){
        amount.classList.add("invalid-warning");
        IsValid = false;
    }
    else{
         amount.classList.remove("invalid-warning");
    }
    if(category.value === "select Category"){
        category.classList.add("invalid-warning");
        IsValid = false;
    }
    else{
        category.classList.remove("invalid-warning");
    }
    if(date.value === ""){
        date.classList.add("invalid-warning");
        IsValid = false;
    }
    else{
        date.classList.remove("invalid-warning");
    }

    return IsValid;
}
//validate Expense function

AddExpensebtn.addEventListener("click" , () =>{
    AddExpenseBoxBtn.innerHTML = `Add Expense`
    AddExpense_section.classList.remove("hidden");
});

AddExpense_section.addEventListener("click" , (e) =>{
    if(window.innerWidth > 767 && e.target === AddExpense_section ){
        AddExpense_section.classList.add("hidden");
        Name.value = "";
        amount.value = "";
        category.selectedIndex = 0;
        date.value = "";
        Name.classList.remove("invalid-warning");
        amount.classList.remove("invalid-warning");
        category.classList.remove("invalid-warning");
        date.classList.remove("invalid-warning");
    }
    
})
Back_btn_add_expense.addEventListener("click" , (e) =>{

    AddExpense_section.classList.add("hidden");
    Name.value = "";
    amount.value = "";
    category.selectedIndex = 0;
    date.value = "";
    Name.classList.remove("invalid-warning");
    amount.classList.remove("invalid-warning");
    category.classList.remove("invalid-warning");
    date.classList.remove("invalid-warning");
});
// 
let isEdit = false;
let index = null;
export function editBtn(){
    const alleditBtnbtn = document.querySelectorAll(".editBtn");

    alleditBtnbtn.forEach(btn =>{
        
        

        let allExpenses = JSON.parse(localStorage.getItem("AllExpensive")) || [];

        btn.addEventListener("click" , () =>{

            AddExpenseBoxBtn.innerHTML = "Update expense"

            index = btn.dataset.index
            Name.value = allExpenses[index].Title;
            amount.value = allExpenses[index].Amount;
            category.value = allExpenses[index].Category;
            date.value = allExpenses[index].Date;

            AddExpense_section.classList.remove("hidden");
            isEdit = true;
        })  
        })
}  
editBtn()
// 

const AddExpenseBoxBtn = document.querySelector(".Add-expenses");

AddExpenseBoxBtn.addEventListener("click" , ()=>{
let allExpenses = JSON.parse(localStorage.getItem("AllExpensive")) || [];
    if(!validateExpense()){
        return;
    }

    if(isEdit){
        allExpenses[index].Title = Name.value;
        allExpenses[index].Category = category.value;
        allExpenses[index].Amount = Number(amount.value);
        allExpenses[index].Date = date.value;

        localStorage.setItem("AllExpensive" , JSON.stringify(allExpenses));
        ExpenseAddInBox(allExpenses);
        Budget_overView_card_Update();
        editBtn()
        AddExpense_section.classList.add("hidden");
        isEdit = false;
    }
    else{
        
        allExpenses.push({
            Title : Name.value,
            Category : category.value,
            Amount :  Number(amount.value),
            Date : date.value
        });
        localStorage.setItem("AllExpensive" , JSON.stringify(allExpenses));
    
        ExpenseAddInBox(allExpenses);
        recentExpense(allExpenses);
        Budget_overView_card_Update();
        editBtn();
        AddExpense_section.classList.add("hidden");
        Name.value = "";
        amount.value = "";
        category.selectedIndex = 0;
        date.value = "";

    }
})
