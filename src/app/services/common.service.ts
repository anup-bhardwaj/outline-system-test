import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  commonData = [
    { name: 'Jack', money: 10 },
    { name: 'Jill', money: 15 },
  ];
  constructor() {}
}
