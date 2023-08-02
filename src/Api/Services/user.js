import { client } from "../client";
export const signup = async (userDetail) => {
  try {
    let response = await client.post("/user/register", userDetail,{authorization:false});
    return response;
  } catch (err) {
    console.log(err);
    return "";
  }
};

export const signInUser = async (userDetail) => {
  try {
    let response = await client.post("/user/login", userDetail,{authorization:false});
    return response;
  } catch (err) {
    console.log(err);
    return "";
  }
};

export const updateUserDetail = async (userDetail)=>{
  try{
    let response = await client.patch("/user/updateUser", userDetail,{authorization:true})
    return response
  }
  catch(err){
    console.log("errr",err)
    return "Error"
  }
}

export const  getUserDetail= async ()=>{
try{

  let response = await client.get('/user/getUser',{authorization:true})
  console.log("responseeeeeeeeee",response)
  return response
}
catch(err){
  console.log("pp",err)
  return "Error"
}
}
