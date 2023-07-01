 import axios from 'axios';
 

let api: string = `${process.env.REACT_APP_API}/product`;

 export function getProducts(){
    const token = sessionStorage.getItem("token") as string
    return axios.get(api,{
        headers:{
            Authorization: token,
        },
    });
 }
 export function getProductById(id : String){
    return axios.get(`${api}/${id}`,{
    headers: {
        Authorization: sessionStorage.getItem("token") as string,
    }
    })
 }

