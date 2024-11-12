import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { PedidoVenta } from '../entities/PedidoVenta';
import { Between } from 'typeorm';

export const createPedidoVenta = async (req: Request, res: Response): Promise<void> => {
  try {
    const { idcliente, fechaPedido, nroComprobante, formaPago, observaciones, totalPedido } = req.body;
    const pedidoVenta = new PedidoVenta();
    pedidoVenta.cliente = idcliente;
    pedidoVenta.fechaPedido = new Date(fechaPedido);
    pedidoVenta.nroComprobante = nroComprobante;
    pedidoVenta.formaPago = formaPago;
    pedidoVenta.observaciones = observaciones;
    pedidoVenta.totalPedido = totalPedido;

    await AppDataSource.manager.save(pedidoVenta);
    res.status(201).json(pedidoVenta);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el pedido de venta', error });
  }
};

export const updatePedidoVenta = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const { idcliente, fechaPedido, nroComprobante, formaPago, observaciones, totalPedido } = req.body;

    const pedidoVenta = await AppDataSource.manager.findOneBy(PedidoVenta, { id: parseInt(id) });

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

    await AppDataSource.manager.save(pedidoVenta);
    res.status(200).json(pedidoVenta);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el pedido de venta', error });
  }
};

export const deletePedidoVenta = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const pedidoVenta = await AppDataSource.manager.findOneBy(PedidoVenta, { id: parseInt(id) });

    if (!pedidoVenta) {
      res.status(404).json({ message: 'Pedido de venta no encontrado' });
      return;
    }

    await AppDataSource.manager.remove(pedidoVenta);
    res.status(200).json({ message: 'Pedido de venta eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el pedido de venta', error });
  }
};

export const getPedidosVenta = async (req: Request, res: Response): Promise<void> => {
  try {
    const pedidosVenta = await AppDataSource.manager.find(PedidoVenta, {
      relations: ['cliente'],
    });
    res.status(200).json(pedidosVenta);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los pedidos de venta', error });
  }
};

export const getPedidoByComprobante = async (req: Request, res: Response): Promise<void> => {
  try {
    const { nroComprobante } = req.params;
    const pedidoVenta = await AppDataSource.manager.findOneBy(PedidoVenta, {
      nroComprobante: parseInt(nroComprobante),
    });

    if (!pedidoVenta) {
      res.status(404).json({ message: 'Pedido de venta no encontrado' });
      return;
    }

    res.status(200).json(pedidoVenta);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar el pedido de venta', error });
  }
};

export const getPedidosByFecha = async (req: Request, res: Response): Promise<void> => {
  try {
    const { fechaInicio, fechaFin } = req.query;

    if (!fechaInicio || !fechaFin) {
      res.status(400).json({ message: 'Debe proporcionar fechaInicio y fechaFin' });
      return;
    }

    const pedidosVenta = await AppDataSource.manager.find(PedidoVenta, {
      where: {
        fechaPedido: Between(new Date(fechaInicio as string), new Date(fechaFin as string)),
      },
    });

    res.status(200).json(pedidosVenta);
  } catch (error) {
    res.status(500).json({ message: 'Error al buscar pedidos por rango de fechas', error });
  }
};
