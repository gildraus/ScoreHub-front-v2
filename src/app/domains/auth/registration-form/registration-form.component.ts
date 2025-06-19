import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '.../../../src/app/shell/services/user-service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss'],
  imports:[ ReactiveFormsModule, CommonModule]
})
export class RegistrationFormComponent {
  registrationForm: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder,
    private userService: UserService
  ) {
    this.registrationForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        this.passwordValidator
      ]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  // Custom password validator
  passwordValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;
    if (!value) return null;

    const hasNumber = /[0-9]/.test(value);
    const hasUpper = /[A-Z]/.test(value);
    const hasLower = /[a-z]/.test(value);
    const hasSpecial = /[#?!@$%^&*-]/.test(value);

    const passwordValid = hasNumber && hasUpper && hasLower && hasSpecial;
    return !passwordValid ? { invalidPassword: true } : null;
  }

  // Custom validator to check if passwords match
  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (!password || !confirmPassword) return null;

    return password.value !== confirmPassword.value ? { passwordMismatch: true } : null;
  }

  // Getter methods for easy access to form controls in template
  get f() { return this.registrationForm.controls; }

  get firstName() { return this.registrationForm.get('firstName'); }
  get lastName() { return this.registrationForm.get('lastName'); }
  get email() { return this.registrationForm.get('email'); }
  get password() { return this.registrationForm.get('password'); }
  get confirmPassword() { return this.registrationForm.get('confirmPassword'); }

  onSubmit() {
    this.isSubmitted = true;

    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;
      
      // Call your user service
      this.userService.registerUserWithModel(formData).subscribe({
        next: (response) => {
          console.log('Registration successful:', response);
          alert('Registration successful!');
          this.resetForm();
        },
        error: (error) => {
          console.error('Registration failed:', error);
          alert(`Registration failed: ${error.message}`);
        }
      });
    } else {
      console.log('Form is invalid');
      this.markFormGroupTouched();
    }
  }

  resetForm() {
    this.registrationForm.reset();
    this.isSubmitted = false;
  }

  private markFormGroupTouched() {
    Object.keys(this.registrationForm.controls).forEach(key => {
      const control = this.registrationForm.get(key);
      control?.markAsTouched();
    });
  }
}