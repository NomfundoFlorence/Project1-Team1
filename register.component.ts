// register.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  username: string = ''; // Initialize with an empty string
  password: string = ''; // Initialize with an empty string

  constructor(private router: Router) {}

  ngOnInit() {}

  register() {
    // Make an API call to register the user.
    // If the user is registered successfully, redirect them to the login page.
    // Otherwise, show an error message.
  }
}
