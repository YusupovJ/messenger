"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const envConfig = {
    port: parseInt(process.env.PORT) || 7070,
    database: {
        host: process.env.DB_HOST,
        name: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        port: parseInt(process.env.DB_PORT),
    },
};
console.log(envConfig);
exports.default = envConfig;
//# sourceMappingURL=envConfig.js.map