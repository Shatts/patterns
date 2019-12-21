import { IMessageSender } from '../implementaton/message-sender.interface';
import { IMessageOptions } from './message-options.interface';

export abstract class Message {
  protected messageSender: IMessageSender;

  protected constructor(messageSender: IMessageSender) {
    this.messageSender = messageSender;
  }

  public abstract send(options: IMessageOptions): Promise<boolean> | boolean;
}
