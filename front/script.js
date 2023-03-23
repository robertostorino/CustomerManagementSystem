// Al cargar la página web, se ejecuta la función search
document.addEventListener("DOMContentLoaded", init);
const URL_API = "https://localhost:7195/api/";

var customers = [] //Variable global que almacena array de clientes

function init() {
  search()
}

function agregar(){
  clean()
  abrirFormulario()
}

// Modal
function abrirFormulario() {
  htmlModal = document.getElementById("modal");
  htmlModal.setAttribute("class", "modale opened");
}

function cerrarModal() {
  htmlModal = document.getElementById("modal");
  htmlModal.setAttribute("class", "modale");
}
// Modal

async function search() {
  var url = URL_API + 'customer'
  var response = await fetch(url, {
    "method": 'GET',
    "headers": {
      "Content-Type": 'application/json'
    }
  })
  customers = await response.json();
  // console.log(customers)

  var html = ''
  for (customer of customers) {
    var row = `<tr>
    <td>${customer.firstName}</td>
    <td>${customer.lastName}</td>
    <td>${customer.email}</td>
    <td>${customer.phone}</td>
    <td>
      <a href="#" onclick="edit(${customer.id})" class="myButton">Editar</a>
      <a href="#" onclick="remove(${customer.id})" class="btnDelete">Eliminar</a>
    </td>
  </tr>`
    html = html + row;
  }
  document.querySelector('#customers > tbody').outerHTML = html
}

function edit(id) {
  abrirFormulario()
  // devuelve el cliente que haya seleccionado
  let customer = customers.find(x => x.id == id) //recorro el array de clientes definido en forma global, y busco el customer por su id
  
  //En el modal, cargar los campos con sus datos correspondientes al customer seleccionado
  document.getElementById('txtId').value = customer.id
  document.getElementById('txtFirstname').value = customer.firstName
  document.getElementById('txtLastname').value = customer.lastName
  document.getElementById('txtPhone').value = customer.phone
  document.getElementById('txtAddress').value = customer.address
  document.getElementById('txtEmail').value = customer.email 
}

async function remove(id) {
  respuesta = confirm('¿Está seguro de eliminarlo?')
  if (respuesta) {
    var url = URL_API + 'customer/' + id
    await fetch(url, {
      "method": 'DELETE',
      "headers": {
        "Content-Type": 'application/json'
      }
    })
    window.location.reload(); //Reacarga la página
  }
}

function clean() {
  document.getElementById('txtId').value = ''
  document.getElementById('txtFirstname').value = ''
  document.getElementById('txtLastname').value = ''
  document.getElementById('txtPhone').value = ''
  document.getElementById('txtAddress').value = ''
  document.getElementById('txtEmail').value = ''
}

async function save() {

  var data = {
    "address": document.getElementById('txtAddress').value,
    "email": document.getElementById('txtEmail').value,
    "firstname": document.getElementById('txtFirstname').value,
    "lastname": document.getElementById('txtLastname').value,
    "phone": document.getElementById('txtPhone').value
  }

  let id = document.getElementById('txtId').value

  if(id != '') {
    data.id = id
  }

  var url = URL_API + 'customer'
  await fetch(url, {
    "method": id != '' ? 'PUT' : 'POST',
    "body": JSON.stringify(data),
    "headers": {
      "Content-Type": 'application/json'
    }
  })
  window.location.reload();
}