import { Controller, Post, Body } from '@nestjs/common';
import { PasskeyService } from './passkey.service';

@Controller('auth')
export class PasskeyController {
  constructor(private readonly passkeyService: PasskeyService) {}

  @Post('verify-login')
  verifyLogin(@Body() body: any) {
    const userId = 'demo-user'; // eventually replace with session or DB
    const { response, rememberMe } = body;
    return this.passkeyService.verifyLogin(response, userId, rememberMe);
  }

  @Post('generate-login-options')
  generateLoginOptions(@Body('userId') userId: string) {
    return this.passkeyService.generateLoginOptions(userId);
  }
}
