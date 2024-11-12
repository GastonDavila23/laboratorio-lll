"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
require("reflect-metadata");
const Cliente_1 = require("./entities/Cliente");
const PedidoVenta_1 = require("./entities/PedidoVenta");
const PedidoVentaDetalle_1 = require("./entities/PedidoVentaDetalle");
const Producto_1 = require("./entities/Producto");
require("reflect-metadata");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "pedidosdb",
    synchronize: true,
    logging: false,
    entities: [Cliente_1.Cliente, PedidoVenta_1.PedidoVenta, PedidoVentaDetalle_1.PedidoVentaDetalle, Producto_1.Producto],
});
