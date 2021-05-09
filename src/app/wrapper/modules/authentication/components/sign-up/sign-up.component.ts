import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { AuthenticationService } from 'src/app/wrapper/modules/authentication/services/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  public form: FormGroup = new FormGroup({});
  public model: { username: string; password: string } = { username: '', password: '' };
  public fields: FormlyFieldConfig[] = [];

  constructor(private authenticationService: AuthenticationService) {}

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

  public onSubmit(model: { username: string; password: string }) {
    if (!this.form.valid) {
      return;
    }

    this.registerUser(model.username, model.password);
  }

  public registerUser(username: string, password: string) {
    const body = { username, password };
    this.authenticationService.register(body)
      .subscribe((val) => console.log(val));
  }
}