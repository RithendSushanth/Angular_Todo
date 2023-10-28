import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})  
export class AppComponent {
  title = 'Todo-list';
  darkMode = false; // Initialize dark mode as false

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    this.applyDarkModeStyles();
  }

  applyDarkModeStyles() {
    if (this.darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }
}