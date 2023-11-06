import { Component } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  //массив продукт айтемов
  products: ProductItemComponent[] = [
    { name: "Ручка перьевая", price: 25, description: "Описание ручки" },
    { name: "Карандаш", price: 13, description: "Описание карандаша" },
    { name: "Резинка", price: 10, description: "Описание резинки" },
    { name: "Линейка", price: 15, description: "Описание линейки" }
  ];
}
