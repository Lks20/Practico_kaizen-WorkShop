let resultado = ''
const contenedor = document.getElementById('tbody')
let montoTotal = 0;

const mostrar = (productos) => {
    productos.forEach(producto => {
        resultado += `
        <tr>
            <td class="idProd">${producto._id}</td>
            <td class="cantProd">${producto.categoria}</td>
            <td class="fechaProd">${producto.createdAt}</td>
            <td class="nomProd">${producto.nombre}</td>
            <td class="precioProd">${producto.precio}</td>

            <td><div class="col mb-3"> 
            <input type="number" pattern="[0-9]{10}" min="0" title="Debes ingresar solo números" class="form-control cantComp"  id="inputCantidadComprada " placeholder="Cantidad" aria-label="Cantidad" value = "0" name="numero">
            <input type="button" value="Agregar"  class="btnAgregar" onclick="addVenta(this.parentNode.parentNode.parentNode)" >
            </div></td>
        </tr>`
    });
    contenedor.innerHTML = resultado
}


fetch('https://api-ventas.matiasendres.repl.co/productos')
    .then(response => response.json())
    .then(data => mostrar(data))
//.then(data => console.log(data))


//capturar el form
const formVenta = document.querySelector('form')
const nombreCliente = document.getElementById('inputNombre')
const direccionCliente = document.getElementById('inputDireccion')
const telefonoCliente = document.getElementById('inputTelefono')
const emailCliente = document.getElementById('inputEmail')


//post de venta 
formVenta.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch('https://api-ventas.matiasendres.repl.co/ventas', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nombreCliente: nombreCliente.value,
            direccionCliente: direccionCliente.value,
            telefonoCliente: telefonoCliente.value,
            emailCliente: emailCliente.value,
            total: 3000
        })
    })
        .then(response => response.json())
        .then(data => console.log(data))
})


//llenar formulario venta 




function addVenta(nodo) {

    //console.log(nodo.querySelector('.cantComp').value);

    const idProd = nodo.querySelector('.idProd').innerHTML
    const cantProd = nodo.querySelector('.cantProd').innerHTML
    const fechaProd = nodo.querySelector('.fechaProd').innerHTML
    const nomProd = nodo.querySelector('.nomProd').innerHTML
    const precioProd = nodo.querySelector('.precioProd').innerHTML
    const cantComProd = nodo.querySelector('.cantComp').value


    let tBody = document.querySelector('#tbodyTicket')
    let fila = document.createElement("tr")

    fila.innerHTML =
        '<td>' + idProd +'</td>' +
        '<td>' +  cantProd  +'</td>'+
        '<td>' +  fechaProd  +'</td>' +
        '<td>' +  nomProd  +'</td>' +
        '<td>' +  precioProd  +'</td>' +
        '<td>' + cantComProd  +'</td>'+
        '<td>' + cantComProd * precioProd  +'</td>'
        ;
   
        tBody.appendChild(fila)
        montoTotal +=cantComProd * precioProd;
    }
