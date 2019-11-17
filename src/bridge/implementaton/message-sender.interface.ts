import { IMessageOptions } from '../abstraction/message-options.interface';

export interface IMessageSender {
  sendMessage(options: IMessageOptions): Promise<boolean> | boolean;
}
