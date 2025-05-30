import { Injectable } from '@nestjs/common';
import { Buffer } from 'buffer';
import {
  generateAuthenticationOptions,
  verifyAuthenticationResponse,
  AuthenticationResponseJSON,
  VerifiedAuthenticationResponse,
} from '@simplewebauthn/server';
import { JwtService } from '@nestjs/jwt';

const challengeStore = new Map<string, string>();

@Injectable()
export class PasskeyService {
  constructor(private readonly jwtService: JwtService) {}
  async generateLoginOptions(userId: string) {
    const options = await generateAuthenticationOptions({
      timeout: 60000,
      rpID: 'localhost',
      allowCredentials: [],
    });
  
    challengeStore.set(userId, options.challenge); // ✅ Now works
    return options;
  }
  

   async verifyLogin(
    responseBody: AuthenticationResponseJSON,
    userId: string,
    rememberMe: boolean,
  ): Promise<{ token: string }> {
    const storedChallenge = challengeStore.get(userId);
    if (!storedChallenge) throw new Error('No challenge found for user.');

    const verification = await verifyAuthenticationResponse(
    {
      response: responseBody,
      expectedChallenge: storedChallenge,
      expectedOrigin: 'http://localhost:4200',
      expectedRPID: 'localhost',
    },
    {
      credentialID: Buffer.from('mock-id'),
      credentialPublicKey: Buffer.from('bW9jay1wdWJsaWMta2V5', 'base64'),
      counter: 0,
    });




    if (!verification.verified) {
      throw new Error('Authentication failed');
    }

    const payload = { sub: userId };
    const expiresIn = rememberMe ? '30d' : '1h';

    const token = await this.jwtService.signAsync(payload, { expiresIn });

    return { token };
  }
  
}
