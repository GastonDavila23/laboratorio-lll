const API_URL = 'http://localhost:3000/api/pedidos';

// Cargar lista de pedidos
async function loadPedidos() {
  const response = await fetch(API_URL);
  const pedidos = await response.json();

  const tableBody = document.querySelector('#pedidosTable tbody')!;
  tableBody.innerHTML = '';

  pedidos.forEach((pedido: any) => {
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
}

// Guardar pedido
async function savePedido() {
  const id = (document.querySelector('#pedidoId') as HTMLInputElement).value;
  const cliente = (document.querySelector('#cliente') as HTMLSelectElement).value;
  const fechaPedido = (document.querySelector('#fechaPedido') as HTMLInputElement).value;
  const nroComprobante = (document.querySelector('#nroComprobante') as HTMLInputElement).value;
  const formaPago = (document.querySelector('#formaPago') as HTMLInputElement).value;
  const observaciones = (document.querySelector('#observaciones') as HTMLTextAreaElement).value;

  const pedido = {
    idcliente: cliente,
    fechaPedido,
    nroComprobante,
    formaPago,
    observaciones,
  };

  const method = id ? 'PUT' : 'POST';
  const url = id ? `${API_URL}/${id}` : API_URL;

  await fetch(url, {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(pedido),
  });

  loadPedidos();
}

// Eliminar pedido (baja lógica)
async function deletePedido(id: number) {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  loadPedidos();
}

// Búsqueda por número de comprobante
async function searchByComprobante() {
  const nroComprobante = (document.querySelector('#searchComprobante') as HTMLInputElement).value;
  const response = await fetch(`${API_URL}/comprobante/${nroComprobante}`);
  const pedido = await response.json();
  console.log(pedido);
}

// Generar PDF
function generatePdf() {
  alert('Función para generar PDF aún no implementada.');
}

// Inicialización
document.getElementById('savePedido')!.addEventListener('click', savePedido);
document.getElementById('searchByComprobante')!.addEventListener('click', searchByComprobante);
document.getElementById('generatePdf')!.addEventListener('click', generatePdf);

loadPedidos();
