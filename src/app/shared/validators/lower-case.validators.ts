import { AbstractControl } from "@angular/forms";

//se não tiver erro de validação: retorna null
// se tiver erro retorna um objeto { lowercase: true }
export function lowerCaseValidator(control: AbstractControl) {

  if (control.value.trim() && !/^[a-z0-9_\-]+$/.test(control.value)) {
    return { lowerCase: true };
  }

  return null;
}
