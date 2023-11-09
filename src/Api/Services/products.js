
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