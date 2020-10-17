import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { requestRegistration } from '../store/actions';
import { ApplicationState } from '../../store/models/application-state.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store<ApplicationState>
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: '',
      password: '',
      email: '',
    });
  }

  submit() {
    const { username, password, email } = this.registerForm.value;
    this.store.dispatch(requestRegistration({ username, password, email }));
  }
}
