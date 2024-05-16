import { config } from "dotenv";

config();

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

export default envConfig;
