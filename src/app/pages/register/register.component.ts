import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', Validators.required],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }

  onSubmit() {
    const username = this.registerForm.get('username');
    const password = this.registerForm.get('password');
    const email = this.registerForm.get('email');
    const firstName = this.registerForm.get('firstName');
    const lastName = this.registerForm.get('lastName');
    
    this.authService.register(
      username?.value,
      password?.value,
      email?.value,
      firstName?.value,
      lastName?.value,
    
    );
  }
  

}
