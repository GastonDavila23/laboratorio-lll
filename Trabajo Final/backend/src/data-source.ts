import { DataSource } from 'typeorm';
import 'reflect-metadata';
import { Cliente } from './entities/Cliente';
import { PedidoVenta } from './entities/PedidoVenta';
import { PedidoVentaDetalle } from './entities/PedidoVentaDetalle';
import { Producto } from './entities/Producto';
import 'reflect-metadata';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "pedidosdb",
  synchronize: true,
  logging: false,
  entities: [Cliente, PedidoVenta, PedidoVentaDetalle, Producto],
});
