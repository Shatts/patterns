import { EmailNotifier } from './email.notifier';
import { PhoneNotifier } from './phone.notifier';
import { TelegramNotifier } from './telegram.notifier';
import { LevelsEnum } from './levels.enum';

export class ChainExample {
  run() {
    const emailNotifier = new EmailNotifier();
    const phoneNotifier = new PhoneNotifier();
    const telegramNotifier = new TelegramNotifier();

    emailNotifier.setNext(telegramNotifier);
    telegramNotifier.setNext(phoneNotifier);

    console.log(emailNotifier.handle(LevelsEnum.simple));
    console.log(emailNotifier.handle(LevelsEnum.important));
    console.log(emailNotifier.handle(LevelsEnum.urgent));
  }

}
