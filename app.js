let resultado=''
const contenedor = document.getElementById('tbody')
const mostrar= (productos) => {
    productos.forEach(producto => {
        resultado +=`
        <tr>
            <td>${producto._id}</td>
            <td>${producto.categoria}</td>
            <td>${producto.createdAt}</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>

            <td><div class="col mb-3"> 
            <input type="number" pattern="[0-9]{10}"  title="Debes ingresar solo números" class="form-control" id="inputCantidadComprada " placeholder="Cantidad" aria-label="Cantidad" value = "0">
          </div></td>
        </tr>`
    });
    contenedor.innerHTML = resultado
}


fetch('https://api-ventas.matiasendres.repl.co/productos')
    .then(response => response.json())
    .then(data => mostrar(data))
    //.then(data => console.log(data))
    
