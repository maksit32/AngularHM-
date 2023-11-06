import { Component } from '@angular/core';


class Product {
  name: string;
  cost: number;



  constructor(name: string, cost: number) {
    this.name = name;
    this.cost = cost;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

// Виден в коде app.component.html
export class AppComponent {
  title = 'hm2';


}
