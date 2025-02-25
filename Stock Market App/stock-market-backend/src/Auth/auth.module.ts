import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from '../Users/users.module';
import { UsersService } from '../Users/users.service';
import { User } from '../Users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    UsersModule, 
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'A%9cZ8!eR2#tV5bS', 
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService],
  exports: [AuthService, JwtModule], 
})
export class AuthModule {}
