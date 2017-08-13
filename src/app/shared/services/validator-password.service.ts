/**
 * Created by andrei on 12.08.2017.
 */
import { AbstractControl, NG_VALIDATORS, Validator, FormGroup } from '@angular/forms';

export function toEqualValidation(filname: string) {
  return (controls: FormGroup): {[key: string]: any} => {
    const parent = controls.parent;
    if (!parent) {
      return null;
    } else if (
      controls.value
      && controls.value !== ''
      && controls.value === controls.parent.get(filname).value
    ) {
      return null;
    }
    return {toEqual: true};
  };
}
