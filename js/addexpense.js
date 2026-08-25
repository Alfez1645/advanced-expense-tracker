import {editBtn  } from "./addExpenseBtn.js";
import { Budget_overView_card_Update } from "./Budget-overview-cards.js";

export function ExpenseAddInBox(data){
    const AllExpenseList = document.querySelector("#AllExpenseList");
    AllExpenseList.innerHTML = "";
    if(data.length === 0){
        AllExpenseList.innerHTML = `<div class="EmptyBoxText"><H1>No expense</H1></div>`
        return;
    }

    data.forEach( (expen , i) => {
        let  expsense = document.createElement("div");
        expsense.className = "expsense"

        expsense.innerHTML =`<div class="list_headings_design expnese_num">${i+1}</div>
                <div class="expnese_name">${expen.Title}</div>
                <div class="expnese_cate">${expen.Category}</div>
                <div class="expnese_amount"><i class="fa-solid fa-indian-rupee-sign"></i>${expen.Amount}</div>
                <div class="expnese_date">${expen.Date}</div>
                <div class="expnese_actionbtn"><i class="fa-solid fa-trash deletebtn" data-index="${i}"></i><i class="fa-solid fa-pen-to-square editBtn" data-index="${i}"></i></div>`
        AllExpenseList.appendChild(expsense);
    });
    ExpenseDelete()
}
let allExpenses = JSON.parse(localStorage.getItem("AllExpensive")) || [];
ExpenseAddInBox(allExpenses);

export function ExpenseDelete(){
    const alldeletebtn = document.querySelectorAll(".deletebtn");

    alldeletebtn.forEach(btn =>{
        let allExpenses = JSON.parse(localStorage.getItem("AllExpensive")) || [];
        btn.addEventListener("click" , () =>{
            let index = btn.dataset.index
            allExpenses.splice(index, 1);
            localStorage.setItem("AllExpensive" , JSON.stringify(allExpenses));
            ExpenseAddInBox(allExpenses);
            editBtn();
            Budget_overView_card_Update();
            
        })
    })
}
ExpenseDelete()