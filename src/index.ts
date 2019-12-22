import { RemoteControlInvoker } from './command/remote.control.invoker';
import { LightOffCommand } from './command/light.off.command';
import { LampReceiver } from './command/lamp.receiver';
import { LightOnCommand } from './command/light.on.command';

const lamp = new LampReceiver();
const offCommand = new LightOffCommand(lamp);
const onCommand = new LightOnCommand(lamp);
const invoker = new RemoteControlInvoker(onCommand, offCommand);
console.log(invoker.turnOnLight());
console.log(invoker.turnOffLight());
console.log(invoker.turnOffLight());
