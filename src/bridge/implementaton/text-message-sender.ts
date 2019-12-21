import { IMessageSender } from './message-sender.interface';
import twilio from 'twilio';
import { IMessageOptions } from '../abstraction/message-options.interface';

export class TextMessageSender implements IMessageSender {
  private _client: any;

  constructor() {
    const accountSid = 'ACebae142fd3b54e1ef8049f1b57cdcb55';
    const authToken = 'e4efa6d4e5fd95474d8ba14428e853cc';
    this._client = twilio(accountSid, authToken);
  }

  public sendMessage(options: IMessageOptions): boolean {
    console.log(TextMessageSender.name, 'Sending text message...');

    return this._client.messages
      .create({
        body: options.message,
        from: '+12052930187',
        to: options.to,
      })
      .then((message: { sid: any; }) => {
        console.log(TextMessageSender.name, 'Message was send: ', message.sid);
        return true;
      })
      .catch((error: any) => {
        console.log(TextMessageSender.name, 'Message was not send', error);
        return false;
      });
  }
}
