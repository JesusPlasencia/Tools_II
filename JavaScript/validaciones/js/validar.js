function validar()
{
    /*VALIDAR NOMBRE*/
    var nombre = document.frmDetalle.txtNombre.value;
    if(nombre.length == 0)
    {
        alert("Tiene que ingresar un nombre");
        document.frmDetalle.txtNombre.focus();
    }
    else
    {
        document.frmDetalle.rNombre.value = nombre;
    }

    /*VALIDAR EDAD*/
    var edad = document.frmDetalle.txtEdad.value;
    if(edad == "")
    {
        alert("Tiene que ingresar una edad");
        document.frmDetalle.txtNombre.focus();
    }
    else
    {
        if(edad > 0 && edad < 18)
        {
            document.frmDetalle.rEdad.value = "Usted es menor de edad";
            document.frmDetalle.rEdad.style = "background:#ff8000";
        }
        else
        {
            document.frmDetalle.rEdad.value = "Usted es mayor de edad";
            document.frmDetalle.rEdad.style = "border: 5px solid #ff8000";
        }
    }

    /*VALIDAR AFICIÓN*/
    if(document.frmDetalle.aficiones.selectedIndex == 0)
    {
        alert("Debe elegir una afición");
        document.frmDetalle.rAficion.value = '';
        document.frmDetalle.aficiones.focus();
    }
    else
    {
        var aficiones = document.frmDetalle.aficiones;
        var seleccion = aficiones.options[aficiones.selectedIndex].text;
        document.frmDetalle.rAficion.value = seleccion;
    }
}