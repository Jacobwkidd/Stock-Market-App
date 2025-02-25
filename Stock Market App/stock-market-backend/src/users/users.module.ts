import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // ✅ Register User entity
  controllers: [UsersController],
  providers: [UsersService], // ✅ Provide UsersService
  exports: [UsersService], // ✅ Export UsersService for AuthModule to use
})
export class UsersModule {}
