import { Injectable } from '@nestjs/common';
import { Buffer } from 'buffer';
import {
  generateAuthenticationOptions,
  verifyAuthenticationResponse,
  AuthenticationResponseJSON,
  VerifiedAuthenticationResponse,
} from '@simplewebauthn/server';

const challengeStore = new Map<string, string>();

@Injectable()
export class PasskeyService {
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
  ): Promise<VerifiedAuthenticationResponse> {
    const storedChallenge = challengeStore.get(userId);
  
    if (!storedChallenge) {
      throw new Error('No challenge found for user.');
    }
  
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
      }
    );
  
    return verification;
  }
  
}
