import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  // Initialize scores and results
  innovationScore = 0;
  feasibilityScore = 0;
  marketPotentialScore = 0;
  socialImpactScore = 0;
  overallScore = 0;

  // Define a constructor
  constructor() { }

  ngOnInit() { }

  // Function to evaluate the project
  evaluateProject() {
    // You can add validation here to ensure scores are within a valid range.
    // For simplicity, I'm assuming scores are between 0 and 10.
    if (
      this.innovationScore >= 0 && this.innovationScore <= 10 &&
      this.feasibilityScore >= 0 && this.feasibilityScore <= 10 &&
      this.marketPotentialScore >= 0 && this.marketPotentialScore <= 10 &&
      this.socialImpactScore >= 0 && this.socialImpactScore <= 10
    ) {
      // Calculate the overall score as an average
      this.overallScore = (this.innovationScore + this.feasibilityScore + this.marketPotentialScore + this.socialImpactScore) / 4;
    } else {
      // Handle invalid input
      alert('Please enter valid scores between 0 and 10 for all categories.');
    }
  }
}

