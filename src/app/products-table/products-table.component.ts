import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product.model';
import { MatTable } from '@angular/material';


@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent implements OnInit {

  @ViewChild(MatTable, {static: true}) datable: MatTable<any>;

  products:Product[];

  prodColumns: string[] = ["id", "prodname", "price", "description", "department"];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProduct();
    this.productService.chamadaNovoProduto.subscribe(() =>{
      this.datable.renderRows();
    });
  }

}
