// Constructor del Vehiculo
function Vehiculo(marca, modelo, precio) {
	this.marca = marca;
	this.modelo = modelo;
	this.precio = precio;
}

// Constructor del Auto que hereda de Vehiculo
function Auto(marca, modelo, precio, puertas) {
	Vehiculo.call(this, marca, modelo, precio);
	this.puertas = puertas;
}

// Constructor de Moto que hereda de Vehiculo
function Moto(marca, modelo, precio, cilindrica) {
	Vehiculo.call(this, marca, modelo, precio);
	this.cilindrica = cilindrica;
}

module.exports = {
	Auto,
	Moto,
};
