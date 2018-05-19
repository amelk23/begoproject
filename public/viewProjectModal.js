var addTaskModal = document.getElementById('addTaskModal');
var closeBtn = document.getElementById('close');
var addTaskBtn = document.getElementById('addTask');

addTaskBtn.onclick = function(){
    addTaskModal.style.display="block";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}