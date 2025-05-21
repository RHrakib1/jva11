const taskdata = document.getElementById("from")
const taskbtn = document.getElementById("addTask")
const tasklist = document.getElementById("addlist")


taskbtn.addEventListener("click", function () {
    const addtext = taskdata.value.trim()
    const li = document.createElement('li')
    li.textContent = addtext
    tasklist.append(li)
    taskdata.value = ' '
})