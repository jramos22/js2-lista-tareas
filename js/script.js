//
// Lista de tareas
//


let contadorTareas = 0;
let listaTareas =[];
let listaTareas2 = localStorage.getItem('tareas');
if (listaTareas2) {
    tareas = JSON.parse(listaTareas2);
}

function addTask(nombretareas, fechatareas, completoTareas){
  const miTarea ={

    id: contadorTareas,
    nombre: nombretareas,
    completo: completoTareas,
    fecha: fechatareas,

  };

  //agrega el objeto en el array
  listaTareas.push(miTarea);

  //incrementa el contador de tareas
  contadorTareas++;

  appendTaskDOM(miTarea);

  localStorage.setItem('tareas', JSON.stringify(listaTareas));

  console.log(listaTareas);


}

//
//vista
//

// Lista de tareas (DOM)
const lista = document.getElementById('task-list');

function appendTaskDOM(tarea) {
  // Item de la lsita
  const item = document.createElement('li');
  item.className = 'task-list_item';
  //Checkbox
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type','checkbox');
  checkbox.setAttribute('id', `tarea-${tarea.id}`);
  //label
  const label = document.createElement('label');
  label.setAttribute('for', `tarea-${tarea.id}`);
  label.innerHTML = `${tarea.nombre} - ${tarea.fecha}`;
  //agrega al html
  item.appendChild(checkbox);
  item.appendChild(label);
  lista.appendChild(item);
}

for (let i = 0; i < listaTareas.length; i++) {
  appendTaskDOM(listaTareas[i]);
  
}

//
//controlador
//

//Formulario para añadir tareas
const formulario = document.getElementById('new-task-form');

//Event handler para el evento 'submit' del formulario.
//crea una nueva tarea.
formulario.addEventListener('submit', (event) => {
  // Se cancela el comportamiento default del formulario.
  event.preventDefault();
  
  //agrega el nuevo item (modelo).
  addTask(formulario.elements[0].value, formulario.elements[1].value, false);



  //reseteamos el form
  formulario.elements[0].value= '';
  formulario.elements[1].value= '';
});

