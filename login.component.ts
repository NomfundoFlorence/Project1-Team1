import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  constructor(private router: Router) {
    username:'';
    password: '';
  }

  login() {
    // Replace this with actual API call for authentication
    // For example:
    if ( this.username === 'validUser' && this.password === 'validPassword') {
      this.router.navigate(['/home']); // Redirect to home page on successful login
    } else {
      // Handle error message display
      console.log('Invalid credentials. Please try again.');
    }
  }
}
