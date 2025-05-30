import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PasskeyController } from './passkey.controller';
import { PasskeyService } from './passkey.service';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'defaultSecret', // use dotenv
      signOptions: { expiresIn: '1h' }, // default, override in service
    }),
  ],
  controllers: [PasskeyController],
  providers: [PasskeyService],
})
export class PasskeyModule {}
