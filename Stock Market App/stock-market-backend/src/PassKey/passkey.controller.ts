import { Controller, Post, Body } from '@nestjs/common';
import { PasskeyService } from './passkey.service';

@Controller('auth')
export class PasskeyController {
  constructor(private readonly passkeyService: PasskeyService) {}

  @Post('verify-login')
  verifyLogin(@Body() body: any) {
    const userId = 'demo-user'; // In real use, get from session or request
    return this.passkeyService.verifyLogin(body, userId);
  }
  @Post('generate-login-options')
  generateLoginOptions(@Body('userId') userId: string) {
    return this.passkeyService.generateLoginOptions(userId);
  }
}
