import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import envConfig from "./envConfig";

const { host, name, password, port, username } = envConfig.database;

const dbConfig: TypeOrmModuleOptions = {
  type: "mysql",
  host,
  port,
  username,
  password,
  database: name,
  synchronize: true,
  entities: [],
};

console.log(envConfig);

export default dbConfig;
