import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist';

@Injectable()
export class AppService {
  
  constructor(
    private readonly jwtService: JwtService
  ){}

  async validate(token: string){
    try {
      return this.jwtService.verify(token, {
        secret: process.env.TOKEN_KEY
      }).message === "hello";
    } catch (err) {
      throw new UnauthorizedException('Invalid token');
    }
  }

  async generate(message: string){
    return this.jwtService.sign({message: message}, {
      secret: process.env.TOKEN_KEY
    })
  }
}
