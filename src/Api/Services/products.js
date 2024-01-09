
import { client } from "../client"

export const getPopularItems = async  () =>{
    try{
        let response = await client.get('product/getpopularproduct');       
        return response ;
    }
    catch(err){
        return [];
    }

}
export const getAllItems = async  () =>{
    try{
        let response = await client.get('product/getAllproduct');       
        return response ;
    }
    catch(err){
        return [];
    }

}
export const getProductDetails = async  (product_id) =>{
    try{
        let response = await client.get(`product/getproduct/${product_id}`,{authorization:true});       
        return response ;
    }
    catch(err){
        return [];
    }

}
export const addProduct = async  (formData) =>{
    try{
        let response = await client.post(`product/addProduct`,formData,{authorization:true});       
        return response ;
    }
    catch(err){
        return [];
    }

}