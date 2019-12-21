import { AbstractNotifier } from './abstract.notifier';
import { LevelsEnum } from './levels.enum';

export class EmailNotifier extends AbstractNotifier {
  public handle(request: string): string {
    if(request === LevelsEnum.simple) {
      return 'Simple notifier via email';
    }
    return super.handle(request);
  }
}
