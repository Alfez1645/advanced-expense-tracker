export function Budget_overView_card_Update(){
    const TotalExpense = document.querySelector(".Total-Expense-content h1");
    const HighestExpense = document.querySelector(".Highest-Expense-content h1");
    const BudgetMonth = document.querySelector(".Budget-Month-content h1");
    const RemainingBudget = document.querySelector(".Remaining-Budget-content h1");
    const Expense_show_box_total = document.querySelector(".Expense_show_box_total");


    let allExpenses = JSON.parse(localStorage.getItem("AllExpensive")) || [];

    const realbudget = JSON.parse(localStorage.getItem("Budget")) || 0;

    let total = 0;
    let highest = 0;
    let budget = realbudget;
  

    for(let i = 0; i < allExpenses.length; i++){
        total += allExpenses[i].Amount;

        if(allExpenses[i].Amount > highest){
            highest = allExpenses[i].Amount;
        }
    }

    if (budget === null || budget === "") {
        budget = 0;
    }
    let remain = budget

    TotalExpense.innerHTML = `<i class="fa-solid fa-indian-rupee-sign rupay_size"></i>`;
    TotalExpense.append(total);

    Expense_show_box_total.innerHTML = `<i class="fa-solid fa-indian-rupee-sign"></i>`;
    Expense_show_box_total.append(total);


    HighestExpense.innerHTML = `<i class="fa-solid fa-indian-rupee-sign rupay_size"></i>`;
    HighestExpense.append(highest);

    RemainingBudget.innerHTML = `<i class="fa-solid fa-indian-rupee-sign rupay_size"></i>`;
    RemainingBudget.append(remain);
    
    

    BudgetMonth.innerHTML = `<i class="fa-solid fa-indian-rupee-sign rupay_size"></i>`;
    BudgetMonth.append(budget)

}
Budget_overView_card_Update();