import Product from "./Product";

export default interface Cart {
    id?: number;
   userId: string;
   products: Array<Product>;
   active: boolean;
}