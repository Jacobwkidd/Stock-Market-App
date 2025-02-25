import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../Users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/Users/dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user && (await bcrypt.compare(password, user.password_hash))) {
      const { password_hash, ...result } = user;
      return result;
    }
    return null;
  }
  async register(email: string, password: string) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const createUserDto: CreateUserDto = {
      email,
      password_hash: hashedPassword,
      role: 'user', // Default role
    };

    return this.usersService.create(createUserDto);
  }
 
  async login(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
  
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    console.log('Password Valid:', isPasswordValid); // ✅ Debugging
  
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }
  
    return {
      token: this.jwtService.sign({ userId: user.id, email: user.email }),
    };
  }
}
