
import { client } from "../client"

export const getPopularCategories = async  () =>{
    try{
        let response = await client.get('user/products');       
        return response ;
    }
    catch(err){
        return [];
    }

}