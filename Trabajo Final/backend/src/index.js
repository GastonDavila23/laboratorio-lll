"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const data_source_1 = require("./data-source");
const pedidoVentaRoutes_1 = __importDefault(require("./routes/pedidoVentaRoutes"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api', pedidoVentaRoutes_1.default);
data_source_1.AppDataSource.initialize()
    .then(() => {
    console.log('Base de datos conectada');
    app.listen(3000, () => {
        console.log('Servidor corriendo en http://localhost:3000');
    });
})
    .catch((error) => console.log('Error al conectar la base de datos:', error));
app.use((0, cors_1.default)({
    origin: 'http://127.0.0.1:5500', // URL donde Live Server ejecuta el frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
