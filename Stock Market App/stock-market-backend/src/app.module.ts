import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StocksModule } from './Stocks/stocks.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from 'config/database.config';
import { AuthController } from './Auth/auth.controller';
import { User } from './Users/entities/user.entity';
import { UsersModule } from './Users/users.module';
import { AuthModule } from './Auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), 
            StocksModule, TypeOrmModule.forRoot(databaseConfig), 
            TypeOrmModule.forFeature([User]),
            UsersModule, AuthModule],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule {}
