import { Module } from '@nestjs/common';
import { Lab1ZimenkoService } from './lab1-zimenko.service';
import { Lab1ZimenkoController } from './lab1-zimenko.controller';

@Module({
  providers: [Lab1ZimenkoService],
  controllers: [Lab1ZimenkoController]
})
export class Lab1ZimenkoModule {}
