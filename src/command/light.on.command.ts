import { ICommand } from './icommand.interface';
import { LampReceiver } from './lamp.receiver';

export class LightOnCommand implements ICommand {
  private _lamp: LampReceiver;

  constructor(lamp: LampReceiver) {
    this._lamp = lamp;
  }

  execute(): void {
    this._lamp.on();
  }
}
