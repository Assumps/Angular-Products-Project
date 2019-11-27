import { Injectable, EventEmitter } from '@angular/core';
import { Product } from './models/product.model';
import { DepartmentService } from './department.service';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private dataFromServer: any[] =[
    {id: 1, name: "Laptop Acer", Department_id: 4, price: 2000, description: "Laptop Gamer"},
    {id: 2, name: "Shirt", Department_id: 1, price: 70, description: "Shirt Gucci"},
    {id: 3, name: "Polo", Department_id: 1, price: 130, description: "Polo Prada"},
    {id: 4, name: "Mouse", Department_id: 3, price: 350, description: "Mouse Zowie Gamer"},
  ]

  private products: Product[] = [];
  private nextID: number;
  chamadaNovoProduto: EventEmitter<Product> = new EventEmitter<Product>();

  constructor(private departmentService: DepartmentService) 
  {
    for(let p of this.dataFromServer){
      this.products.push({
        id: p.id,
        name: p.name,
        description: p.description,
        price: p.price,
        department: this.departmentService.getDepartmentById(p.id),
      });
      this.nextID = p.id+1;
    }
  }

  getProduct(): Product[]{
    return this.products;
  }

  addProduct(p: Product){
    let prod: Product = {id: this.nextID++,...p}
    this.products.push(prod);
    console.log(this.products)
    this.chamadaNovoProduto.emit(prod);
  }

}
