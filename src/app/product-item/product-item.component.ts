import { Component, Input } from '@angular/core';



@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent {
  @Input() name: string = "";
  @Input() description: string = "";
  @Input() price: number = 0;

}
