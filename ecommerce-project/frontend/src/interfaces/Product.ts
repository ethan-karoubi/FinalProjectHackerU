export default interface Product {
    _id?: number;
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
    quantity?: number;
}
