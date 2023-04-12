// Defino variables con el precio de cada producto

let almohadon = 2600;
let cuaderno = 2500;
let combo = 7600;

// Defino variables que cuenten la cantidad de cada producto que se agregó al carrito

let almohadonCantidad = 0;
let cuadernoCantidad = 0;
let comboCantidad = 0;

// Defino una variable que lleve el precio total acumulado

let precioTotal = 0;

// Defino una función que sume una cantidad al precio total, y después muestre el nuevo precio total

function sumarPrecio(precioProducto) {
    precioTotal = precioTotal + precioProducto;
    alert("El precio total de su compra hasta el momento es de $" + precioTotal);
}

// Defino dos variables que guardan las opciones que elige el usuario

let seleccionBienvenida;
let seleccionCarrito;

// Defino el ciclo por el cual el usuario agrega productos al carrito

while (seleccionCarrito != 3) {
    seleccionBienvenida = Number(prompt("¡Bienvenido a la tienda de Santa Punk! \n\nElegí un producto para agregar al carrito: \n\n 1. Almohadón Harry Potter - $ 2600 \n 2. Cuaderno Totoro - $ 2500 \n 3. Combo Mario Bros - $ 7600 \n\n También podés acceder al carrito para revisar los productos elegidos y ver el precio final: \n\n4. Ver carrito"));

    switch (seleccionBienvenida) {

        case 1:
            sumarPrecio(almohadon);
            almohadonCantidad = almohadonCantidad + 1;
            break;

        case 2:
            sumarPrecio(cuaderno);
            cuadernoCantidad = cuadernoCantidad + 1;
            break;

        case 3:
            sumarPrecio(combo);
            comboCantidad = comboCantidad + 1;
            break;

        case 4:
            seleccionCarrito = Number(prompt("Carrito \n\n Almohadon Harry Potter - " + almohadonCantidad + " unidad/es \n Cuaderno Totoro - " + cuadernoCantidad + " unidad/es \n Combo Mario Bros - " + comboCantidad + " unidad/es \n\n Precio total: $ " + precioTotal + "\n\n 1. Elegir otro producto \n 2. Vaciar carrito \n 3. Finalizar compra"))

            if (seleccionCarrito == 2) {
                precioTotal = 0;
                almohadonCantidad = 0;
                cuadernoCantidad = 0;
                comboCantidad = 0;
            }
            else if ( (seleccionCarrito != 1) && (seleccionCarrito != 3) ) {
                alert("Comando no reconocido. Por favor, ingrese el número correspondiente a la opción elegida.")
            }

            break;

        default:
            alert("Comando no reconocido. Por favor, ingrese el número correspondiente a la opción elegida.");
            break;
    }

}

alert("El precio total de su compra es $" + precioTotal + "\n\n¡Gracias por elegirnos!");