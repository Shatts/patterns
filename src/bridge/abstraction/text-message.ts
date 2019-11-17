import { Message } from './message';
import { IMessageSender } from '../implementaton/message-sender.interface';
import { IMessageOptions } from './message-options.interface';

export class TextMessage extends Message {
  constructor(messageSender: IMessageSender) {
    super(messageSender);
    console.log(TextMessage.name, 'Creating text message');
  }

  send(options: IMessageOptions): Promise<boolean> | boolean {
    return this.messageSender.sendMessage(options);
  }
}
