import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Input() name: string = '';
  @Input() layout: string = 'row';
  @Input() money: number | undefined;
  @Input() index: number | undefined;
  @Output() currentIndex = new EventEmitter<number>();

  constructor(private commonService: CommonService) {}

  subsctractMoney(index: number) {
    this.commonService.commonData[index].money -= 10;
  }

  getMoney() {
    this.currentIndex.emit(this.index);
  }
}
