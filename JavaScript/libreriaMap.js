/*PEDIDOS*/
let pedidos =
[
    {
        "numero":"P-0000025",
        "total": 250.00,
        "cliente":
        {
            "nombres":"Juan",
            "apellidos":"Perez Prieto"
        }
    },
    {
        "numero":"P-0000026",
        "total": 180.00,
        "cliente":
        {
            "nombres":"Julia",
            "apellidos":"Castro Villegas"
        }
    },
    {
        "numero":"P-0000027",
        "total": 180.00,
        "cliente":
        {
            "nombres":"Julia",
            "apellidos":"Castro Villegas"
        }
    },
    {
        "numero":"P-0000028",
        "total": 180.00,
        "cliente":
        {
            "nombres":"Julia",
            "apellidos":"Castro Villegas"
        }
    }
]

// pedidos.map((item, index, array) =>
//     {
//         document.write("<h3>" + index + "</h3>");
//         document.write("<ul>");
//         document.write("<li>"+ item.numero + "</li>")
//         document.write("<li>"+ item.total + "</li>")
//         document.write("<li>"+ item.cliente.nombres + "</li>")
//         document.write("<li>"+ item.cliente.apellidos + "</li>")
//         document.write("</ul>");
//     }
// )

/*PRODUCTOS*/
let productos =
[
    {
        "id": "P0001",
        "categoria":
        {
            "idCategoria":"C0001",
            "nombre":"Televisor",
            "activo":true
        },
        "marca":
        {
            "idMarca":"M0001",
            "nombre":"Samsung"
        },
        "nombre":'TELEVISOR 50" SAMSUNG UHD 4K',
        "descripcion":"",
        "precio": 4500.00,
        "url":"",
        "destacado":true,
        "activo":true
    },
    {
        "id": "P0002",
        "categoria":
        {
            "idCategoria":"C0001",
            "nombre":"Televisor",
            "activo":true
        },
        "marca":
        {
            "idMarca":"M0002",
            "nombre":"LG"
        },
        "nombre":'SMART TV 75" LG UHD 4K',
        "descripcion":"",
        "precio": 9000.00,
        "url":"",
        "destacado":true,
        "activo":true
    },
    {
        "id": "P0003",
        "categoria":
        {
            "idCategoria":"C0002",
            "nombre":"Laptop",
            "activo":true
        },
        "marca":
        {
            "idMarca":"M0001",
            "nombre":"Lenovo"
        },
        "nombre":'Laptop Lenovo Thinkpad 13"',
        "descripcion":"",
        "precio": 2000.00,
        "url":"",
        "destacado":true,
        "activo":true
    }
]

productos.map((item, index)=>
    {
        document.write("<h3>" + "<span>Producto: </span>" + (index+1) + "</h3>");
        document.write("<ul>");
        document.write("<li>"+ "<span>Categoría: </span>" + item.categoria.nombre + "</li>")
        document.write("<li>"+ "<span>Marca: </span>" + item.marca.nombre + "</li>")
        document.write("<li>"+ "<span>Nombre: </span>" + item.nombre + "</li>")
        document.write("<li>"+ "<span>Precio: </span>" + item.precio + "</li>")
        document.write("</ul>");
    }
)