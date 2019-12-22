import { LightOnCommand } from './light.on.command';
import { LightOffCommand } from './light.off.command';

export class RemoteControlInvoker {
  private lightOnCommand: LightOnCommand;
  private lightOffCommand: LightOffCommand;


  constructor(lightOnCommand: LightOnCommand, lightOffCommand: LightOffCommand) {
    this.lightOnCommand = lightOnCommand;
    this.lightOffCommand = lightOffCommand;
  }

  turnOnLight() {
    this.lightOnCommand.execute();
  }

  turnOffLight() {
    this.lightOffCommand.execute();
  }
}
