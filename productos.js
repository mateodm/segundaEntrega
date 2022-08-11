const ubicacionProductos = document.getElementById("cardsProductos")
stock.forEach((producto) => {
const div = document.createElement("div")
div.classList.add("producto")
div.innerHTML = `
<div class="card col-md-12 mb-4">
<img id="imagen" src=${producto.img} class="card-img-top" alt="Panel Led Indoor 100w"/>
<div class="card-body">
<h5 id="nombre" class="card-title"> ${producto.nombre}</h5>
<p id="precio" class="card-text card-precio"> $${producto.precio} ars</p>
<button onclick="agregarAlCarrito(${producto.id})" class="btn d-block btn-success botones_productos">Agregar al carrito</button>
</div>
</div>
`
ubicacionProductos.appendChild(div)
})
let carrito = []
function agregarAlCarrito(id) {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Añadiste un producto al carrito',
        showConfirmButton: false,
        timer: 1500
      })
    console.log(id)
    let posicionObjeto = stock.findIndex(e => e.id == id)
    let obj = stock[posicionObjeto]
    carrito.push(obj)
    localStorage.setItem("carrito", JSON.stringify(carrito))
    console.log(carrito)
}
let contador = document.querySelector(".numero_carrito")
contador.innerText = 0
    if (localStorage.getItem("carrito") != null) {
    let data = JSON.parse(localStorage.getItem("carrito"))
    console.log (data)
    carrito.push(data)
    contador.innerText = data.length
    /* for (let i = 0; i < carrito.length; i++) {
        carrito.push(data[i])
    }
    console.log (carrito.length)
    contador.InnerText - carrito.length */
}

const ubicacionCarrito = document.getElementById("carrito-card")
stock.forEach((producto) => {
    const div = document.createElement("div")
    div.classList.add("producto")
    div.innerHTML = `
    <div class="card col-md-12 mb-4">
    <img id="imagen" src=${producto.img} class="card-img-top" alt="Panel Led Indoor 100w"/>
    <div class="card-body">
    <h5 id="nombre" class="card-title"> ${producto.nombre}</h5>
    <p id="precio" class="card-text card-precio"> $${producto.precio} ars</p>
    <button onclick="agregarAlCarrito(${producto.id})" class="btn d-block btn-success botones_productos">Agregar al carrito</button>
    </div>
    </div>
    `
ubicacionCarrito.appendChild(div)
})