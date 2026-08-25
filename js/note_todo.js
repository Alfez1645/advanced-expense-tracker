// notes
const Note_Section = document.querySelector("#Note-Section button");
const addnotes_box = document.querySelector(".addnotes");
const addnotes_box_btn = document.querySelector(".addnotes button");

Note_Section.addEventListener("click" , () =>{
    addnotes_box.classList.remove("hidden")
})

addnotes_box.addEventListener("click" , (e) =>{
    if(window.innerWidth > 767 && e.target === addnotes_box ){
        addnotes_box.classList.add("hidden");

    }
});
const Back_btn_note = document.querySelector(".Back-btn-note");
Back_btn_note.addEventListener("click" , () =>{
    addnotes_box.classList.add("hidden");
})

addnotes_box_btn.addEventListener("click" , () =>{
    let notesdata = JSON.parse(localStorage.getItem("notes")) || [];
    let isvalid = true;
    let notes_content = document.querySelector(".addnotesbox textarea");
    if(notes_content.value.trim() === ""){
        isvalid = false
        notes_content.classList.add("invalid-warning");
    }
    else{
        notes_content.classList.remove("invalid-warning");
    }


    if(!isvalid){
        return;
    }
    notesdata.push(notes_content.value)
     localStorage.setItem("notes" , JSON.stringify(notesdata));
     upadtenotes()
    addnotes_box.classList.add("hidden");
    notes_content.value = "";
})

function upadtenotes(){
    let notesdata = JSON.parse(localStorage.getItem("notes")) || [];

    const allnotes = document.querySelector(".all_notes");
    allnotes.innerHTML = "";
    
    if(notesdata.length === 0){
        allnotes.innerHTML  = `<h2>No Notes</h2>`
        allnotes.classList.add("EmptyBoxText");
        return;
    }

    notesdata.forEach((note , index) => {
        const singlenote = document.createElement("div")
        singlenote.className = "note"
        singlenote.innerHTML  += `
                                <p>${note}</p>
                                <i class=" deletebtn fa-solid fa-trash-can" data-index="${index}"></i>
                            `
    allnotes.appendChild(singlenote);
    const del = singlenote.querySelector(".deletebtn")
    del.addEventListener("click" , () =>{
        notesdata.splice(index, 1);

        localStorage.setItem("notes", JSON.stringify(notesdata));
        upadtenotes();

    })
    });
    allnotes.classList.remove("EmptyBoxText");
    
}
upadtenotes()
// notes

// to do satrt
const Todo_list_Section = document.querySelector("#Todo-list-Section button");
const addtodo_box = document.querySelector(".addtodo");
const addtodo_box_btn = document.querySelector(".addtodobox button");


Todo_list_Section.addEventListener("click" , () =>{
    addtodo_box.classList.remove("hidden");
})

addtodo_box.addEventListener("click" , (e) =>{
    if(window.innerWidth > 767 && e.target === addtodo_box ){
        addtodo_box.classList.add("hidden");

    }
});

const Back_btn_Todo = document.querySelector(".Back-btn-todo");
Back_btn_Todo.addEventListener("click" , () =>{
    addtodo_box.classList.add("hidden");
})

addtodo_box_btn.addEventListener("click" , () =>{
    let tasksData = JSON.parse(localStorage.getItem("alltask")) || [];

    let isvalid = true;
    let to_do_content = document.querySelector(".addtodobox textarea");
    if(to_do_content.value.trim() === ""){
        isvalid = false
        to_do_content.classList.add("invalid-warning");
    }
    else{
        to_do_content.classList.remove("invalid-warning");
    }


    if(!isvalid){
        return;
    }
    tasksData.push({
        text:  to_do_content.value.trim(),
        completed: false
    })
    localStorage.setItem("alltask", JSON.stringify(tasksData));
    updatetask();
    to_do_content.value = ""
    
    addtodo_box.classList.add("hidden");

})



function updatetask(){
    let tasksData = JSON.parse(localStorage.getItem("alltask")) || [];
    const alltodobox = document.querySelector(".all_To_Do");
    alltodobox.innerHTML = "";

    if(tasksData.length === 0){
        alltodobox.innerHTML  = `<h2>No Tasks</h2>`
        alltodobox.classList.add("alltodo_empty");
        return;
    }
    tasksData.forEach((task , index) =>{
        const li = document.createElement("li");
        li.innerHTML = `<div class="taskvalue">
                            <input type="checkbox" ${task.completed ? "checked" : ""}>
                            <span>${task.text}</span>
                        </div>
                        <i class=" delete fa-solid fa-trash-can"></i>`
                        alltodobox.appendChild(li);

        const checkbox = li.querySelector(".taskvalue input");
        const deleteBtn = li.querySelector(".delete");

        checkbox.addEventListener("change", () => {
            tasksData[index].completed = checkbox.checked;
            localStorage.setItem("alltask", JSON.stringify(tasksData));
        });

        deleteBtn.addEventListener("click", () => {
            tasksData.splice(index, 1);
            localStorage.setItem("alltask", JSON.stringify(tasksData));
            updatetask();
        });

    })
    alltodobox.classList.remove("alltodo_empty");
}
updatetask();


const Allexpense = JSON.parse(localStorage.getItem("AllExpensive")) || [];

export function recentExpense(expense){
    const allrecentexpense = document.querySelector(".allrecentexpense");

    allrecentexpense.innerHTML  = "";

    if(Allexpense.length === 0){
        allrecentexpense.innerHTML  = `<h2>No Recent Expense <h2>`
        allrecentexpense.classList.add("alltodo_empty");
        return;
    }
    
    const recentExpenses = expense.slice(-5).reverse();

recentExpenses.forEach(item => {
    allrecentexpense.innerHTML += `
        <div class="singlerecentexpense">
            <div class="nameDate">
                <h4>${item.Title}</h4>
                <p>${item.Date}</p>
            </div>
            <div class="recentamout"><i class="fa-solid fa-indian-rupee-sign ruppeSign"></i>${item.Amount}</div>
        </div>
    `;
});
}

recentExpense(Allexpense);