
import { client } from "../client"

export const getAllCategories = async  () =>{
    try{
        let response = await client.get('product/getCategory');       
        return response ;
    }
    catch(err){
        return [];
    }

}