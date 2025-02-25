import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StocksModule } from './stocks/stocks.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from 'config/database.config';
import { AuthController } from './Auth/auth.controller';
import { User } from './users/entities/user.entity';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), 
            StocksModule, TypeOrmModule.forRoot(databaseConfig), TypeOrmModule.forFeature([User])],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
