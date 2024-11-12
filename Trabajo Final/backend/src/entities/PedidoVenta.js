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
exports.PedidoVenta = void 0;
const typeorm_1 = require("typeorm");
const Cliente_1 = require("./Cliente");
let PedidoVenta = class PedidoVenta {
};
exports.PedidoVenta = PedidoVenta;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PedidoVenta.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Cliente_1.Cliente),
    (0, typeorm_1.JoinColumn)({ name: 'idcliente' }),
    __metadata("design:type", Cliente_1.Cliente)
], PedidoVenta.prototype, "cliente", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], PedidoVenta.prototype, "fechaPedido", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], PedidoVenta.prototype, "nroComprobante", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PedidoVenta.prototype, "formaPago", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], PedidoVenta.prototype, "observaciones", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], PedidoVenta.prototype, "totalPedido", void 0);
exports.PedidoVenta = PedidoVenta = __decorate([
    (0, typeorm_1.Entity)()
], PedidoVenta);
