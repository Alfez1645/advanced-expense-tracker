const sidebarmenubtn = document.querySelector(".sidebar-menu-btn");
const sidemenu = document.querySelector("#side-menu");
const menuCloseBtn = document.querySelector(".menu-logo-icon i");

sidebarmenubtn.addEventListener("click" ,()=>{
    sidemenu.classList.add("side-menu-open");
});
menuCloseBtn.addEventListener("click" ,()=>{
    sidemenu.classList.remove("side-menu-open");
});

export function barUpdate(){
   let allExpenses = JSON.parse(localStorage.getItem("AllExpensive")) || [];

const categoryTotal = {};

allExpenses.forEach(expense => {
    if (categoryTotal[expense.Category]) {
        categoryTotal[expense.Category] += expense.Amount;
    } else {
        categoryTotal[expense.Category] = expense.Amount;
    }
});
const labels = Object.keys(categoryTotal);
const values = Object.values(categoryTotal);

 const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'All Expense',
        data: values,
        borderWidth: 1,
        backgroundColor: ["#6366F1","#22C55E","#F59E0B","#EF4444","#06B6D4","#A855F7","#F97316"]
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}
barUpdate()