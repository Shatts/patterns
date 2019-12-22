export class LampReceiver {
  private state: string = 'off';

  on() {
    if(this.state !== 'on') {
      this.state = 'on';
    }
    console.log(this.state);
  }

  off() {
    if(this.state !== 'off') {
      this.state = 'off';
    }
    console.log(this.state);
  }
}
