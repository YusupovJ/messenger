"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const envConfig_1 = require("./envConfig");
const { host, name, password, port, username } = envConfig_1.default.database;
const dbConfig = {
    type: "mysql",
    host,
    port,
    username,
    password,
    database: name,
    synchronize: true,
    entities: [],
};
console.log(envConfig_1.default);
exports.default = dbConfig;
//# sourceMappingURL=dbConfig.js.map