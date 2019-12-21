import { Handler } from './handler.interface';

export abstract class AbstractNotifier implements Handler {
  private nextNotifier: Handler | undefined;

  public setNext(handler: Handler): Handler {
    this.nextNotifier = handler;

    return handler;
  }

  public handle(request: string): string {
    if (this.nextNotifier) {
      return this.nextNotifier.handle(request);
    }

    return '';
  }
}
