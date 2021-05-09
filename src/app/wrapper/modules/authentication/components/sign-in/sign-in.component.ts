import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { AuthenticationService } from 'src/app/wrapper/modules/authentication/services/authentication.service';
import { CookieHelper } from 'src/app/wrapper/helpers/cookie.helper';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  public form: FormGroup = new FormGroup({});
  public model: { username: string; password: string } = { username: '', password: '' };
  public fields: FormlyFieldConfig[] = [];

  constructor(private authenticationService: AuthenticationService) {}

  ngOnInit(): void {
    this.initFields();
  }

  public initFields() {
    this.fields = [
      {
        key: 'username',
        type: 'input',
        templateOptions: {
          label: 'Username',
          placeholder: 'Enter username',
          required: true,
        }
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

  public onSubmit(model: { username: string; password: string }) {
    if (!this.form.valid) {
      return;
    }

    this.loginUser(model.username, model.password);
  }

  public loginUser(username: string, password: string) {
    const body = { username, password };
    this.authenticationService.login(body)
      .subscribe((user) => CookieHelper.setCookie('AUTH_USER_TOKEN', user.accessToken));
  }
}
