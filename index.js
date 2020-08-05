const http = require('http');
const PORT = 8080;
const {
    imprimirCalculosVehiculos,
	imprimirInfoVehiculos
} = require('./scripts');
const { Moto, Auto } = require('./clases');

// Creo las instancias de los Vehiculos
const autoUno = new Auto('Peugeot', '206', 200000, 4);
const autoDos = new Auto('Peugeot', '208', 250000, 5);
const motoUno = new Moto('Honda', 'Titan', 60000, '125c');
const motoDos = new Moto('Yamaha', 'YBR', 80500.5, '160c');

// Creo la lista de los Vehiculos
const listaVehiculos = [autoUno, autoDos, motoUno, motoDos];

const requestListener = function (req, res) {
	res.writeHead(200); 
	res.end();
};

imprimirInfoVehiculos(listaVehiculos);
imprimirCalculosVehiculos(listaVehiculos);

const server = http.createServer(requestListener);
server.listen(PORT, () => {
	console.log(`Servidor escuchando el puerto ${PORT}`);
});
