import { Injectable } from '@angular/core';

@Injectable()
export class CounterService {

  activeToInactiveCounter: number = 0;
  inactiveToActiveCounter: number = 0;

  constructor() { }

  incrementActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log('Active to inactive: ' + this.activeToInactiveCounter);
  }

  incrementInactiveToActive() {
    this.inactiveToActiveCounter++;
    console.log('Inactive to active: ' + this.inactiveToActiveCounter);
  }
}
