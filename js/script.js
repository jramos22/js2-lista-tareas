//
// Lista de tareas
//

const formulario = document.getElementById('new-task-form');
let contadorTareas = 0;
const lista = document.getElementById('task-list');
const listaTareas =[];

formulario.addEventListener('submit', (event) => {
  // Se cancela el comportamiento default del formulario.
  event.preventDefault();
  // Texto introducido por el usuario.
  //creamos los li
  const item = document.createElement('li');
  item.className = 'Task-list_item';
  //Checkbox
  const checkbox = document.createElement('input');
  checkbox.setAttribute('type','checkbox');
  checkbox.setAttribute('id', `tarea-${contadorTareas}`);
  //label
  const label = document.createElement('label');
  label.setAttribute('for', `tarea-${contadorTareas}`);
  
  label.innerHTML = `${formulario.elements[0].value}`-` ${formulario.elements[1].value}`;
  //agrega al html
  item.appendChild(checkbox);
  item.appendChild(label);
  lista.appendChild(item);
  const miTarea ={
    id: contadorTareas,
    nombre: formulario.elements[0].value,
    completo: false,
    fecha: formulario.elements[1].value,
  };
  listaTareas.push(miTarea);
  console.log(contadorTareas);
  contadorTareas++;
  //reseteamos el form
  formulario.elements[0].value= '';
});
