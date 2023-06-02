"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
// export default {
//     FILE_HOST:
//     process.env.NODE_ENV ==="development"
//          ? "http://localhost:3200"
//          : "https://my-node-ecommerce.herokuapp.com"
// }
exports.default = {
    FILE_HOST: "http://localhost:3200"
};
