import { FormControl, FormGroup } from '@angular/forms';

export interface LoginData {
  login: string;
  password: string;
}

export type FormType<T> = {
  [P in keyof T]: T[P] extends 'object' ? FormGroup<FormType<T[P]>> : FormControl<T[P]>;
};
