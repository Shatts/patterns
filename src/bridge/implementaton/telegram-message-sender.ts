import { IMessageSender } from './message-sender.interface';

export class TelegramMessageSender implements IMessageSender {
  public sendMessage(): boolean {
    console.log(TelegramMessageSender.name, 'Sending telegram message...');
    return true;
  }
}
