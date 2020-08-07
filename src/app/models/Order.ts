

export class Order {
    id: string;
    customerID: string;
    customerName: string;
    dateCreate: Date;
    dateShip: Date;
    dateDeliver: Date;
    message: string;
    products: Array<string>;
    total: number;
    paid: boolean;
    balanceRemaining: number;
    delivered: boolean;
    
    

    constructor(args?) {
        if (args) {
          this.id = args.id;
          this.customerID = args.customerID;
          this.customerName = args.customerName;
          this.dateCreate = new Date();
          this.dateShip = args.dateShip;
          this.dateDeliver = args.dateDeliver;
          this.message = args.message;
          this.products = args.products;
          this.paid = args.paid;
          this.balanceRemaining = args.balance;
          this.delivered = false;
        }
      }


}