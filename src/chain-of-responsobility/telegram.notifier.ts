import { AbstractNotifier } from './abstract.notifier';
import { LevelsEnum } from './levels.enum';

export class TelegramNotifier extends AbstractNotifier {
  public handle(request: string): string {
    if(request === LevelsEnum.important) {
      return 'Important notifier via telegram';
    }
    return super.handle(request);
  }
}
