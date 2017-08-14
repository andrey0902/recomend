import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import 'rxjs/operator/debounceTime';

@Component({
  selector: 'validation-app',
  templateUrl: 'validation.component.html',
  styleUrls: ['validation.component.scss']
})

export class ValidationComponent implements OnInit, Input {
  @Input() public file: FormControl;
  @Input() public focus: any;
  public minLength: number;
  public actualLength: number;
  public requiredLength: number;
  public error: any;
  public dataError = {
    minlength: () => {
      return `Min length is ${this.requiredLength} your enter is ${this.actualLength}`;
    },
    required: () => {
      return `This filed is required`;
    },
    maxlength: () => {
      return `Max length is ${this.requiredLength} your enter is ${this.actualLength}`;
    },
    toEqual: () => {
      return `Passwords do not match`;
    },
    pattern: () => {
      return `Invalid filed pattern`;
    }
  };

  public ngOnInit() {
    console.log('a', this.file);
    console.log('focus', focus);
    this.file.valueChanges.subscribe((e) => {
/*      console.log('valueChange', e);*/
/*      console.log('a', this.file);*/
      this.iterator(this.file);
/*      console.log('this.error', this.error);*/
    });
    this.iterator(this.file);
  }

  public iterator(obj) {
    let control = obj.errors;
    this.error = () => { return ''; };
    console.log('obj.touched && obj.dirty', obj.touched, obj.dirty);
    for (let key in control) {
      if (control.hasOwnProperty(key) && obj.dirty) {
        this.actualLength = control[key].actualLength;
        this.requiredLength = control[key].requiredLength;
/*        console.log('obj[key]', key, control[key]);

        console.log('obj[key].actualLength', this.actualLength);*/
        this.error = this.dataError[key];
      } /*else {
        this.error = () => { return ''; };
      }*/
    }
  }
}
