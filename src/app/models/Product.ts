

export class Product {
    id: string;
    productName: string;
    companyName: string;
    inStock: number;
    price: number;
    description: string;
    onSale: boolean;
    discount: number;
    nextShipment: Date;
    sold: number;
    orders: Array<string>;
    totalMade: number;

    constructor(args?) {
        if (args) {
          this.id = args.id;
          this.productName = args.productName;
          this.companyName = args.companyName;
          this.inStock = args.inStock;
          this.price = args.price;
          this.description = args.description;
          this.onSale = args.onSale;
          this.discount = args.discount;
          this.nextShipment = args.nextShipment
          this.sold = 0;
          this.orders = [];
          this.totalMade = 0; 
        }
      }


}