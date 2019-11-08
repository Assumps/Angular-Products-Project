import { Injectable } from '@angular/core';
import { Department } from './models/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private departments: Department[] = [
      {id: 1, name: "Clothing"},
      {id: 2, name: "Books"},
      {id: 3, name: "Elektronics"},
      {id: 4, name: "Computers"},
  ];

  private nextID: number = 5;

  constructor() { }

  getDepartments(){
    return[this.departments];
  }

  addDepartment(d: Department){
    this.departments.push({...d, id: this.nextID ++});
    console.log(this.departments);
  }

}
