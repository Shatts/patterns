import { IMessageSender } from './message-sender.interface';
import * as nodemailer from 'nodemailer';
import { TestAccount } from 'nodemailer';
import { IMessageOptions } from '../abstraction/message-options.interface';

export class EmailMessageSender implements IMessageSender {
  private _transporter: nodemailer.Transporter | undefined;

  constructor() {}

  public async sendMessage(options: IMessageOptions): Promise<boolean> {
    console.log(EmailMessageSender.name, 'Sending email message...');
    if (!this._transporter) {
      await this.createTestAccount();
    }
    // @ts-ignore
    let info = await this._transporter.sendMail({
      from: '"Bla" <bla@example.com>',
      to: options.to,
      subject: options.subject,
      text: options.message,
    });

    console.log(EmailMessageSender.name, 'Message sent: %s', info.messageId);
    console.log(EmailMessageSender.name, 'Preview URL: %s', nodemailer.getTestMessageUrl(info));
    return true;
  }

  private async createTestAccount(): Promise<void> {
    try {
      const testAccount: TestAccount = await nodemailer.createTestAccount();
      this._transporter = nodemailer.createTransport(
        {
          host: 'smtp.ethereal.email',
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
            user: testAccount.user,
            pass: testAccount.pass,
          },
        },
      );
    } catch (error) {
      console.log(EmailMessageSender.name, 'Some error during creation of test account', error);
    }

  }
}
