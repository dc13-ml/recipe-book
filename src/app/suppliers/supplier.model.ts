
export class Supplier {
  public name: string;
  public description: string;
  public phoneNumber: string;
  public address: string;

  constructor(name: string, desc: string, phoneNumber: string, address: string) {
    this.name = name;
    this.description = desc;
    this.phoneNumber = phoneNumber;
    this.address = address;
  }
}
