import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChildComponent } from '../child/child.component';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  @ViewChild('childComponent', { static: false })
  public childComponent: ChildComponent;
  layout = 'column';
  submitted = false;
  addContentForm: FormGroup;

  commonData = this.commonService.commonData;
  constructor(private commonService: CommonService, public fb: FormBuilder) {
    this.addContentForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      money: ['', [Validators.required]],
    });
  }

  addMoney(index: number) {
    this.commonService.commonData[index].money += 10;
  }
  subtractMoney(index: number) {
    this.childComponent?.subsctractMoney(index);
  }

  addMoneyChild(index: any) {
    this.commonService.commonData[index].money += 5;
  }

  layoutChange(event: any) {
    this.layout = event.target.value + ' wrap';
    console.log(event.target.value);
  }

  onSubmit() {
    this.submitted = true;
    if (this.addContentForm.valid) {
      const data = {
        name: this.addContentForm.value.name,
        money: this.addContentForm.value.money,
      };
      this.commonService.commonData.push(data);
      this.addContentForm.reset()
      this.submitted = false
    }
  }

  get f() {
    return this.addContentForm.controls;
  }
}
