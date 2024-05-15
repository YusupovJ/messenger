"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
dotenv_1.default.config();
const envConfig = {
    PORT: process.env.PORT,
};
exports.default = envConfig;
//# sourceMappingURL=envConfig.js.map