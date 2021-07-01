import { Component } from '@angular/core';

import { products } from '../products';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    products = products;

    share(id: number) {
        // window.alert('The product has been shared!');
        console.log(this.products);
        console.log(id);
    }

    removeItem(id: number) {
        console.log(id);
        this.products.filter(el => el.id !== id);
        console.log(products);
    }
}
