import { TextMessageSender } from './bridge/implementaton/text-message-sender';
import { EmailMessageSender } from './bridge/implementaton/email-message-sender';
import { TextMessage } from './bridge/abstraction/text-message';
import { EmailMessage } from './bridge/abstraction/email-message';
import { AbstractFactoryExample } from './abstract-factory/abstract.factory.example';
import { ComicsGameFactory } from './abstract-factory/comics.game.factory';
import { ChainExample } from './chain-of-responsobility/chain.example';

/*const textMessageSender = new TextMessageSender();
const textMessage = new TextMessage(textMessageSender);
textMessage.send({to: '+380956848517', message: 'testing...'});

const emailMessageSender = new EmailMessageSender();
const emailMessage = new EmailMessage(emailMessageSender);
emailMessage.send({to: 'kristina.shatts@gmail.com', subject: 'test', message: 'testing...'});*/
//new AbstractFactoryExample().run(new ComicsGameFactory());

console.log(new ChainExample().run());
