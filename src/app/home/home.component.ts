import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'ESEN';
  products = ['Iphone X', 'Mac book Pro', 'Canon 7D', 'Samsung A80'];

  constructor() { }

  ngOnInit() {
  }

  deleteProduct(product) {
    var index = this.products.indexOf(product);
    this.products.splice(index, 1);
  }

}
