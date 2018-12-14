import { Supplier } from './../suppliers/supplier.model';

export class Ingredient {
    public name: string;
    public category: string;
    public imagePath: string;
    public suppliers: Supplier[];

    constructor(name: string, category: string, imagePath: string, suppliers: Supplier[]) {
      this.name = name;
      this.category = category;
      this.imagePath = imagePath;
      this.suppliers = suppliers;
    }
}
