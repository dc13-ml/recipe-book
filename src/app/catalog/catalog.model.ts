
export class Catalog {
    public name: string;
    public description: string;
    public category: string;
    public imagePath: string;

    constructor(name: string, description: string, category: string, imagePath: string) {
      this.name = name;
      this.description = description;
      this.category = category;
      this.imagePath = imagePath;
    }
}
