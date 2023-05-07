import { client } from "../client";

export const signup = async (userDetail) => {
  try {
    let response = await client.post("", userDetail);
    return response;
  } catch (err) {
    console.log(err);
    return "";
  }
};
