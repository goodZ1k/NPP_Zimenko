import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './User';


@Module({
  imports: [TypeOrmModule.forRoot(
    {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    username: 'root',
    password: '218804',
    database: 'npp',
    entities: [User],
    synchronize: true,
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
