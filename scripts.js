const { Moto, Auto } = require('./clases');

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

// /Marca: Peugeot // Modelo: 206 // Puertas: 4 // Precio: $200.000,00
// Marca: Honda // Modelo: Titan // Cilindrada: 125c // Precio: $60.000,00
// Marca: Peugeot // Modelo: 208 // Puertas: 5 // Precio: $250.000,00
// Marca: Yamaha // Modelo: YBR // Cilindrada: 160c // Precio: $80.500,50
// =============================
// Vehículo más caro: Peugeot 208
// Vehículo más barato: Honda Titan
// Vehículo que contiene en el modelo la letra ‘Y’: Yamaha YBR $80.500,50

// Función que imprime la información de los Vehiculos
function imprimirInfoVehiculos(lista) {
	const formatterPeso = new Intl.NumberFormat('es-AR', {
		style: 'currency',
		currency: 'ARG',
		minimumFractionDigits: 0,
	});

	lista.forEach((elem) => {
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

}

module.exports = {
	calcularMasBarato,
	calcularMasCaro,
	encontrarLetraY,
	imprimirInfoVehiculos,
};
