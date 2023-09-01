import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectvalley-app';

  onSubmit() {
    // This method will be called when the form is submitted
    // You can handle form submission logic here
    console.log('Form submitted!');
  }

  resetForm(form: NgForm) {
    form.resetForm(); // Reset the form to its initial state
  }
}