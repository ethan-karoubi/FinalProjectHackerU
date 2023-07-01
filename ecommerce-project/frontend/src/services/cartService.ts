import axios from "axios";
import Product from "../interfaces/Product";

const api: string= process.env.REACT_APP_API + "/cart" || "";

export function addProductToCart (product : Product){
    return axios.put(api, product, {
        headers: {
            Authorization: sessionStorage.getItem("token") as string
        }
    })
}


export function getProductsInCart() {
    return axios.get(api, {
        headers: {
            Authorization: sessionStorage.getItem("token") as string
        }
    });
}

export function createCart() {

    return axios.post(api,null, {
        headers: {
            Authorization: sessionStorage.getItem("token") as string
        }
    });
}