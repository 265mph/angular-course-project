import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  optionSelected: string = 'recipe';
  
  navigateOption(feature: string) {
    this.optionSelected = feature;
  }
}
