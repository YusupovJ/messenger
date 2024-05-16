import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import dbConfig from "./config/dbConfig";

@Module({
  imports: [TypeOrmModule.forRoot(dbConfig)],
})
export class AppModule {}
