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
  public minLength: number;
  public maxLength: number;
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
    }
  };

  public ngOnInit() {
    console.log('a', this.file.errors);
    this.file.valueChanges.subscribe((e) => {
      console.log('valueChange', e);
      console.log('a', this.file.errors);
      this.iterator(this.file.errors);
      console.log('this.error', this.error);
    });
    this.iterator(this.file.errors);
  }

  public iterator(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        this.actualLength = obj[key].actualLength;
        this.requiredLength = obj[key].requiredLength;
        this.error = this.dataError[key];
      }/* else {
        this.error = null;
      }*/
    }
  }
}
