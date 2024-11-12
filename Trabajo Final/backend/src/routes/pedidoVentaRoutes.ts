import { Router } from 'express';
import {
  createPedidoVenta,
  updatePedidoVenta,
  deletePedidoVenta,
  getPedidosVenta,
  getPedidoByComprobante,
  getPedidosByFecha,
} from '../controllers/pedidoVentaController';

const router = Router();

router.post('/pedidos', createPedidoVenta);
router.put('/pedidos/:id', updatePedidoVenta);
router.delete('/pedidos/:id', deletePedidoVenta);
router.get('/pedidos', getPedidosVenta);
router.get('/pedidos/comprobante/:nroComprobante', getPedidoByComprobante);
router.get('/pedidos/fechas', getPedidosByFecha);

export default router;
