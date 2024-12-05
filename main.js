//Variable
// let nombre;
//Asignacion de variable
// nombre = "Diego";
// console.log(nombre);

//Hola mundo
// console.log("Hola mundo!");

// Hola mundo con alert
// alert("Hola mundo");

// Tipos de datos 

// String   
// let texto = "Soy un texto";

// Number
// let edad = 20;

// Boolean  
// let verdadero = true;

// Undefined    
// let indefinido;

// Null
// let nulo = null;

// Definir constantes y variables
const date = document.querySelector('#date');
const list = document.querySelector('#list');
const elemento = document.querySelector('#element');
const input = document.querySelector('#input');
const button = document.querySelector('#button-add');
const check = 'bi-record-circle';
const cross = 'crossed';
const uncheck = 'bi-circle';
let LIST;
let id;

const DATE = new Date();
date.innerHTML = DATE.toLocaleDateString('es-MX', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
});

function AddTask (task,id,done,deleteTask) {
    if (deleteTask) {
        return
    };
    const DONE = done ? check : uncheck;
    const LINE = done ? cross : '';
    const elemento = ` <li id="element">
                    <i id="${id}" data="done" class="bi ${DONE}"></i>
                    <p class="task-list text ${LINE}">${task}</p>
                    <i id="${id}" data="deleteTask" class="bi bi-x-circle"></i>
                </li>`
    list.insertAdjacentHTML('beforeend', elemento);
};

function doneTask (element) {
    element.classList.toggle(check);
    element.classList.toggle(uncheck);
    element.parentNode.querySelector('.text').classList.toggle(cross);
    LIST[element.id].done = LIST[element.id].done ? false : true;
};

function deleteTask (element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].deleteTask = true;
};

button.addEventListener('click', () =>
{
    const task = input.value;
    if (task){
        AddTask(task, id, false, false);
        LIST.push({
            name: task,
            id: id,
            done: false,
            deleteTask: false
        });
        localStorage.setItem('TODO', JSON.stringify(LIST));
        id++;
        input.value = '';
    }
});
list.addEventListener.getItem('click', function (event)
{
 const element = event.target;
 const elementData = element.attributes.data.value;
 if (elementData === 'done') {
    doneTask(element);
} else if (elementData === 'delete') {
    deleteTask(element);
};
localStorage.setItem('TODO', JSON.stringify(LIST));
});

let data = localStorage.getItem('TODO');
if (data) {
    LIST = JSON.parse(data);
    id = LIST.length;
    loadList(LIST);
} else {
    LIST = [];
    id = 0;
}

function loadList(array) {
    array.forEach(function (item) {
        AddTask(item.name, item.id, item.done, item.deleteTask);
    });
};

