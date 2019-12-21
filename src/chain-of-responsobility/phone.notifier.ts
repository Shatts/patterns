import { AbstractNotifier } from './abstract.notifier';
import { LevelsEnum } from './levels.enum';

export class PhoneNotifier extends AbstractNotifier {
  public handle(request: string): string {
    if(request === LevelsEnum.urgent) {
      return 'Urgent notifier via phone';
    }
    return super.handle(request);
  }
}
