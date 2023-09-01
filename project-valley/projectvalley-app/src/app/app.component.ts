import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
/*import { RouterModule } from '@angular/router';*/

@Component({
  selector: 'app-root',
  /*standalone: true,
  imports: [
    RouterModule,
  ],*/
  template: `
  <body class="body">
    <section> 
      <h4>We'd be happy if you tell us more about your project</h4>
      <h6 class="required">All fields marked with a * are required!</h6>
      
      <form myForm="ngForm">
        <p><b>Name of your project:</b></p> <p  class="required">*</p>
        <input type="text" id="name" name="name" placeholder="A descriptive name" ngModel required>

        <p><b>Who is your target audience?</b></p>
        <input type="radio" name="target">Media indusrty <br>
        <input type="radio" name="target">Medical industry <br>
        <input type="radio" name="target">Finance industry <br>
        <input type="radio" name="target">Tech industry <br>
        <input type="radio" name="target">Engineering industry <br>
        <input type="radio" name="target">Other
        <input type="text" id="audience" name="audience" placeholder="State here...">

        <p><b>Give a short desrciption of your project</b></p> <p class="required">*</p>
        <textarea id="description" name="description" class="txtarea" placeholder="Type your description here..." required></textarea>
      
        <p><b>What impact do you intend your project to have?</b></p> <p class="required">*</p>
        <textarea id="impact" name="impact" class="txtarea" required></textarea>

        <p><b>Upload a prototype below:</b></p>
        <input type="file">

        <button type="submit" class="button1" >Submit</button>
        <button type="reset" class="button2" name="clear">Clear Form</button>
      </form>
    </section>
</body>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project Valley';

  onSubmit() {
    // This method will be called when the form is submitted
    // You can handle form submission logic here
    console.log('Form submitted!');
  }

  resetForm(form: NgForm) {
    form.resetForm(); // Reset the form to its initial state
  }
}