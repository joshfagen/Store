

export class Customer {
    id: string;
    name: string;
    dob: Date;
    address: object;
    phone: string;
    email: string;
    balance: number;
    hasOrdered: boolean;
    orders: Array<string>;
    dateAdded: Date;
    

    constructor(args?) {
        if (args) {
          this.id = args.id;
          this.name = args.name;
          this.dob = args.dob;
          this.address = args.address;
          this.phone = args.phone;
          this.email = args.email;
          this.balance = args.balance;
          this.hasOrdered = false;
          this.orders = [];
          this.dateAdded = new Date();
    
        }
      }


}