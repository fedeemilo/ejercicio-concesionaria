const { Moto, Auto } = require('./clases');
const formatterPeso = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARG',
    minimumFractionDigits: 0,
});

// Encontrar Vehiculo más caro
const calcularMasCaro = (lista) => {
	return lista.reduce((anterior, actual) =>
		anterior.precio > actual.precio ? anterior : actual
	);
};

// Encontrar Vehiculo más barato
const calcularMasBarato = (lista) => {
	return lista.reduce((anterior, actual) =>
		anterior.precio < actual.precio ? anterior : actual
	);
};

// Recorre los vehículos y guarda en una lista a aquellos que contienen la letra 'Y' en el modelo
const encontrarLetraY = (lista) => {
	let tienenY = [];
	lista.forEach((elem) => {
		if (elem.modelo.indexOf('Y') !== -1) {
			tienenY.push(elem);
		}
	});
	return tienenY;
};

// Función que imprime la información de los Vehiculos
const imprimirInfoVehiculos = (lista) => {

    // Comparo los precios para imprimir de mayor a menor
    let compararPrecios = (a, b) => {
        if (a.precio > b.precio) return -1;
    }
	
	lista.sort(compararPrecios).forEach((elem) => {
		// Verifico de que tipo es el vehiculo
		if (elem instanceof Auto) {
			console.log(
				`Marca: ${elem.marca} // Modelo: ${elem.modelo} // Puertas: ${
					elem.puertas
				} // Precio: $${formatterPeso.format(elem.precio).slice(4)}`
			);
		} else if (elem instanceof Moto) {
			console.log(
				`Marca: ${elem.marca} // Modelo: ${elem.modelo} // Puertas: ${
					elem.cilindrica
				} // Precio: $${formatterPeso.format(elem.precio).slice(4)}`
			);
		}
	});
	console.log(
		'===================================================================='
	);
}

// Función que imprime los resultados de los calculos
const imprimirCalculosVehiculos = (lista) => {

    let vehiculoMasCaro = calcularMasCaro(lista);
    let vehiculoMasBarato = calcularMasBarato(lista);
    let vehiculoConY = encontrarLetraY(lista);

    console.log(`Vehículo más caro: ${vehiculoMasCaro.marca} ${vehiculoMasCaro.modelo}`);
    console.log(`Vehículo más barato: ${vehiculoMasBarato.marca} ${vehiculoMasBarato.modelo}`);
    vehiculoConY.forEach(vehiculo => {
        console.log(`Vehículo que contiene en el modelo la letra 'Y': ${vehiculo.marca} ${vehiculo.modelo} $${formatterPeso.format(vehiculo.precio).slice(4)}`);
    })

}

module.exports = {
    imprimirInfoVehiculos,
    imprimirCalculosVehiculos
};
