let currentDay="Monday";
let tasks=JSON.parse(localStorage.getItem("plannerTasks")) || {};

//show task for selected day
 function renderTasks() {
    let taskList=document.getElementById("taskList");
taskList.innerHTML="";

let dayTasks=task[currentDay] ||[];

dayTasks.forEach((task,index) => {
let card=document.createElement("div");
card.className="task-card";

let title=document.createElement("h3");
title.textContent=task.title;
if(task.completed) title.classList.add("completed");

let notes=document.createElement("p");
notes.textContent=task.notes;

//Actions 
let actions=document.createElement("div");
actions.className="task-actions";

let completeBtn=document.createElement("button");
 completeBtn.textContent=task.completed ? "undo" : "complete";
completeBtn.className="complete-btn";
completeBtn.onclick=() => {
task.completed=!task.completed;
saveTasks();
}


let deleteBtn=document.createElement("button");
deleteBtn.textContent="Delete";
deleteBtn.className="delete-btn";
deleteBtn.onclick=() => {
dayTasks.splice(index,1);
    saveTasks();
};

actions.appendChild(completeBtn);
actions.appendChild(deleteBtn);

card.appendChild(title);
card.appendChild(notes);
card.appendChild(actions);

taskList.appendChild(card);
});
 }



//save task to localstorage
function saveTasks(){
    localStorage.setItem("PlannerTasks",JSON.stringify(task));
    renderTasks();
}

//Add new task

document.getElementById("addTaskBtn").addEventListener("click",() =>{
let title=document.getElementById("taskTitle").value;
let notes=document.getElementById("taskNotes").value;


if(title.trim() ===""){
    alert("please enter a task title");
    return;
}

if(!tasks[currentday]) task[currentDay]=[];

    task[currentDay].push({title,notes,completed:false});
document.getElementById("taskTitle").value=  "";
document.getElementById("taskNotes").value=  "";
    saveTasks();

});


//change day tab

document.querySelectorAll(".day-btn").forEach(btn => {
btn.addEventListener("click",() => {
document.querySelector("day-btn.active").classList.remove("active");
btn.classList.add("active");
currentDay=btn.CDATA_SECTION_NODE.day;
renderTasks();    
});

});

//Intial render
renderTasks();
