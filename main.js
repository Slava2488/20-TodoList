
const tasks = [
    { task: 'Выучить стих'},
    { task: 'Вынести мусор'},
    // Сделать уроки
    // Помочь с уборкой маме
]

let inputSearch = document.querySelector('#input-form')
let inputBtn = document.querySelector('#btn-form')

const completeTask = (h3) =>{
    let textdec = h3.style.textDecoration;
    h3.style.textDecoration = textdec === 'none' ? 'line-through' : 'none'
}

const deleteTask = (li) =>{
    li.remove()
}

const createTask = (tasks) =>{
    let li = document.createElement('li')
    let h3 = document.createElement('h3')
    let btn = document.createElement('button')

    li.className = 'task'
    h3.setAttribute('id', 'task-text')
    btn.setAttribute('id', 'task-btn')

    h3.style.textDecoration = 'none'
    h3.addEventListener('click', () => completeTask(h3))
    btn.addEventListener('click',() => deleteTask(li))

    h3.innerText = tasks
    btn.innerText = "X"

    li.append(h3, btn)
    return li
}

const getStartList = (tasks) =>{
    let taskList = document.querySelector('#tasksList')
    const liElemets = tasks.map((currentTasks)=>{
        let li = createTask(currentTasks.task)
        return li
    })

    taskList = taskList.append(...liElemets)
}

getStartList(tasks)

const createTasks = (value) =>{
    let taskList = document.querySelector('#tasksList')
    taskList.prepend(createTask(value));
}

inputBtn.addEventListener('click', (e) =>{
    if(inputSearch.value != '')
    {
        createTasks(inputSearch.value)
        inputSearch.value = ''
    }
})

inputSearch.addEventListener("keydown", (e) => {

    if(e.key === 'Enter' && inputSearch.value !== '')
    {
        createTasks(inputSearch.value)
        inputSearch.value = ''
    }
});

