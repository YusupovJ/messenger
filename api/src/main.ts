import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import envConfig from "./config/envConfig";

const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  const { port } = envConfig;

  await app.listen(port, () => {
    console.log(`Server started http://localhost:${port}`);
  });
};

bootstrap();
