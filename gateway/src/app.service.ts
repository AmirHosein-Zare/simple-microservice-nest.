import { Injectable } from '@nestjs/common';
import { AppGateway } from './SendMessage';

@Injectable()
export class AppService {

  constructor(private readonly appGateway: AppGateway){}

  sendHello(message: string){
    this.appGateway.sendMessage(message);
  }
}

