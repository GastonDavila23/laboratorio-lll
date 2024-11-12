"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const API_URL = 'http://localhost:3000/api/pedidos';
// Cargar lista de pedidos
function loadPedidos() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(API_URL);
        const pedidos = yield response.json();
        const tableBody = document.querySelector('#pedidosTable tbody');
        tableBody.innerHTML = '';
        pedidos.forEach((pedido) => {
            const row = document.createElement('tr');
            row.innerHTML = `
      <td>${pedido.id}</td>
      <td>${pedido.cliente.razonSocial}</td>
      <td>${pedido.fechaPedido}</td>
      <td>${pedido.totalPedido}</td>
      <td>
        <button onclick="editPedido(${pedido.id})">Editar</button>
        <button onclick="deletePedido(${pedido.id})">Eliminar</button>
      </td>
    `;
            tableBody.appendChild(row);
        });
    });
}
// Guardar pedido
function savePedido() {
    return __awaiter(this, void 0, void 0, function* () {
        const id = document.querySelector('#pedidoId').value;
        const cliente = document.querySelector('#cliente').value;
        const fechaPedido = document.querySelector('#fechaPedido').value;
        const nroComprobante = document.querySelector('#nroComprobante').value;
        const formaPago = document.querySelector('#formaPago').value;
        const observaciones = document.querySelector('#observaciones').value;
        const pedido = {
            idcliente: cliente,
            fechaPedido,
            nroComprobante,
            formaPago,
            observaciones,
        };
        const method = id ? 'PUT' : 'POST';
        const url = id ? `${API_URL}/${id}` : API_URL;
        yield fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(pedido),
        });
        loadPedidos();
    });
}
// Eliminar pedido (baja lógica)
function deletePedido(id) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        loadPedidos();
    });
}
// Búsqueda por número de comprobante
function searchByComprobante() {
    return __awaiter(this, void 0, void 0, function* () {
        const nroComprobante = document.querySelector('#searchComprobante').value;
        const response = yield fetch(`${API_URL}/comprobante/${nroComprobante}`);
        const pedido = yield response.json();
        console.log(pedido);
    });
}
// Generar PDF
function generatePdf() {
    alert('Función para generar PDF aún no implementada.');
}
// Inicialización
document.getElementById('savePedido').addEventListener('click', savePedido);
document.getElementById('searchByComprobante').addEventListener('click', searchByComprobante);
document.getElementById('generatePdf').addEventListener('click', generatePdf);
loadPedidos();
