let todoElement = document.getElementById("taskinfo")
let takslist = document.getElementById("tasklist")
document.getElementById("add").onclick = function () {
    if (todoElement.value.length == 0) {
        alert("Enter a task to add")
    }
    else {
        takslist.innerHTML = takslist.innerHTML + `
        <div class="task">
            <span id="work">${todoElement.value}</span>
            <button class="del"><i class="fa fa-trash"></i></button>
        </div>`
        let alltasks = document.querySelectorAll('.del')
        for (i = 0; i < alltasks.length; i++) {
            alltasks[i].onclick = function () {
                this.parentNode.remove()
            }
        }
        todoElement.value = ""
    }
}