function compra(bebidas, frutas, abarrotes)
{
    var pagoTotal = bebidas + frutas+ abarrotes;
    return pagoTotal;
}

document.write('Las compras de un día en el Supermercado:')
document.write('<br>')
document.write(compra(80.20,15.99, 60.30));