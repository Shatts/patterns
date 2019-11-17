import { TextMessageSender } from './bridge/implementaton/text-message-sender';
import { EmailMessageSender } from './bridge/implementaton/email-message-sender';
import { TelegramMessageSender } from './bridge/implementaton/telegram-message-sender';
import { TextMessage } from './bridge/abstraction/text-message';
import { EmailMessage } from './bridge/abstraction/email-message';

/*const textMessageSender = new TextMessageSender();
const textMessage = new TextMessage(textMessageSender);
textMessage.send({to: '+380956848517', message: 'testing...'});*/

/*const emailMessageSender = new EmailMessageSender();
const emailMessage = new EmailMessage(emailMessageSender);
emailMessage.send({to: 'kristina.shatts@gmail.com', subject: 'test', message: 'testing...'});*/
