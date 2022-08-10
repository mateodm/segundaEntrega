const ubicacionProductos = document.getElementById("cardsProductos")
let carrito = []

stock.forEach((producto) => {
const div = document.createElement("div")
div.classList.add("producto")
div.innerHTML = `
<div class="card col-md-12 mb-4">
<img id="imagen" src=${producto.img} class="card-img-top" alt="Panel Led Indoor 100w"/>
<div class="card-body">
<h5 id="nombre" class="card-title"> ${producto.nombre}</h5>
<p id="precio" class="card-text card-precio"> $${producto.precio} ars</p>
<button onclick="agregarAlCarrito()" class="btn d-block btn-success botones_productos">Agregar al carrito</button>
</div>
</div>
`
ubicacionProductos.appendChild(div)
})
function agregarAlCarrito() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Añadiste un producto al carrito',
        showConfirmButton: false,
        timer: 1500
      })
    const imagenProducto = document.getElementById("imagen").src
    const nombreProducto = document.getElementById("nombre").textContent
    const precioProducto = document.getElementById("precio").textContent
    console.log(imagenProducto + nombreProducto + precioProducto)
}