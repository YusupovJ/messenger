"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const envConfig_1 = require("./config/envConfig");
const bootstrap = async () => {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const { port } = envConfig_1.default;
    await app.listen(port, () => {
        console.log(`Server started http://localhost:${port}`);
    });
};
bootstrap();
//# sourceMappingURL=main.js.map