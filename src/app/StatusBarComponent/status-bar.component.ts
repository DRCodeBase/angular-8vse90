import { Component } from '@angular/core';

@Component({
  selector: 'app-status-bar',
  template: `
    <div class="status-controls">
      <div class="status-buttons">
        <button (click)="decrement()">-</button>
        <button (click)="increment()">+</button>
        <div>{{ value }}</div>
      </div>
      <div class="status" [ngStyle]="{'width.%': value * 10}"></div>
    </div>
  `,
  styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent {
  value: number = 0;

  increment() {
    if (this.value < 10) {
      this.value++;
    }
  }

  decrement() {
    if (this.value > 0) {
      this.value--;
    }
  }
}