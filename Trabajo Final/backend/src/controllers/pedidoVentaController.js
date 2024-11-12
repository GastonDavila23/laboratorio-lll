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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPedidosByFecha = exports.getPedidoByComprobante = exports.getPedidosVenta = exports.deletePedidoVenta = exports.updatePedidoVenta = exports.createPedidoVenta = void 0;
const data_source_1 = require("../data-source");
const PedidoVenta_1 = require("../entities/PedidoVenta");
const typeorm_1 = require("typeorm");
const createPedidoVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { idcliente, fechaPedido, nroComprobante, formaPago, observaciones, totalPedido } = req.body;
        const pedidoVenta = new PedidoVenta_1.PedidoVenta();
        pedidoVenta.cliente = idcliente;
        pedidoVenta.fechaPedido = new Date(fechaPedido);
        pedidoVenta.nroComprobante = nroComprobante;
        pedidoVenta.formaPago = formaPago;
        pedidoVenta.observaciones = observaciones;
        pedidoVenta.totalPedido = totalPedido;
        yield data_source_1.AppDataSource.manager.save(pedidoVenta);
        res.status(201).json(pedidoVenta);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al crear el pedido de venta', error });
    }
});
exports.createPedidoVenta = createPedidoVenta;
const updatePedidoVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const { idcliente, fechaPedido, nroComprobante, formaPago, observaciones, totalPedido } = req.body;
        const pedidoVenta = yield data_source_1.AppDataSource.manager.findOneBy(PedidoVenta_1.PedidoVenta, { id: parseInt(id) });
        if (!pedidoVenta) {
            res.status(404).json({ message: 'Pedido de venta no encontrado' });
            return;
        }
        pedidoVenta.cliente = idcliente;
        pedidoVenta.fechaPedido = new Date(fechaPedido);
        pedidoVenta.nroComprobante = nroComprobante;
        pedidoVenta.formaPago = formaPago;
        pedidoVenta.observaciones = observaciones;
        pedidoVenta.totalPedido = totalPedido;
        yield data_source_1.AppDataSource.manager.save(pedidoVenta);
        res.status(200).json(pedidoVenta);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al actualizar el pedido de venta', error });
    }
});
exports.updatePedidoVenta = updatePedidoVenta;
const deletePedidoVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const pedidoVenta = yield data_source_1.AppDataSource.manager.findOneBy(PedidoVenta_1.PedidoVenta, { id: parseInt(id) });
        if (!pedidoVenta) {
            res.status(404).json({ message: 'Pedido de venta no encontrado' });
            return;
        }
        yield data_source_1.AppDataSource.manager.remove(pedidoVenta);
        res.status(200).json({ message: 'Pedido de venta eliminado exitosamente' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error al eliminar el pedido de venta', error });
    }
});
exports.deletePedidoVenta = deletePedidoVenta;
const getPedidosVenta = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pedidosVenta = yield data_source_1.AppDataSource.manager.find(PedidoVenta_1.PedidoVenta, {
            relations: ['cliente'],
        });
        res.status(200).json(pedidosVenta);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al obtener los pedidos de venta', error });
    }
});
exports.getPedidosVenta = getPedidosVenta;
const getPedidoByComprobante = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nroComprobante } = req.params;
        const pedidoVenta = yield data_source_1.AppDataSource.manager.findOneBy(PedidoVenta_1.PedidoVenta, {
            nroComprobante: parseInt(nroComprobante),
        });
        if (!pedidoVenta) {
            res.status(404).json({ message: 'Pedido de venta no encontrado' });
            return;
        }
        res.status(200).json(pedidoVenta);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al buscar el pedido de venta', error });
    }
});
exports.getPedidoByComprobante = getPedidoByComprobante;
const getPedidosByFecha = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fechaInicio, fechaFin } = req.query;
        if (!fechaInicio || !fechaFin) {
            res.status(400).json({ message: 'Debe proporcionar fechaInicio y fechaFin' });
            return;
        }
        const pedidosVenta = yield data_source_1.AppDataSource.manager.find(PedidoVenta_1.PedidoVenta, {
            where: {
                fechaPedido: (0, typeorm_1.Between)(new Date(fechaInicio), new Date(fechaFin)),
            },
        });
        res.status(200).json(pedidosVenta);
    }
    catch (error) {
        res.status(500).json({ message: 'Error al buscar pedidos por rango de fechas', error });
    }
});
exports.getPedidosByFecha = getPedidosByFecha;
