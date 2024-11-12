"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoVentaDetalle = void 0;
const typeorm_1 = require("typeorm");
const PedidoVenta_1 = require("./PedidoVenta");
const Producto_1 = require("./Producto");
let PedidoVentaDetalle = class PedidoVentaDetalle {
};
exports.PedidoVentaDetalle = PedidoVentaDetalle;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PedidoVentaDetalle.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => PedidoVenta_1.PedidoVenta),
    (0, typeorm_1.JoinColumn)({ name: 'idpedidoventa' }),
    __metadata("design:type", PedidoVenta_1.PedidoVenta)
], PedidoVentaDetalle.prototype, "pedidoVenta", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Producto_1.Producto),
    (0, typeorm_1.JoinColumn)({ name: 'idproducto' }),
    __metadata("design:type", Producto_1.Producto)
], PedidoVentaDetalle.prototype, "producto", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PedidoVentaDetalle.prototype, "cantidad", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], PedidoVentaDetalle.prototype, "subtotal", void 0);
exports.PedidoVentaDetalle = PedidoVentaDetalle = __decorate([
    (0, typeorm_1.Entity)()
], PedidoVentaDetalle);
