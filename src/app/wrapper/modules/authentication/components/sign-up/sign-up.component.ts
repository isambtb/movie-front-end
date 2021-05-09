import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public form: FormGroup = new FormGroup({});
  public model: { username: string; email: string, password: string } = { username: '', email: '', password: '' };
  public fields: FormlyFieldConfig[] = [];

  constructor() {}

  ngOnInit(): void {
    this.initForm();
  }

  public initForm() {
    this.fields = [
      {
        key: 'username',
        type: 'input',
        templateOptions: {
          label: 'Username',
          placeholder: 'Enter username',
          required: true,
        }
      }, {
        key: 'email',
        type: 'input',
        templateOptions: {
          label: 'Email Address',
          placeholder: 'Enter email',
          required: true,
        },
      },
      {
        key: 'password',
        type: 'input',
        templateOptions: {
          label: 'Password',
          type: 'password',
          placeholder: 'Enter password',
          required: true,
        }
      },
    ];
  }

  public onSubmit(model: { username: string; email: string; password: string }) {
    if (!this.form.valid) {
      return;
    }

    console.log(model);
    // this.registerUser(model.username, model.email, model.password);
  }

  // public registerUser(username: string, email: string, password: string) {
  //   const body = { username, email, password };
  //   this.authenticationService.register(body)
  //     .subscribe((val) => console.log(val));
  // }
}